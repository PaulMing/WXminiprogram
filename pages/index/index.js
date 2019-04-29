import { IndexModel } from "../../models/index"
import { likemodel } from "../../models/like"
import { random } from "../../utils/randomStr"
const indexModel = new IndexModel()

Page({
  data: {
    articleList: [],
    markList: [],
    recommend: {},
    getMore: '',
    magazineId: 0,
    loading: true
  },
  onLoad: function (options) {
    this.getData();
  },
  // 下拉触发事件函数
  onReachBottom() {
    this.setData({
      getMore: []
    })
  },
  // 跳转到tabBar中的按钮
  onCatalog() {
    wx.switchTab({
      url: "/pages/catalog/catalog"
    })
  },

  onNav(e) {
    // 从子元素拿到传递的index值
    const magazineId = e.detail.index
    this.setMagazineId(magazineId)
    this.resetData()
    this.scrollPageToTop()
    this.getData(magazineId)
  },
  // 获取数据
  getData(magazineId) {
    const articleList = indexModel.getArticleList(magazineId)
    const markList = indexModel.getMarkList(magazineId)
    const recommend = indexModel.getRecommendInfo(magazineId)
    Promise.all([articleList, markList, recommend]).then(res => {
      this.setData({
        articleList: res[0],
        markList: res[1],
        recommend: res[2]
      })
      // 数据请求成功后，loading消失
      this.hideLoading()
    })
  },

  hideLoading() {
    this.setData({
      loading: false
    })
  },

  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
    })
  },
  // 每次点击跳转后，返回原页面中回到顶部
  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },

  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  }
})