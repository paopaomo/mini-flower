// components/movie/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    movie: Object
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onGoToDetailsPage() {
      wx.navigateTo({
        url: `/pages/movie-details/movie-details?mid=${this.properties.movie.id}`
      })
    }
  }
})
