// pages/movie-details/movie-details.js

const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    movie: {}
  },

  onView() {
    wx.previewImage({
      urls: [this.data.movie.images.large],
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const {
      mid
    } = options
    wx.request({
      url: `${app.gBaseUrl}subject/${mid}`,
      success: (res) => {
        console.log(res)
        this.setData({
          movie: res.data
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