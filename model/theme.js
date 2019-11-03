import {Http} from "../utils/Http";

class Theme {
    static getHomeLocationA(callback){
        Http.request({
            url:`theme/by/names`,
            data: {
                names: 't-2'
            },
            callback: data=>{
                callback(data)
            }
        })
    }
}

export {
    Theme
}