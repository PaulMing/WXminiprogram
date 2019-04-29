import { SearchModel } from '../../models/search.js'
import { random } from '../../utils/randomStr.js'
const searchModel = new SearchModel()

Page({
  data: {
    searchWord: '',
    more: '',
    searching: true
  },
  onLoad: function (options) {
    const searchWord = options.searchWord;
    this.setData({
      searchWord
    })
    this.getData(searchWord)
  },

  getData(word) {
    const getSearchRecommend = searchModel.getSearchRecommend(word);
    const getSearchArticleList = searchModel.getSearchArticleList(word);
    Promise.all([getSearchRecommend, getSearchArticleList]).then(res => {
      this.setData({
        tag: res[0].tag,
        recommend: res[0].recommend,
        articleList: res[1],
        searching: false
      })
    })
  },

  onReachBottom() {
    this.setData({
      more: random(20)
    })
  }

})