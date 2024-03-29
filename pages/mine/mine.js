// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgPath:''
  },

 jump(){
   wx.navigateTo({
     url: './sub/about',
     events: {
       // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
       acceptDataFromOpenedPage: function (data) {
         console.log(data)
       },
       someEvent: function (data) {
         console.log(data)
       }
  },
     success: function (res) {
       console.log('发送');
       // 通过eventChannel向被打开页面传送数据
       res.eventChannel.emit('lastPagesDatas', { data: '前面页面发送过来的数据' })
     }
   })
 },
  btnClick() {
    // console.log('点击')
    wx.chooseImage({
      success:(res) => {
        console.log(res),
        this.setData({
         imgPath:  res.tempFilePaths[0]
        })
      }
    })
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