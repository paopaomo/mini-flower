// pages/post-details/post-details.js
import {
  postList
} from '../../data/data.js';

const COLLECTED_POSTS = 'COLLECTED_POSTS';

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {
    postDetails: {},
    collected: false,
    isPlaying: false,
    _pid: null,
    _collectedPosts: [],
    _bgAM: null,
    _isFirstPlaying: true
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

  toggleMusicIcon() {
    if (this.data._isFirstPlaying) {
      const {
        url,
        title,
        coverImg
      } = this.data.postDetails.music;
      this.data._bgAM.src = url;
      this.data._bgAM.title = title;
      this.data._bgAM.coverImgUrl = coverImg;
      this.data._isFirstPlaying = false;
      app.gPlayingPostId = this.data._pid;
      return;
    }
    if (this.data.isPlaying) {
      this.data._bgAM.pause();
    } else {
      this.data._bgAM.play();
    }
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
      collected: this.data._collectedPosts.includes(this.data._pid),
      isPlaying: app.gPlayingPostId === this.data._pid && app.gIsPlaying
    });
    const bgAM = wx.getBackgroundAudioManager();
    this.data._bgAM = bgAM;
    bgAM.onPlay(() => {
      app.gIsPlaying = true;
      this.setData({
        isPlaying: true
      })
    });
    bgAM.onPause(() => {
      app.gIsPlaying = false;
      this.setData({
        isPlaying: false
      })
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