// components/realm/index.js
import {FenceGroup} from "../models/fence-group";
import {Judger} from "../models/judger";
import {Spu} from "../../models/spu";
import {Cell} from "../models/cell";
import {Cart} from "../../models/cart";

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
    previewImg: String,
    currentSkuCount: Cart.SKU_MIN_COUNT
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
          // console.log(defaultSku)
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
        // console.log(defaultSku.stock)
        // console.log(this.data.currentSkuCount)
        this.setStockStatus(defaultSku.stock,this.data.currentSkuCount)
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
      // console.log(sku)
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
      this.setData({
        skuIntact:this.data.judger.isSkuIntact(),
        currentValues:this.data.judger.getCurrentValues(),
        missingKeys:this.data.judger.getMissingKeys()
      })

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
     * @description: 设置是否缺货状态
     * @author: ccarlos
     * @date 2019/12/16 21:55
    */
    setStockStatus(stock, currentCount){
      this.setData({
        outStock:this.isOutOfStock(stock,currentCount)
      })
    },

    /**
     * @description: 判断是否超出库存
     * @author: ccarlos
     * @date 2019/12/16 21:51
     */
    isOutOfStock(stock, currentCount) {
      return stock < currentCount
    },

    /**
     * @description: 监听已经数量onSelectCount，事件回调函数
     * @author: ccarlos
     * @date 2019/12/16 22:05
    */
    onSelectCount(event){
      const currentCount = event.detail.count
      this.data.currentSkuCount = currentCount
      // console.log(currentCount)
      if (this.data.judger.isSkuIntact()) {
        const sku = this.data.judger.getDeterminateSku()
        this.setStockStatus(sku.stock, currentCount)
      }
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
      // console.log(cell)
      // console.log(data)
      cell.status = data.status

      // console.log(event.detail)
      const judger = this.data.judger

      judger.judge(cell,x,y)
      const skuIntact = judger.isSkuIntact()
      if (skuIntact) {
        const currentSku = judger.getDeterminateSku()
        // console.log(currentSku)
        this.bindSkuData(currentSku)
        this.setStockStatus(currentSku.stock, this.data.currentSkuCount)
      }
      this.bindTipData()
      this.bindFenceGroupData(judger.fenceGroup)
      /*  this.setData({
          fences: judger.fenceGroup.fences
        })*/
    }

  }
})
