/**
 * @description: fences组对象类
 * @author: ccarlos
 * @date 2019/11/28 23:39
*/
import {Matrix} from "./matrix";
import {Fence} from "./fence";
import {CellStatus} from "../core/enum";

class FenceGroup {
    spu
    skuList = []
    fences = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/11/30 21:30
     */
    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    /**
     * @description: 获取默认Sku
     * @author: ccarlos
     * @date 2019/12/14 22:06
     */
    getDefaultSku() {
        const defaultSkuId = this.spu.default_sku_id
        if (!defaultSkuId) {
            return
        }
        return this.skuList.find(s => s.id === defaultSkuId)
    }

    /**
     * @description: 根据cellId号改变cell状态
     * @author: ccarlos
     * @date 2019/12/14 22:48
    */
    setCellStatusById(cellId,status){
        this.eachCell((cell)=>{
            if(cell.id===cellId){
                cell.status = status
            }
        })
    }

    /**
     * @description: 通过x和y坐标号改变cell状态
     * @author: ccarlos
     * @date 2019/12/14 22:49
    */
    setCellStatusByXY(x,y,status){
        this.fences[x].cells[y].status = status
    }
    
    /**
     * @description: fences初始化
     * @author: ccarlos
     * @date 2019/11/30 22:38
    */
   /* initFences1(){
        const matrix=this._createMatrix(this.skuList)
        const fences = []
        let currentJ = -1
        matrix.each((element,i,j)=>{
            if (currentJ !== j) {
                //开启一个新列，需要创建一个新的fence
                currentJ = j
                // createFence
                fences[currentJ]=this._createFence(element)
            }
            // fences[currentJ].cells(element)
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }*/

    /**
     * @description: 使用转置方法创建fences
     * @author: ccarlos
     * @date 2019/12/1 10:53
    */
    initFences(){
        const matrix=this._createMatrix(this.skuList)
        const fences = []
        const AT =matrix.transpose()
        // console.log(AT)
        AT.forEach(r=>{
            const fence=new Fence(r)
            fence.init()
            fences.push(fence)
        })
        this.fences = fences
        // console.log(fences)
    }

    /**
     * @description: 回调遍历cell函数
     * @author: ccarlos
     * @date 2019/12/8 20:42
    */
    eachCell(cb) {
        for (let i = 0; i < this.fences.length; i++) {
            for (let j = 0; j < this.fences[i].cells.length; j++) {
                const cell=this.fences[i].cells[j]
                cb(cell,i,j)
            }
        }
    }

    /**
     * @description: 创建fence规格行
     * @author: ccarlos
     * @date 2019/11/30 23:22
    */
    _createFence(element){
        const fence=new Fence()
        // fence.pushValueTitle(element.value)
        return fence
    }

    /**
     * @description: 创建矩阵
     * @author: ccarlos
     * @date 2019/11/30 22:39
    */
    _createMatrix(skuList){
        const  m = []
        skuList.forEach(sku=>{
            m.push(sku.specs)
        })
        return new Matrix(m)
    }

    // 1.数学函数库 JS 体积太大 mathjs
    // 2.不用数学函数库，借助矩阵思维
}

export {
    FenceGroup
}