// pages/post-details/post-details.js
import {
  postList
} from '../../data/data.js';

Page({

  /**
   * Page initial data
   */
  data: {
    postDetails: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const pid = parseInt(options.pid);
    const postDetails = postList.find(item => item.postId === pid);
    this.setData({
      postDetails
    });
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