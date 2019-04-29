
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgArr: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgArr: ['https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3873040750,1105020127&fm=27&gp=0.jpg', 
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=371772476,1548437417&fm=27&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2198746125,2255961738&fm=27&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2913736945,452898064&fm=27&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2249893882,1165836821&fm=27&gp=0.jpg',
            'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2011641246,1136238184&fm=27&gp=0.jpg',
            'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=177128117,3397391403&fm=27&gp=0.jpg',
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3534289497,3677101726&fm=27&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=49764040,3750999451&fm=27&gp=0.jpg',
            'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3873040750,1105020127&fm=27&gp=0.jpg']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      const index = e.currentTarget.dataset.index
      const array = this.data.imgArr
      wx.previewImage({
        urls: array,
        current: array[index]
      })
    }
  }
})
