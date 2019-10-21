// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    movies: ["哈哈1", "哈哈2", "哈哈3", "哈哈4", "哈哈4"],
    maincounter: 0,

  },

  btnClick() {
    console.log('点击了vant按钮')

    //获取组件对象
    // const my_sel = this.selectComponent("#tab-self")
    // console.log(my_sel);
    //通过方法修改自定主键的数字
    // my_sel.changConter(20)
    wx.showToast({
      title: '点击了vant按钮',
    })
    
    this.setData({
      maincounter: this.data.maincounter+20
    })
  },

  //点击tabcontrol的事件
  handleTabClick(event) {
   console.log(event.detail.index,event.detail.title)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})