// 纯文字组件
import {myBeh} from "../behaviors/my-behavior.js"

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [myBeh],

  properties: {
    mainTitle: String,
    subHead: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
