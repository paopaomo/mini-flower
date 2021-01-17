// components/movies/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    title: String,
    movies: Array
  },

  externalClasses: ['f-class'],

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    onTapMore() {
      this.triggerEvent('tapmore')
    }
  }
})