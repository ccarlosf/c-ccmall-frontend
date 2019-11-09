/**
 * @description: Banner类
 * @author: ccarlos
 * @date 2019/11/8 20:11
 */
import {Http} from "../utils/Http";

class Banner {
    static LocationB = 'b-1'

    /**
     * @description: 获取第二层Banner轮播图数据
     * @author: ccarlos
     * @date 2019/11/9 14:56
    */
    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.LocationB}`
        })
    }
}

export {
    Banner
}