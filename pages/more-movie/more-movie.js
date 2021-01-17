// pages/more-movie/more-movie.js
const app = getApp()

const count = 12

Page({

  /**
   * Page initial data
   */
  data: {
    movies: [],
    _page: 0,
    _type: 'in_theaters',
    _hasMore: true
  },

  getMovies(start = 0, merge = false, from) {
    wx.showNavigationBarLoading()
    wx.request({
      url: `${app.gBaseUrl}${this.data._type}`,
      data: {
        start,
        count
      },
      success: (res) => {
        const { subjects, start, count, total } = res.data
        if(merge) {
          this.setData({
            movies: [...this.data.movies, ...subjects]
          })
        } else {
          this.setData({
            movies: subjects
          })
        }
        if(from === 'pull') {
          wx.stopPullDownRefresh()
        }
        this.data._hasMore = start + count < total
        wx.hideNavigationBarLoading()
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data._type = options.type
    this.getMovies()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let title = '电影'
    switch(this.data._type) {
      case 'in_theaters':
        title = '正在热映'
        break
      case 'coming_soon':
        title = '即将上映'
        break
      case 'top250':
        title = '豆瓣Top250'
        break
      default:
        title = '正在热映'
        break   
    }
    wx.setNavigationBarTitle({
      title,
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  initialData() {
    this.data._page = 0
    this.data._hasMore = true
  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    this.initialData()
    this.getMovies(0, false, 'pull')
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    if(!this.data._hasMore) {
      return
    }
    this.data._page = this.data._page + 1
    this.getMovies((this.data._page) * count, true)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})