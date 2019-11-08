/**
 * @description: Banner类
 * @author: ccarlos
 * @date 2019/11/8 20:11
 */
import {Http} from "../utils/Http";

class Banner {
    static LocationB = 'b-1'

    static async getHomeLocationB() {
        return await Http.request({
            url: 'banner/name/${Banner.LocationB}'
        })
    }
}

export {
    Banner
}