// components/spu-preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
      tags:Array
  },

  observers:{
      data:function (data) {
          if(!data){
              return
          }
          if(!data.tags){
              return;
          }
          const tags=data.tags.split('$')
          this.setData({
              tags
          })
      }
    },

  /**
   * 组件的方法列表
   */
  methods: {
      /**
       * @description: 图片比例缩放
       * @author: ccarlos
       * @date 2019/11/27 21:31
      */
      onImgLoad(event) {
          const {width, height} = event.detail
          this.setData({
              w: 340,
              h: 340 * height / width
          })
      },

      /**
       * @description: 点击商品触发函数
       * @author: ccarlos
       * @date 2019/11/27 21:31
      */
      onItemTap(event){
          console.log("点击商品触发函数event"+JSON.stringify(event))
          const pid =event.currentTarget.dataset.pid
          wx.navigateTo({
              url: `/pages/detail/detail?pid=${pid}`
          })
      }
      //业务型组件
      //通用型组件
  }
})
