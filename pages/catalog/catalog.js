import { tagInfoList } from "../../utils/tagList.js";
import { SubscribeModel } from "../../models/subscribe.js";
const subscribeModel = new SubscribeModel()

Page({
  data: {
    tagInfoList: tagInfoList,
    myTagList: [],
    searchWord: ''
  },
  onLoad: function (options) {
    this.getData()
  },
  onShow() {
    this.setData({
      searchWord: ''
    })
  },
  onSubscribeTap() {
    this.getData()
    console.log(11)
  },
  getData() {
    const myTagList = subscribeModel.getMytagList();
    this.setData({
      myTagList
    })
  }
})