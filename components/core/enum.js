/**
 * @description: Cell状态枚举
 * @author: ccarlos
 * @date 2019/12/21 16:34
*/
const CellStatus = {
    FORBIDDEN: 'forbidden',
    SELECTED: 'selected',
    WAITING: 'waiting'
}

/**
 * @description: 购买方式枚举
 * @author: ccarlos
 * @date 2019/12/21 16:35
*/
const ShoppingWay={
    CART:'cart',
    BUY:'buy'
}

/**
 * @description: spu列表类型枚举
 * @author: ccarlos
 * @date: 2020/2/10 22:21
 */
const SpuListType = {
    THEME: 'theme',
    ROOT_CATEGORY: 'root_category',
    SUB_CATEGORY: 'sub_category',
    LATEST: 'latest'
}




export {
    CellStatus,
    ShoppingWay,
    SpuListType
}