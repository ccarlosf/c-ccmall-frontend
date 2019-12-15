// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";
import {Spu} from "../../models/spu";

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
    judger: Object,
    previewImg: String
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
      if(Spu.isNoSpec(spu)){
        this.setData({
          noSpec:true,
          // skuIntact:
        })
        this.bindSkuData(spu.sku_list[0])
        return
      }

      const fencesGroup =new FenceGroup(spu)
      fencesGroup.initFences()
      // fencesGroup.initFences1()
      const judger = new Judger(fencesGroup)
      this.data.judger = judger

      const defaultSku = fencesGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
        console.log(defaultSku)
      } else {
        this.bindSpuData()
      }
      this.bindInitData(fencesGroup)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * @description: 如果不存在默认sku,初始化绑定spu数据
     * @author: ccarlos
     * @date 2019/12/14 23:17
     */
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title:spu.title,
        price:spu.price,
        discountPrice:spu.discount_price
      })
    },

    /**
     * @description: 存在默认sku，初始化绑定sku数据
     * @author: ccarlos
     * @date 2019/12/14 23:21
     */
    bindSkuData(sku) {
      this.setData({
        previewImg: sku.img,
        title:sku.title,
        price:sku.price,
        discountPrice:sku.discount_price,
        stock:sku.stock
      })
    },
      /**
       * @description: 绑定fenceGroup初始化数据
       * @author: ccarlos
       * @date 2019/12/6 21:20
      */
      bindInitData(fenceGroup){
          this.setData({
            fences: fenceGroup.fences,
            skuIntact: this.data.judger.isSkuIntact()
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
      const x = event.detail.x
      const y = event.detail.y
      console.log(event.detail)
      const judger = this.data.judger

      judger.judge(cell,x,y)
      this.setData({
        fences: judger.fenceGroup.fences
      })
    }

  }
})
