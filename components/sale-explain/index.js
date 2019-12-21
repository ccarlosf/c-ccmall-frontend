// components/sale-explain/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    texts:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    _texts:Array
  },

  /**
   * @description: 监听texts属性的改变
   * @author: ccarlos
   * @date 2019/12/21 23:30
  */
  observers:{
    'texts':function (texts) {
      // console.log(texts)
      this.setData({
        _texts:texts
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
