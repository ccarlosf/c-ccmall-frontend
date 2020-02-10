/**
 * @description: 一组分类
 * @author: ccarlos
 * @date: 2020/2/10 19:54
 */
class Categories {
    roots = []
    subs = []

    /**
     * @description: 获取所有分类
     * @author: ccarlos
     * @date: 2020/2/10 19:56
     */
    async getAll() {
        const data = await Http.request({
            url: `category/all`
        })
        this.roots = data.roots
        this.subs = data.subs
    }

    /**
     * @description: 获取一级分类
     * @author: ccarlos
     * @date: 2020/2/10 19:57
     */
    getRoots() {
        return this.roots
    }

    /**
     * @description: 获取二级分类
     * @author: ccarlos
     * @date: 2020/2/10 19:58
     */
    getSubs(rootId) {
        return this.roots.find(r => r.id === rootId)
    }
}
export {
    Categories
}