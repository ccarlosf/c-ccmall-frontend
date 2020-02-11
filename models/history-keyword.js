/**
 * @description: 历史搜索关键词类
 * @author: ccarlos
 * @date: 2020/2/10 23:13
 */
class HistoryKeyword{
    static MAX_ITEM_COUNT = 20

    keywords = []

// 不存在实例属性
// 单例模式

    // 缓存中写入数据
    // 去重
    save(keyword) {
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
    }

    get() {
        return this.keywords
    }

    clear() {

    }
}