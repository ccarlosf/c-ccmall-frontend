// pages/home/home.js
import {config} from "../config/config";
import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {SpuPaging} from "../../model/spu-paging";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activityD:null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: async function (options) {
        this.initAllData()
        this.initBottomSouList()
    },

    /**
     * @description: 初始化底部分页对象数据
     * @author: ccarlos
     * @date 2019/11/20 23:21
    */
    async initBottomSouList(){
        const paging=await SpuPaging.getLatestPaging()
        const data=paging.getMoreData()
        if(!data){
            return
        }
    },

    async initAllData() {
        const theme = new Theme()
        //获取初试数据，数组
        await theme.getThemes()

        const themeA = theme.getHomeLocationA()
        const themeE = theme.getHomeLocationE()
        let themeESpu = [];
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu();
            if (data) {
                themeESpu = data.spu_list.slice(0, 8)
            }
        }

        const themeF = theme.getHomeLocationF()

        const bannerB = await Banner.getHomeLocationB()
        const grid = await Category.getHomeLocationC()
        // const activityD=await  Activity.getHomeLocationD()

        const bannerG = await Banner.getHomeLocationG();
        
        const themeH=theme.getHomeLocationH()

        this.setData({
            themeA,
            bannerB,
            grid,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
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