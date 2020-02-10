// components/sub-category/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories:Array,
    bannerImg:String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * @description: 点击二级分类时，触发事件
     * @author: ccarlos
     * @date: 2020/2/10 22:15
     */
    /*onTapGridItem(event){
      const id = event.detail.key
      this.triggerEvent('itemtap',{
        cid: id
      })
    }*/
    onTapGridItem(event) {
      const id = event.detail.key
      this.triggerEvent('itemtap', {
        cid: id
      })
    }
  }
})
