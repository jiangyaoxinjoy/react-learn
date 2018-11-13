/**
 * 这个一个axios跨域文件demo
 * 在package.json文件里添加"proxy":"https://www.jianshu.com"
 * 并把server.js放入src目录下使用。
 */
import axios from 'axios';
import qs from 'qs'

let baseUrl = "https://www.jianshu.com"

let $axios = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
});
let http={
    post:"",
    get:""
}

http.post = function (api,data) {
    let params = qs.stringify(data);
    return new Promise((resolve ,reject) => {
        $axios.post(api,params).then(res => {
            resolve(res);
        })
    })
};

http.get = function (api,data) {
    let params = qs.stringify(data);
    return new Promise((resolve,reject) => {
        $axios.get(api,params).then(res => {
            resolve(res);
        })
    })
};
export default http;