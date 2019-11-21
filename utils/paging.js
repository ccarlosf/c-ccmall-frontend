/**
 * @description: 分页封装类
 * @author: ccarlos
 * @date 2019/11/17 21:02
 */
import {Http} from "./Http";

class Paging {

    //状态 实例化 new Paging

    start
    count
    req
    locker = false
    url
    moreData
    accumulator = []

    /**
     * @description: 构造器
     * @author: ccarlos
     * @date 2019/11/17 21:09
     */
    constructor(req, count = 10, start = 0) {
        this.req = req
        this.count = count
        this.start = start
        this.url = req.url
    }


    /**
     * @description: 获取更多数据
     * @author: ccarlos
     * @date 2019/11/17 21:09
     */
    async getMoreData() {
        if(!this.moreData){
            return
        }
        //getLocker
        //request
        //releaseLocker
        if (!this._getLocker()) {
            return
        }
        const data=await this._actualGetData()
        this._releaseLocker()
        return data
    }

    /**
     * @description: 真实获取数据
     * @author: ccarlos
     * @date 2019/11/17 21:26
     */
   async _actualGetData() {
        const req = this._getCurrentReq()
        let paging =await Http.request(req)
        if (!paging) {
            return null
        }
        if (paging.total === 0) {
            return {
                empty: true,
                items: [],
                moreData: false,
                accumulator: []
            }
        }

        this.moreData = Paging._moreData(paging.total_page, paging.page)
        if (this.moreData) {
            this.start += this.count
        }
        this.accumulator(paging.items)
        return {
            empty: false,
            items: paging.items,
            moreData: this.moreData,
            accumulator:this.accumulator
        }
    }

    /**
     * @description: 累加器
     * @author: ccarlos
     * @date 2019/11/20 23:14
    */
    _accumulate(items){
        this.accumulator=this.accumulator.concat(items)
    }

    /**
     * @description: 判断是否有更多数据
     * @author: ccarlos
     * @date 2019/11/20 23:14
    */
    static _moreData(totalPage, pageNum) {
        return pageNum < tatalPage - 1
    }

    /**
     * @description: 获取当前请求对象
     * @author: ccarlos
     * @date 2019/11/17 21:34
     */
    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        if (url.indexOf('?') !== -1) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url =url
        return this.req
    }

    /**
     * @description: 获取锁
     * @author: ccarlos
     * @date 2019/11/17 21:09
     */
    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    _releaseLocker() {
        this.locker = false
    }


}

export {
    Paging
}