// components/realm/index.js
import {FenceGroup} from "../models/fence-group";

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
      // fencesGroup.initFences()
      fencesGroup.initFences1()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
