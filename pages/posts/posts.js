// pages/posts/posts.js
import {
  postList
} from '../../data/data.js';

Page({

  /**
   * Page initial data
   */
  data: {
    postList: []
  },

  goToDetailsPage(event) {
    let pid
    if(event.type === 'posttap') {
      pid = event.detail.pid
    } else {
      pid = event.currentTarget.dataset.postId
    }
    wx.navigateTo({
      url: `/pages/post-details/post-details?pid=${pid}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      postList
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