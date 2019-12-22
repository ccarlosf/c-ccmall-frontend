// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * @description: 点击搜索按钮，跳转到搜索页面
   * @author: ccarlos
   * @date 2019/12/22 16:47
  */
  onGoToSearch(event){
    wx.navigateTo({
      url:'/pages/search/search'
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})