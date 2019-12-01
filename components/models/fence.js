/**
 * @description: fence对象类
 * @author: ccarlos
 * @date 2019/11/28 23:38
*/
import {Cell} from "./cell";

class Fence {

    cells = []
    specs

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/1 10:57
     */
    constructor(specs) {
        this.specs = specs
    }

    /**
     * @description: 初始化
     * @author: ccarlos
     * @date 2019/12/1 10:57
     */
    init() {
        this.specs.forEach(s => {
            // this.pushValueTitle(s.value)
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }

    /**
     * @description: 推入规格值至规格数组
     * @author: ccarlos
     * @date 2019/11/30 23:14
    */
    /*pushValueTitle(title){
        this.valueTitles.push(title)
    }*/
}

export {
    Fence
}