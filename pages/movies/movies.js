// pages/movies/movies.js

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: [],
    showSearchResult: false,
    searchData: []
  },

  onGoToMore(event) {
    wx.navigateTo({
      url: `/pages/more-movie/more-movie?type=${event.currentTarget.dataset.type}`,
    })
  },

  onConfirm(event) {
    this.setData({
      showSearchResult: true
    })
    wx.request({
      url: `${app.gBaseUrl}search`,
      data: {
        q: event.detail.value
      },
      success: (res) => {
        this.setData({
          searchData: res.data.subjects
        })
      }
    })
  },

  onCancel() {
    this.setData({
      showSearchResult: false,
      searchData: []
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: `${app.gBaseUrl}in_theaters`,
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          inTheaters: res.data.subjects
        })
      }
    })
    wx.request({
      url: `${app.gBaseUrl}coming_soon`,
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          comingSoon: res.data.subjects
        })
      }
    })
    wx.request({
      url: `${app.gBaseUrl}top250`,
      data: {
        start: 0,
        count: 3
      },
      success: (res) => {
        this.setData({
          top250: res.data.subjects
        })
      }
    })
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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})