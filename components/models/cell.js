/**
 * @description: 单元格cell类
 * @author: ccarlos
 * @date 2019/12/1 13:09
*/
import {CellStatus} from "../core/enum";

class Cell {
    title
    id
    status = CellStatus.WAITING

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/1 13:11
    */
    constructor(spec){
        this.title=spec.value
        this.id = spec.value_id
    }
}

export {
    Cell
}