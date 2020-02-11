// pages/search/search.js
import {HistoryKeyword} from "../../models/history-keyword";
import {Tag} from "../../models/tag";
import {Search} from "../../models/search";
import {Paging} from "../../utils/paging";

const history = new HistoryKeyword()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const historyTags = history.get()
    const hotTags = await Tag.getSearchTag()
    this.setData({
      historyTags,
      hotTags
    })
  },

  /**
   * @description: 历史搜索
   * @author: ccarlos
   * @date: 2020/2/10 23:12
   */
  async onSearch(event) {
    const keyword = event.detail.value
    history.save(keyword)

    this.setData({
      historyTags: history.get()
    })

    const paging = Search.search(keyword)
    const data = await paging.getMoreData()
  },

  /**
   * @description: 绑定商品搜索数据
   * @author: ccarlos
   * @date: 2020/2/11 22:14
   */
  bindItems(data) {
    if(data.accumulator.length!==0){
      this.setData({
        items:data.accumulator
      })
    }
  },

  /**
   * @description: 删除历史记录
   * @author: ccarlos
   * @date: 2020/2/11 21:31
   */
  onDeleteHistory(event){
    history.clear()
    this.setData({
      historyTags:[]
    })
  }
})