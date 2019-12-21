/**
 * @description: 商品补充说明类
 * @author: ccarlos
 * @date 2019/12/21 23:35
*/
import {Http} from "../utils/Http";

class SaleExplain {

    /**
     * @description: 获取固定文本
     * @author: ccarlos
     * @date 2019/12/21 23:36
    */
    static async getFixed(){
        const explains =await Http.request({
            url:`sale_explain/fixed`
        })
        return explains.map(e=>{
            return e.text
        })
    }
}

export {
    SaleExplain
}