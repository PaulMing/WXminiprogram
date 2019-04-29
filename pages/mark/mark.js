Page({
  data: {
    userInfo: {},
    authorized: false,
    likeList: []
  },
  onLoad: function (options) {
    this.userAuthorized()
  },
  onShow() {
    this.getMyLike()
  },
  onPullDownRefresh() {
    this.getMyLike()
  },
  onGetUserInfo(e) {
    const userInfo = e.detail.userInfo
    if (userInfo) {
      this.setData({
        userInfo,
        authorized: true
      })
      this.getMyLike()
    }
  },
  getMyLike() {
    const likeList = wx.getStorageSync('likeList') || []
    this.setData({
      likeList
    })
  },

  userAuthorized() {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.setData({
                userInfo: res.userInfo,
                authorized: true
              })
              this.getMyLike()
            }
          })
        }
      }
    })
  }
})