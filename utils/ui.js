/**
 * @description:
 * @author: ccarlos
 * @date: 2020/2/11 22:47
 */
const showToast = function (title) {
    wx.showToast({
        icon: "none",
        duration: 2000,
        title
    })
}

export {
    showToast
}