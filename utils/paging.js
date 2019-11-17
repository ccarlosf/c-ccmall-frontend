/**
 * @description: 分页封装类
 * @author: ccarlos
 * @date 2019/11/17 21:02
 */
class Paging {

    //状态 实例化 new Paging

    start
    count
    locker

    /**
     * @description: 构造器
     * @author: ccarlos
     * @date 2019/11/17 21:09
     */
    constructor(url, count = 10, start = 0) {
        this.url = url
        this.count = count
        this.start = start
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
    }

    /**
     * @description: 获取锁
     * @author: ccarlos
     * @date 2019/11/17 21:09
     */
    getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    releaseLocker() {
        this.locker = false
    }


}