/**
 * @description: 历史搜索关键词类
 * @author: ccarlos
 * @date: 2020/2/10 23:13
 */
class HistoryKeyword{
    static MAX_ITEM_COUNT = 20
    static KEY = 'keyword'

    keywords = []

    constructor(){
        this.keywords = this._getLocalKeywords()
    }

// 不存在实例属性
// 单例模式

    /**
     * @description: 保存关键词数据
     * @author: ccarlos
     * @date: 2020/2/11 21:06
     */
    save(keyword) {
        // 缓存中写入数据
        // 去重
        const items = this.keywords.filter(k => {
            return k === keyword
        })
        if (items.length !== 0) {
            return
        }
        if (this.keywords.length >= HistoryKeyword.MAX_ITEM_COUNT) {
            this.keywords.pop()
        }
        this.keywords.unshift(keyword)
        this._refreshLocal()
    }

    /**
     * @description: 获取数组元素
     * @author: ccarlos
     * @date: 2020/2/11 21:07
     */
    get() {
        return this.keywords
    }

    /**
     * @description: 清空数组
     * @author: ccarlos
     * @date: 2020/2/11 21:07
     */
    clear() {
        this.keywords = []
        this._refreshLocal()
    }

    /**
     * @description: 刷新缓存
     * @author: ccarlos
     * @date: 2020/2/11 21:10
     */
    _refreshLocal(){
        wx.setStorageSync(HistoryKeyword.KEY,this.keywords)
    }

    /**
     * @description: 获取本地缓存关键词
     * @author: ccarlos
     * @date: 2020/2/11 21:13
     */
    _getLocalKeywords(){
        const keywords = wx.getStorageSync(HistoryKeyword.KEY)
        if(!keywords){
            wx.setStorageSync(HistoryKeyword.KEY,[])
            return  []
        }
        return keywords
    }
}