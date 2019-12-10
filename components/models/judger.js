/**
 * @description: judger查找类
 * @author: ccarlos
 * @date 2019/12/8 12:16
 */
import {SkuCode} from "./sku-code";
import {CellStatus} from "../core/enum";
import {SkuPending} from "./sku-pending";

class Judger {

    fenceGroup
    pathDict = []
    skuPending

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/8 12:18
    */
    constructor(fenceGroup) {
        this.fenceGroup = fenceGroup
        this._initSkuPending()
        this._initPathDict()
    }

    /**
     * @description: 初始化SkuPending对象
     * @author: ccarlos
     * @date 2019/12/10 21:14
     */
    _initSkuPending() {
        this.skuPending = new SkuPending()
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
            if(x===i){
                //当前行
                //cell id 1-13
                const cellCode = this._getCellCode(cell.spec)
            }else {

            }
        }
    }

    /**
     * @description: 获取sku编码函数
     * @author: ccarlos
     * @date 2019/12/10 21:25
    */
    _getCellCode(spec){
        return spec.key_id + '-' + spec.value_id
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
            this.skuPending.insertCell(cell, x)
        }
        if (cell.status === CellStatus.SELECTED) {
            // cell.status = CellStatus.WAITING
            this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
            this.skuPending.removeCell(x)
        }
    }
}

export {
    Judger
}