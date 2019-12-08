/**
 * @description: judger查找类
 * @author: ccarlos
 * @date 2019/12/8 12:16
 */
import {SkuCode} from "./sku-code";
import {CellStatus} from "../core/enum";

class Judger {

    fenceGroup
    pathDict = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/8 12:18
    */
    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this._initPathDict()
    }

    /**
     * @description: 初始化路径字典
     * @author: ccarlos
     * @date 2019/12/8 12:18
    */
    _initPathDict() {
        this.fenceGroup.spu.sku_list.forEach(s=>{
            const skuCode=new SkuCode(s.code)
            this.pathDict=this.pathDict.concat(skuCode.totalSegments)
        })
        console.log(this.pathDict)
    }

    /**
     * @description: judge逻辑处理
     * @author: ccarlos
     * @date 2019/12/8 16:57
     */
    judge(cell) {
        this._changeCellStatus(cell)
    }

    /**
     * @description: 处理cell状态
     * @author: ccarlos
     * @date 2019/12/8 16:57
     */
    _changeCellStatus(cell) {
        if (cell.status === CellStatus.WAITING) {
            cell.status = CellStatus.SELECTED
        }
        if (cell.status === CellStatus.SELECTED) {
            cell.status = CellStatus.WAITING
        }
    }
}

export {
    Judger
}