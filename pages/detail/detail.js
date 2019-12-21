// pages/detail/detail.js
import {Spu} from "../../models/spu";
import {ShoppingWay} from "../../components/core/enum";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showRealm:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const pid = options.pid
    const spu = await Spu.getDetail(pid)

    this.setData({
      spu
    })
  },

  /**
   * @description: 点击加入购物车，触发函数
   * @author: ccarlos
   * @date 2019/12/21 13:04
  */
  onAddToCart(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.CART
    })
  },

  /**
   * @description: 点击立即购买，触发函数
   * @author: ccarlos
   * @date 2019/12/21 13:04
   */
  onBuy(event){
    this.setData({
      showRealm:true,
      orderWay:ShoppingWay.BUY
    })
  },

  /**
   * @description: 点击首页图标，跳转函数
   * @author: ccarlos
   * @date 2019/12/21 16:44
  */
  onGotoHome(event){
    wx.switchTab({
      url:'/pages/home/home'
    })
  },

  /**
   * @description: 点击购物车图标，跳转函数
   * @author: ccarlos
   * @date 2019/12/21 16:44
   */
  onGotoCart(event){
    wx.switchTab({
      url:'/pages/cart/cart'
    })
  },


  /**
   * @description: 规格选择变动，监听函数
   * @author: ccarlos
   * @date 2019/12/21 23:07
  */
  onSpecChange(event){
    this.setData({
      specs:event.detail
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})