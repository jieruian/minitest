// components/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: ["默认1", "默认2", "默认3"],
    },
    counter:{
      type: Number,
      value:0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(event) {
      //取出点击的index
      const index = event.currentTarget.dataset.index;
      console.log("点击" + index);
      //修改currentIndex
      this.setData({
        currentIndex: index
      })
      //通知页面内部的点击事件
      this.triggerEvent('itemClick', {
        index,
        title: this.properties.titles[index]
      }, {})
    },

    //修改计数
    changConter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
    
  }
})