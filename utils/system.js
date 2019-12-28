/**
 * @description: 系统类
 * @author: ccarlos
 * @date 2019/12/28 16:44
*/
import {promisic} from "./util";
import {px2rpx} from "../miniprogram_npm/lin-ui/utils/util";

/**
 * @description: 获取系统窗口大小值
 * @author: ccarlos
 * @date 2019/12/28 17:24
 */
const getSystemSize = async function () {
    const res = await promisic(wx.getSystemInfo)()
    return {
        windowHeight: res.windowHeight,
        windowWidth: res.windowWidth,
        screenWidth: res.screenWidth,
        screenHeight: res.screenHeight,
    }
}

/**
 * @description: 获取高度rpx
 * @author: ccarlos
 * @date 2019/12/28 17:27
*/
const getWindowHeightRpx = async function () {
    const res = await getSystemSize()
    return px2rpx(res.windowHeight)
}

export {
    getSystemSize,
    getWindowHeightRpx
}