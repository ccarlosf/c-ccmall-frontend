/**
 * @description: sku状态正在计算类
 * @author: ccarlos
 * @date 2019/12/10 21:02
*/
import {Cell} from "./cell";

class SkuPending {
    pending = []
    size

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/10 21:03
    */
    constructor(size) {
        this.size = size
    }

    /**
     * @description: 初始化skuPending
     * @author: ccarlos
     * @date 2019/12/14 22:12
     */
    init(sku) {
        this.size = sku.specs.length
        // console.log(sku)
        for(let i = 0 ;i<sku.specs.length;i++){
            const  cell =new Cell(sku.specs[i])
            this.insertCell(cell,i)
        }
       /* sku.specs.forEach(s => {
            const cell = new Cell(s)
        })*/
    }

    /**
     * @description: 判断用户是否已经确认完整的Sku
     * @author: ccarlos
     * @date 2019/12/15 10:24
     */
    isInIntact() {
        // if (this.size !== this.pending.length) {
        //     return false
        // }
        for (let i = 0; i < this.size; i++) {
            if (this._isEmptyPart(i)) {
                return false
            }
        }
        return true
    }

    /**
     * @description: 判断是否空域函数
     * @author: ccarlos
     * @date 2019/12/15 10:28
     */
    _isEmptyPart(index) {
        return !this.pending[index]
    }

    /**
     * @description: 插入cell(正选)
     * @author: ccarlos
     * @date 2019/12/10 21:04
    */
    insertCell(cell, x) {
        this.pending[x] = cell
    }

    /**
     * @description: 移除cell(反选)
     * @author: ccarlos
     * @date 2019/12/10 21:12
     */
    removeCell(x) {
        this.pending[x] = null
    }

    /**
     * @description: 寻找其它行其它已选的Cell
     * @author: ccarlos
     * @date 2019/12/10 21:32
    */
    findSelectedCellByX(x){
        return this.pending[x]
    }

    /**
     * @description: 判断cell是否选中
     * @author: ccarlos
     * @date 2019/12/11 21:47
     */
    isSelected(cell, x) {
        const pendingCell = this.pending[x]
        if (!pendingCell) {
            return false
        }
        return cell.id === pendingCell.id
    }
}

export {
    SkuPending
}