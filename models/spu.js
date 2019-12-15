/**
 * @description: spu类
 * @author: ccarlos
 * @date 2019/11/29 22:52
*/
import {Http} from "../utils/Http";

class Spu{

    /**
     * @description: 判断是否有规格
     * @author: ccarlos
     * @date 2019/12/15 10:06
    */
    static isNoSpec(spu){
        if(spu.sku_list.length ===1 && spu.sku_list[0].specs.length ===0){
            return true
        }
        return false
    }

    static getDetail(id){
        return Http.request({
            url: `spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}