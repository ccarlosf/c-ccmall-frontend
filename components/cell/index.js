// components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell: Object,
    y: Number,
    x: Number
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
     * @description: 监听onTap事件函数
     * @author: ccarlos
     * @date 2019/12/8 20:12
     */
    onTap(event){
      this.triggerEvent('celltap',{
        //子组件向父组件传参
        cell:this.properties.cell,
        x:this.properties.x,
        y:this.properties.y
      },{
        bubbles:true,
        composed:true
      })
    }
  }
})
