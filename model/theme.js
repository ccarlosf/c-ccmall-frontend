import {Http} from "../utils/Http";
/**
 * @description: 主题类
 * @author: ccarlos
 * @date 2019/11/8 20:11
*/
class Theme {
    static async getHomeLocationA(callback) {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-2'
            }
        })
    }
}

export {
    Theme
}