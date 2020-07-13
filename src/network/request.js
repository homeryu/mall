import axios from 'axios';
export function request(config){
    //创建实例
    const instance1 = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
    })
    //发送真正的网络请求
    //方式一 回调函数
    // instance1(config).then(res=>{
    //     success(res)
    // }).catch(err=>{
    //     failure(err)
    // })
    //拦截器
    instance1.interceptors.request.use(function(config){
        // console.log(config)
        return config
    },function(err){
        return Promise.reject(err)
    })
    instance1.interceptors.response.use(response=>{
        // console.log(response.data)
        return response
    },err=>{
        console.log(err)
        return err
    })
    return instance1(config);//方式二promise
}

