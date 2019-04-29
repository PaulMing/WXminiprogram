Component({
  // 组件的属性列表
  properties: {
    // 属性简写:直接写type类型即可 ->系统会有默认值：字符串默认为空串，数字为0，布尔值为false
    // imgsrc: '',//其会报错，必须写type类型，写空串不能识别
    imgSrc: String,
    mainTitle: String,
    // 非简写
    // imgSrc: {
    //   type: String,
    //   value: '' ,
    //   // 观察:value值(数据)改变时触发->参数：新值、旧值、改变的路径名称
    //   observer: function(newVal,oldVal,changePath){
    //   }
    // },
    // mainTitle: {
    //   type: String,
    //   value: '',
    //   observer: function(newVal,oldVal,changePath){}
    // }
  },
  // 组件原始数据 
  data: {
  },
  // 事件处理函数写在methods中，生命周期函数写在Component构造器的一级参数中，也就是与methods同级
  methods: {
  }
})
