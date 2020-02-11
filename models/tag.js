/**
 * @description: 标签类
 * @author: ccarlos
 * @date: 2020/2/11 21:47
 */
import {Http} from "../utils/Http";

class Tag{
    static getSearchTag(){
        return Http.request({
            url:`tag/type/1`
        })
    }
}

export {
    Tag
}