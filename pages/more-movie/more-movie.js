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

  getMovies(start = 0) {
    wx.showNavigationBarLoading()
    wx.request({
      url: `${app.gBaseUrl}${this.data._type}`,
      data: {
        start,
        count
      },
      success: (res) => {
        const { subjects, start, count, total } = res.data
        this.setData({
          movies: [...this.data.movies, ...subjects]
        })
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

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    if(!this.data._hasMore) {
      return
    }
    this.data._page = this.data._page + 1
    this.getMovies((this.data._page) * count)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})