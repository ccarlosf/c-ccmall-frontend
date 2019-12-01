/**
 * @description: fences组对象类
 * @author: ccarlos
 * @date 2019/11/28 23:39
*/
import {Matrix} from "./matrix";
import {Fence} from "./fence";

class FenceGroup {
    spu
    skuList = []

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
     * @description: fences初始化
     * @author: ccarlos
     * @date 2019/11/30 22:38
    */
    /*initFences1(){
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
        console.log(AT)
        AT.forEach(r=>{
            const fence=new Fence(r)
            fence.init()
            fences.push(fence)
        })
        console.log(fences)
    }

    /**
     * @description: 创建fence 规格行
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