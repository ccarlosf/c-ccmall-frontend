// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";
import {Spu} from "../../models/spu";
import {Cell} from "../models/cell";

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
        this.processNoSpec(spu)
        /* this.setData({
           noSpec:true,
           // skuIntact:
         })
         this.bindSkuData(spu.sku_list[0])
         return*/
      } else {
        this.processHasSpec(spu)
      }

      /*  const fencesGroup =new FenceGroup(spu)
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
        this.bindInitData(fencesGroup)*/
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
    /*  bindInitData(fenceGroup){
          this.setData({
            fences: fenceGroup.fences,
            skuIntact: this.data.judger.isSkuIntact()
          })
      },*/

    /**
     * @description: 处理无规格时的数据
     * @author: ccarlos
     * @date 2019/12/15 13:28
     */
    processNoSpec(spu) {
      this.setData({
        noSpec: true,
        // skuIntact:
      })
      this.bindSkuData(spu.sku_list[0])
    },

    /**
     * @description: 处理有规格时的数据
     * @author: ccarlos
     * @date 2019/12/15 13:27
     */
    processHasSpec(spu) {
      const fenceGroup = new FenceGroup(spu)
      fenceGroup.initFences()
      const judger = new Judger(fenceGroup)
      this.data.judger = judger

      const defaultSku = fenceGroup.getDefaultSku()
      if (defaultSku) {
        this.bindSkuData(defaultSku)
      } else {
        this.bindSpuData()
      }
      this.bindTipData()
      this.bindFenceGroupData(fenceGroup)
    },

    /**
     * @description: 如果不存在默认sku,初始化绑定spu数据
     * @author: ccarlos
     * @date 2019/12/14 23:17
     */
    bindSpuData() {
      const spu = this.properties.spu
      this.setData({
        previewImg: spu.img,
        title: spu.title,
        price: spu.price,
        discountPrice: spu.discount_price,
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
        title: sku.title,
        price: sku.price,
        discountPrice: sku.discount_price,
        stock: sku.stock,
      })
    },

    /**
     * @description: 绑定提示数据
     * @author: ccarlos
     * @date 2019/12/15 13:39
     */
    bindTipData() {
      skuIntact: this.data.judger.isSkuIntact()
    },


    /**
     * @description: 绑定fenceGroup数据
     * @author: ccarlos
     * @date 2019/12/15 13:17
     */
    bindFenceGroupData(fenceGroup) {
      this.setData({
        fences: fenceGroup.fences,
      })
    },

    /**
     * @description: 监听onCellTap事件函数
     * @author: ccarlos
     * @date 2019/12/8 20:12
     */
    onCellTap(event) {
      // console.log(event)
      const data = event.detail.cell
      const x = event.detail.x
      const y = event.detail.y

      const cell =new Cell(data.spec)

      console.log(event.detail)
      const judger = this.data.judger

      judger.judge(cell,x,y)
      const skuIntact = judger.isSkuIntact()
      if (skuIntact) {

      }
      this.bindFenceGroupData(judger.fenceGroup)
      /*  this.setData({
          fences: judger.fenceGroup.fences
        })*/
    }

  }
})
