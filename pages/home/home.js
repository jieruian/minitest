// pages/home/home.js

import  Toast from '../../miniprogram_npm/vant-weapp/toast/toast'

import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    bannerImgList:[],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      pop: { page: 0, list: [] },
      new: { page: 0, list: [] },
      sell: { page: 0, list: [] }
    },
    currentType: 'pop',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   //请求轮播图和推荐数据
    getMultiData().then(res => {
      console.log(res.errMsg)
      Toast('网络请求成功');
      this.setData({
        banners: res.data.data.banner.list,
        recommends : res.data.data.recommend.list,
        bannerImgList: this.haveBannerImgListAction(res.data.data.banner.list)
      })
      this.selectComponent("#swpierId").initData();
      // console.log(this.data.bannerImgList)
    }).catch(err => {
     console.log(err);
     Toast('网络请求错误');
     console.log("看看"+err.errMsg)
    })

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell') 

  },

  onChange(event) {
    console.log(event)
    wx.showToast({
      title: event.detail.title,
      icon: 'none'
    });
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

  },

  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      // 取出数据
      const list = res.data.data.list;
      // 2.2.将数据设置到对应type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list)
      
      // 2.3.将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`;
      const pageKey = `goods.${type}.page`;
      this.setData({
        [typeKey]: oldList,
        [pageKey]: page
      })
    }).catch(err => {
     console.log(err);
    })
  },

  haveBannerImgListAction(list) {
    var arrBox = [];
    list.forEach((item, index, array) => {
      //  console.log("图片"+item.image); 
      arrBox.push(item.image) 
       })
    return arrBox
  }
})