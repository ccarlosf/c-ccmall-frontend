/**
 * @description: fence对象类
 * @author: ccarlos
 * @date 2019/11/28 23:38
*/
import {Cell} from "./cell";

class Fence {

    cells = []
    specs
    title
    id

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/12/1 10:57
     */
    constructor(specs) {
        this.specs = specs
        this.title = specs[0].key
        this.id = specs[0].key_id
    }

    /**
     * @description: 初始化
     * @author: ccarlos
     * @date 2019/12/1 10:57
     */
    init() {
        this._initCells()
    }

    /**
     * @description: 初始化Cells
     * @author: ccarlos
     * @date 2019/12/1 21:41
     */
    _initCells() {
        //TODO
        this.specs.forEach(s => {
            const existed = this.cells.some(c => {
                return c.id === s.value_id
            })
            if (existed) {
                return
            }
            // this.pushValueTitle(s.value)
            const cell = new Cell(s)
            this.cells.push(cell)
        })
    }

    /**
     * @description: 设置fence可视规格
     * @author: ccarlos
     * @date 2019/12/21 17:49
     */
    setFenceSketch(skuList) {
        this.cells.forEach(c => {
            // this._setCellSkuImg(c, skuList)
        })
    }

    /**
     * @description: 设置cell的sku图片
     * @author: ccarlos
     * @date 2019/12/21 17:54
     */
   /* _setCellSkuImg(cell, skuList) {
        const specCode = cell.getCellCode()
        const matchSku = skuList.find(s => s.code.includes(specCode))
        if (matchSku) {
            cell.skuImg = matchSku.img
        }
    }*/

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