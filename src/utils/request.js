// 封装接口调用的通用方法
const request = (path,) => {
    return new Promise(function (resolve,reject) {
        mpvue.request({
            url: 'https://www.zhengzhicheng.cn/api/public/v1' + path,
            success: function (res) {
                resolve(res)
            } 
        })
    })
}
export default request