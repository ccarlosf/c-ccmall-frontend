/**
 * @description: judger查找类
 * @author: ccarlos
 * @date 2019/12/8 12:16
 */
import {SkuCode} from "./sku-code";

class Judger {

    fenceGroup
    pathDict = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/8 12:18
    */
    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this.initPathDict()
    }

    /**
     * @description: 初始化路径字典
     * @author: ccarlos
     * @date 2019/12/8 12:18
    */
    initPathDict(){
        this.fenceGroup.spu.sku_list.forEach(s=>{
            const skuCode=new SkuCode(s.code)
        })
    }
}

export {
    Judger
}