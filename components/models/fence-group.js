/**
 * @description: fences组对象类
 * @author: ccarlos
 * @date 2019/11/28 23:39
*/
import {Matrix} from "./matrix";

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
    initFences(){
        const matrix=this._createMatrix(this.skuList)
        matrix.forEach((element,i,j)=>{

        })
        //for
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