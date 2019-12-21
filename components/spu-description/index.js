// components/spu-description/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    spu:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    tags:Array
  },

  /**
   * @description: 监听器，监听spu属性
   * @author: ccarlos
   * @date 2019/12/21 19:40
  */
  observers:{
    'spu':function (spu) {
      if(!spu){
        return
      }
      if(!spu.tags){
        return
      }
      const tags=spu.tags.split('$')
      this.setData({
        tags
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
