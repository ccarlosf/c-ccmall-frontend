/**
 * @description: 分页封装类
 * @author: ccarlos
 * @date 2019/11/17 21:02
 */
import {Http} from "./Http";
import boolean from "../miniprogram_npm/lin-ui/common/async-validator/validator/boolean";

class Paging {

    //状态 实例化 new Paging

    start
    count
    req
    locker = false
    url
    moreData

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
    getMoreData() {
        //getLocker
        //request
        //releaseLocker
        if (!this._getLocker()) {
            return
        }
        this._actualGetData()
        this._releaseLocker()
    }

    /**
     * @description: 真实获取数据
     * @author: ccarlos
     * @date 2019/11/17 21:26
     */
    _actualGetData() {
        const req = this._getCurrentReq()
        let paging = Http.request(req)
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

         this.moreData=this._moreData(paging.total_page,paging.page)
    }

    _moreData(totalPage, pageNum) {
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