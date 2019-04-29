class Request {
  baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'
  getData({ url, method = 'GET', data = {} }) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: this.baseUrl + url,
        method: method,
        data: data,
        success: res => {
          if (res.data.code == 0) {
            resolve(res.data.data)
          } else {
            this._showError()
          }
        },
        fail: err => {
          reject()
          this._showError()
        }
      })
    })
  }
  _showError() {
    wx.showToast({
      title: "请求错误",
      icon: "none"
    })
  }
}

export { Request }