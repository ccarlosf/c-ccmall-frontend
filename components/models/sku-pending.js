/**
 * @description: sku状态正在计算类
 * @author: ccarlos
 * @date 2019/12/10 21:02
*/
class SkuPending {
    pending = []

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/10 21:03
    */
    constructor(){

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