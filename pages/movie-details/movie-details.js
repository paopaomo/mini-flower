// pages/movie-details/movie-details.js

import {
  convertArrayToNameString,
  convertArrayToInfo
} from "../../utils/utils"

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

  processMovieData(movie) {
    const info = {
      ...movie
    }
    info.directorsStr = convertArrayToNameString(movie.directors)
    info.castsStr = convertArrayToNameString(movie.casts)
    info.castsInfo = convertArrayToInfo(movie.casts)
    info.genresStr = movie.genres.join('、')
    info.subtitle = movie.countries[0] + " - " + movie.year
    info.score = movie.rating.stars / 10
    this.setData({
      movie: info
    })
    console.log(info)
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
        this.processMovieData(res.data)
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