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

/**
 * @description: 组合算法函数
 * @author: ccarlos
 * @date 2019/12/8 12:31
*/
const combination = function (arr, size) {
    var r = [];

    function _(t, a, n) {
        if (n === 0) {
            r[r.length] = t;
            return;
        }
        for (var i = 0, l = a.length - n; i <= l; i++) {
            var b = t.slice();
            b.push(a[i]);
            _(b, a.slice(i + 1), n - 1);
        }
    }

    _([], arr, size);
    return r;
}

export {
    promisic,
    combination
}