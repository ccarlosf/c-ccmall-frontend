/**
 * @description: 分类类
 * @author: ccarlos
 * @date 2019/11/8 22:55
*/
import {Http} from "../utils/Http";

class Category {

    /**
     * @description:  获取第三层六宫格分类数据
     * @author: ccarlos
     * @date 2019/11/9 14:55
    */
    static async getHomeLocationC() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Category
}