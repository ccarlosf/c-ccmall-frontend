/**
 * @description: 矩阵matrix类
 * @author: ccarlos
 * @date 2019/11/30 22:42
 */
class Matrix {
    m

    /**
     * @description: 构造函数
     * @author: ccarlos
     * @date 2019/11/30 22:51
     */
    constructor(matrix) {
        this.m = matrix
    }

    /**
     * @description: 获取矩阵的行数
     * @author: ccarlos
     * @date 2019/11/30 22:51
     */
    get rowsNum() {
        return this.m.length
    }

    /**
     * @description: 获取矩阵的列数
     * @author: ccarlos
     * @date 2019/11/30 22:52
     */
    get colsNum() {
        return this.m[0].length
    }

    /**
     * @description: 循环处理矩阵
     * @author: ccarlos
     * @date 2019/11/30 22:53
     */
    forEach(cb) {
        //return
        for (let j = 0; j < this.colsNum; j++) {
            for (let i = 0; i < this.rowsNum; i++) {
                const element = this.m[i][j]
                cb(element, i, j)
            }
        }
    }

    // numpy
    /**
     * @description: 转置矩阵
     * @author: ccarlos
     * @date 2019/12/1 10:48
     */
    transpose() {
        const desArr = []
        for (let j = 0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] = this.m[i][j]
            }
        }
        return desArr
    }
}

export {
    Matrix
}