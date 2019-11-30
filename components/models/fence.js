/**
 * @description: fence对象类
 * @author: ccarlos
 * @date 2019/11/28 23:38
*/
class Fence {
    valueTitles = []

    /**
     * @description: 推入规格值至规格数组
     * @author: ccarlos
     * @date 2019/11/30 23:14
    */
    pushValueTitle(title){
        this.valueTitles.push(title)
    }
}

export {
    Fence
}