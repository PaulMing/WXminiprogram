// components/nav/cmp.js
Component({
  
  properties: {

  },

  data: {
    magazineTypeArr: ["轻芒", "兴趣", "物质", "世界", "新事", "灵魂"],
    magazineIndex: 0,
    activeId: 'magazine0'
  },

  methods: {
    onTap(e) {
      const lastIndex = this.data.magazineIndex
      const index = e.currentTarget.dataset.index 
      console.log(e);
      this.setData({
        magazineIndex: index,
        activeId: `magazine${index === 0 ? 0 : index - 1}`
      })

      if(lastIndex == index) {
        return
      }
      
      this.triggerEvent("nav", {
        index
      }, {})

    }
  }
})
