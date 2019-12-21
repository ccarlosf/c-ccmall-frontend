// pages/detail/detail.js
import {Spu} from "../../models/spu";

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
      showRealm:true
    })
  },

  /**
   * @description: 点击立即购买，触发函数
   * @author: ccarlos
   * @date 2019/12/21 13:04
   */
  onBuy(event){
    this.setData({
      showRealm:true
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