// components/post/index.js
Component({
  /**
   * Component properties
   */
  properties: {
    item: Object
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
    onTap() {
      this.triggerEvent('posttap', {
        pid: this.properties.item.postId
      })
    }
  }
})
