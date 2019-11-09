import {Http} from "../utils/Http";
/**
 * @description: 主题类
 * @author: ccarlos
 * @date 2019/11/8 20:11
*/
class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'

    themes = []

    //扩展性

    /**
     * @description: 获取一组主题数据
     * @author: ccarlos
     * @date 2019/11/9 14:59
     */
    async getThemes() {
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: `theme/by/names`,
            data: {
                names
            }
        })
    }

    /**
     * @description:  获取第一层主题信息
     * @author: ccarlos
     * @date 2019/11/9 14:54
    */
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-2'
            }
        })
    }

    /**
     * @description:  查找第一层主题信息
     * @author: ccarlos
     * @date 2019/11/9 14:54
     */
    async getHomeLocationA(){
        return this.themes.find(t=>t.name==Theme.locationA)
    }

    /**
     * @description: 查找单个主题数据
     * @author: ccarlos
     * @date 2019/11/9 15:02
    */
    async getHomeLocationE(){
        return this.themes.find(t=>t.name===Theme.locationE)
    }

    /**
     * @description: 获取第五层的主题数据(含Spu数据)
     * @author: ccarlos (与对象无关(this)static方法)
     * @date 2019/11/9 15:05
    */
     static async getHomeLocationESpu(){
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    /**
     * @description: 根据主题名，获取单个主题的详情（含Spu数据）
     * @author: ccarlos
     * @date 2019/11/9 15:04
     */
     static async getThemeSpuByName(name) {
        return await Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }

}

export {
    Theme
}