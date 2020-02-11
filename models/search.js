/**
 * @description: 搜索类
 * @author: ccarlos
 * @date: 2020/2/11 22:11
 */
import {Paging} from "../utils/paging";

class Search{
    /**
     * @description: 根据关键词搜索
     * @author: ccarlos
     * @date: 2020/2/11 22:11
     */
    static search(q){
        return new Paging({
            url:`search?q=${q}`
        })
    }
}

export {
    Search
}