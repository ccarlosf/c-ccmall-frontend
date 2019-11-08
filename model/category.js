/**
 * @description: 分类类
 * @author: ccarlos
 * @date 2019/11/8 22:55
*/
import {Http} from "../utils/Http";

class Category {

    static async getGridCategory() {
        return await Http.request({
            url: 'category/grid/all'
        })
    }
}

export {
    Category
}