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
    judge(cell, x, y) {
        this._changeCurrentCellStatus(cell, x, y)
        this.fenceGroup.eachCell(this._changeOtherCellStatus)
    }

    /**
     * @description: 处理其它的Cell状态
     * @author: ccarlos
     * @date 2019/12/8 20:43
     */
    _changeOtherCellStatus(cell, x, y) {

    }

    /**
     * @description: 寻找潜在路径函数
     * @author: ccarlos
     * @date 2019/12/10 20:55
     */
    _findPotentialPath(cell, x, y) {
        for (let i = 0; i < this.fenceGroup.fences.length; i++) {

        }
    }

    /**
     * @description: 处理当前cell状态
     * @author: ccarlos
     * @date 2019/12/8 16:57
     */
    _changeCurrentCellStatus(cell, x, y) {
        if (cell.status === CellStatus.WAITING) {
            // cell.status = CellStatus.SELECTED
            this.fenceGroup.fences[x].cells[y].status = CellStatus.SELECTED
        }
        if (cell.status === CellStatus.SELECTED) {
            // cell.status = CellStatus.WAITING
            this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
        }
    }
}

export {
    Judger
}