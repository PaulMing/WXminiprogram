// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tag: String,
    tagId: Number
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  methods: {
    onTap() {
      // const tagId = this.properties.tagId
      // wx.navigateTo({
      //   url: `/pages/type/type?tagId=${tagId}`
      // })

      this._showError()
    },

    _showError() {
      wx.showToast({
        title: "当前小程序为测试版本，不能点击跳转哦~",
        icon: "none",
        duration: 1000,
        mask: true
      })
    }
  }
})
