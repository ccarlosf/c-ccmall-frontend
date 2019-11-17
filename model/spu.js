/**
 * @description: Spu商品列
 * @author: ccarlos
 * @date 2019/11/17 20:48
*/
class Spu{

    /**
     * @description: 获取商品最新列表
     * @author: ccarlos
     * @date 2019/11/17 20:49
    */
    //1. 一条数据没有 空
    //2. 最后一页，还没有更多的数据
    //3. 累加 100 1-20，21-40....，setData重新渲染页面
    //4. 非分页数据:a.正在加载 loading b.空
    //   分页数据:a.正在加载 b.加载完成 c.没有更多的数据
    //5. 上滑页面触底 加载 避免用户重复发请求 redis 数据锁
    //   按钮 button 防抖 截流 禁用 倒计时 loading
    static async getLatest(){
        Http.request(``)
    }
}