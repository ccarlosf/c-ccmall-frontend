/**
 * @description: 使用promisic方式替代
 *               callback异步方式调用(使用代码模式)
 * @author: ccarlos
 * @date 2019/11/4 22:46
*/
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res);
                },
                fail: (error) => {
                    reject(error);
                }
            });
            func(args);
        });
    };
};

export {
    promisic
}