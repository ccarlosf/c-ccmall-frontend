import {Http} from "../utils/Http";

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