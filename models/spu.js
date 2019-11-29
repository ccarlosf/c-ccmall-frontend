/**
 * @description: spu类
 * @author: ccarlos
 * @date 2019/11/29 22:52
*/
import {Http} from "../utils/Http";

class Spu{
    static getDetail(id){
        return Http.request({
            url: `spu/id/${id}/detail`
        })
    }
}

export {
    Spu
}