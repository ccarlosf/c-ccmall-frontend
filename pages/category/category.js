// pages/category/category.js
import {getSystemSize} from "../../utils/system";
import {px2rpx} from "../../miniprogram_npm/lin-ui/utils/util";
import {Categories} from "../../models/categories";

Page({

  /**
   * 页面的初始数据
   */
  data: {
      defaultRootId: 2
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
      this.setDynamicSegmentHeight()
      // rate

      // 750rpx                    x
      //-----------------  =  ------------------
      // res.screenWidth       res.windowHeight
  },

    /**
     * @description: 初始化分类数据
     * @author: ccarlos
     * @date 2020/02/10 19:49
     */
    async initCategoryData() {
        const categories = new Categories()
        this.data.categories = categories

        await categories.getAll()
        const roots = categories.getRoots()
        const defaultRoot = this.getDefaultRoot()
        const currentSubs = categories.getSubs(defaultRoot.id)
        this.setData({
            roots,
            currentSubs,
            currentBannerImg:defaultRoot.img
        })
    },

    /**
     * @description: 获取默认根分类
     * @author: ccarlos
     * @date: 2020/2/10 20:09
     */
    getDefaultRoot(roots) {
        let defaultRoot = roots.find(r => r.id === this.data.defaultRootId)
        if(!defaultRoot){
            defaultRoot = roots[0]
        }
        return defaultRoot
    },

    /**
     * @description: 动态设置高度
     * @author: ccarlos
     * @date 2020/02/10 19:49
     */
    async setDynamicSegmentHeight() {
        const res = await getSystemSize()
        const windowHeightHpx = px2rpx(res.windowHeight)
        const h = windowHeightHpx - 60 - 20 - 2
        this.setData({
            segHeight: h
        })
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