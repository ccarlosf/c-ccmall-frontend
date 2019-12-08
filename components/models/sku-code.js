/**
 * @description: 拆解skuCode类
 * @author: ccarlos
 * @date 2019/12/8 12:23
 */

class SkuCode {
    code
    spuId
    segments = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/8 12:24
     */
    constructor(code) {
        this.code = code
    }

    /**
     * @description: 拆解skuCode串码
     * @author: ccarlos
     * @date 2019/12/8 12:24
     */
    _splitToSegments() {
        // 2$1-13#3-9#4-16

        const spuAndSpec = this.code.split('$')
        this.spuId = spuAndSpec[0]

        const specCodeArray=spuAndSpec[1].split('#')

    }
}