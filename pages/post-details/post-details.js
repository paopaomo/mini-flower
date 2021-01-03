// pages/post-details/post-details.js
import {
  postList
} from '../../data/data.js';

const COLLECTED_POSTS = 'COLLECTED_POSTS';

Page({

  /**
   * Page initial data
   */
  data: {
    postDetails: {},
    collected: false,
    _pid: null,
    _collectedPosts: []
  },

  onCollect() {
    if (this.data.collected) {
      this.data._collectedPosts = this.data._collectedPosts.filter(item => item !== this.data._pid);
    } else {
      this.data._collectedPosts = [...this.data._collectedPosts, this.data._pid];
    }
    this.setData({
      collected: !this.data.collected
    });
    wx.setStorageSync(COLLECTED_POSTS, this.data._collectedPosts);
    wx.showToast({
      title: this.data.collected ? '收藏成功' : '取消收藏'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.data._pid = parseInt(options.pid);
    this.data._collectedPosts = wx.getStorageSync(COLLECTED_POSTS) || [];
    const postDetails = postList.find(item => item.postId === this.data._pid);
    this.setData({
      postDetails,
      collected: this.data._collectedPosts.includes(this.data._pid)
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