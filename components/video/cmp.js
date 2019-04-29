// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    poster: String,
    duration: String,
    mainTitle: String,

    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  lifetimes: {
    attached() {
      this._getVideoInfo()
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay() {
      this._toggleVideoPoster()
      this.video.play()
    },

    onMaskTap() {
      this._toggleVideoPoster()
      
      this.video.seek(0)
      this.video.stop()
    },

    onVideoEnd() {
      this._toggleVideoPoster()
    },

    _toggleVideoPoster() {
      this.setData({
        showPoster: !this.data.showPoster
      })
    },

    _getVideoInfo() {
      const id = this.properties.videoId
      this.video = wx.createVideoContext(id, this)

    }
  }
})
