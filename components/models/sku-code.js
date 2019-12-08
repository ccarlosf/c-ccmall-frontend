/**
 * @description: 拆解skuCode类
 * @author: ccarlos
 * @date 2019/12/8 12:23
 */
import {format} from "../../miniprogram_npm/lin-ui/common/async-validator/util";
import {combination} from "../../utils/util";

class SkuCode {
    code
    spuId
    totalSegments = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/8 12:24
     */
    constructor(code) {
        this.code = code
        this._splitToSegments()
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
        const length = specCodeArray.length

        for (let i = 1; i <= length; i++) {
            const segments = combination(specCodeArray, i)
            console.log(segments)
        }
    }
}

export {
    SkuCode
}