/**
 * @description: fences组对象类
 * @author: ccarlos
 * @date 2019/11/28 23:39
*/
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

    initFences
}

export {
    FenceGroup
}