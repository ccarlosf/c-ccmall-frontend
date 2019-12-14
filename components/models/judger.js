/**
 * @description: judger查找类
 * @author: ccarlos
 * @date 2019/12/8 12:16
 */
import {SkuCode} from "./sku-code";
import {CellStatus} from "../core/enum";
import {SkuPending} from "./sku-pending";
import {Joiner} from "../../utils/joiner";

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
        this._initPathDict()
        this._initSkuPending()
    }

    /**
     * @description: 初始化SkuPending对象
     * @author: ccarlos
     * @date 2019/12/10 21:14
     */
    _initSkuPending() {
        this.skuPending = new SkuPending()
        const defaultSku = this.fenceGroup.getDefaultSku()
        if(!defaultSku){
            return
        }
        this.skuPending.init(defaultSku)
        this.skuPending.pending.forEach(cell =>{
            this.fenceGroup.setCellStatusById(cell.id,CellStatus.SELECTED)
        })
        this.judge(null,null,null,true)
        // console.log(this.skuPending)
        //良好的代码 性能偏低
        //多做了循环
        //SKU 只遍历一次 fenceGroup
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
    judge(cell, x, y,isInit=false) {
        if(!isInit){
            this._changeCurrentCellStatus(cell, x, y)
        }

        this.fenceGroup.eachCell((cell,x,y)=>{
            console.log(this)
            const path=this._findPotentialPath(cell, x, y)
            // console.log(path)
            if (!path) {
                return
            }
            const isIn = this._inInDict(path)
            if (isIn) {
                // this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.WAITING)

            } else {
                this.fenceGroup.setCellStatusByXY(x,y,CellStatus.FORBIDDEN)
                // this.fenceGroup.fences[x].cells[y].status = CellStatus.FORBIDDEN
            }
        })
    }

    /**
     * @description: 查找是否在字典里
     * @author: ccarlos
     * @date 2019/12/11 21:22
     */
    _inInDict(path) {
        return this.pathDict.includes(path)
    }

    /**
     * @description: 处理其它的Cell状态 使用上面的箭头函数后，注释了
     * @author: ccarlos
     * @date 2019/12/8 20:43
     */
    /*_changeOtherCellStatus(cell, x, y) {
        console.log(this)
        const path=this._findPotentialPath(cell, x, y)
        console.log(path)
    }*/

    /**
     * @description: 寻找潜在路径函数
     * @author: ccarlos
     * @date 2019/12/10 20:55
     */
    _findPotentialPath(cell, x, y) {
        const joiner = new Joiner('#')
        for (let i = 0; i < this.fenceGroup.fences.length; i++) {
            const selected = this.skuPending.findSelectedCellByX(i)
            if(x===i){
                //当前行
                //cell id 1-13
                if (this.skuPending.isSelected(cell, x)) {
                    return
                }
                const cellCode = this._getCellCode(cell.spec)
                joiner.join(cellCode)
            }else {
                //其他行
                if (selected) {
                    //selected cell path 3-26
                    const selectedCellCode = this._getCellCode(selected.spec)
                    joiner.join(selectedCellCode)
                }
            }
        }
        return joiner.getStr()
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
            this.fenceGroup.setCellStatusByXY(x,y, CellStatus.SELECTED)
            // this.fenceGroup.fences[x].cells[y].status = CellStatus.SELECTED
            this.skuPending.insertCell(cell, x)
        }
        if (cell.status === CellStatus.SELECTED) {
            // cell.status = CellStatus.WAITING
            this.fenceGroup.setCellStatusByXY(x,y, CellStatus.WAITING)
            // this.fenceGroup.fences[x].cells[y].status = CellStatus.WAITING
            this.skuPending.removeCell(x)
        }
    }
}

export {
    Judger
}