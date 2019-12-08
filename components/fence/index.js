// components/fence/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fence: Object,
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
     * @description: 监听onCellTap事件函数
     * @author: ccarlos
     * @date 2019/12/8 20:12
     */
    onCellTap(event) {
      this.triggerEvent('celltap', {
        //子组件向父组件传参
        cell: event.detail.cell,
        y: event.currentTarget.dataset.y,
      }, {
        bubbles: true,
        composed: true
      })
    }
  }
})
