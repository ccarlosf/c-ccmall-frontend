// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";

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
    judger: Object
  },

  /**
   * @description: 生命周期函数
   * @author: ccarlos
   * @date 2019/11/30 21:28
  */
  lifetimes:{
    attached(){

    },
    //ready

    //create
  },

  /**
   * @description: 监听器
   * @author: ccarlos
   * @date 2019/11/30 21:25
  */
  observers:{
    'spu':function (spu) {
      if(!spu){
        return
      }
      const fencesGroup =new FenceGroup(spu)
      fencesGroup.initFences()
      // fencesGroup.initFences1()
      const judger = new Judger(fencesGroup)
      this.data.judger = judger
        this.bindInitData(fencesGroup)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
      /**
       * @description: 绑定fenceGroup初始化数据
       * @author: ccarlos
       * @date 2019/12/6 21:20
      */
      bindInitData(fenceGroup){
          this.setData({
              fences: fenceGroup.fences
          })
      },

    /**
     * @description: 监听onCellTap事件函数
     * @author: ccarlos
     * @date 2019/12/8 20:12
     */
    onCellTap(event) {
      // console.log(event)
      const cell = event.detail.cell
      console.log(event.detail)
      const judger = this.data.judger

      judger.judge(cell)
      this.setData({
        fences: judger.fenceGroup.fences
      })
    }

  }
})
