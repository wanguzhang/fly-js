const HEADERS_KEYS = {
    contentType: 'Content-Type',
};
const HEADERS_VALUES = {
    formUrlencoded: 'application/x-www-form-urlencoded;charset=UTF-8',
    applicationJsonUTF8: 'application/json;charset=UTF-8',
};
/**
 * @author: 张攀钦
 * axios.request(config);
 * @param {String} config.url,请求地址,'/users/1'
 * @param {String} config.baseURL,当url http开头时补全,'http://localhost:8080'
 * @param {String} config.method,请求方式，get,post,delete,put
 * @param {Object} config.params,{ID: 12345},config.params 请求参数或者 URLSearchParams
 * @param {Object} config.data,{ID: 12345},config.data 请求体
 * When no `transformRequest` is set, data must be of one of the following types:
 *  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - Browser only: FormData, File, Blob
    // - Node only: Stream, Buffer
 * @param {Object} config.headers,{'X-Requested-With': 'XMLHttpRequest'},配置请求头
 * @param {Boolean} config.withCredentials, 跨域携带 cookie 配置为true
 * @param {String} responseType: 'json', // default 返回数据类型
 */
class BaseAxios {
    constructor(axiosInstance = axios, config = {}) {
        this.axios = axiosInstance;
        this.defaults = this.axios.defaults;
        this.config = config;
    }

    /**
     * @author: 张攀钦
     * @description: axios.get请求,主要用于查询数据
     * @param: *{String} url 请求地址的字符串，'/users/1'
     * @param: {Object} params 请求参数，QueryString, {name:'11'}
     * @param: {Object} config axios.get(url[, config]) 中的配置
     * @return: Promise
     */
    get(url, params = {}, config = { params }) {
        const tempConfig = config;
        return this.axios.get(url, tempConfig);
    }

    /**
     * @author: 张攀钦
     * @description: axios.delete 请求,主要用于删除数据
     * @param: *{String} url 请求地址，'/users/1'
     * @param: {Object} params 请求参数，QueryString, {name:'11'}
     * @param: {Object} config axios.delete(url[, config]) 中的配置
     * @return: Promise
     */
    delete(url, params = {}, config = { params }) {
        const tempConfig = config;
        return this.axios.delete(url, tempConfig);
    }

    /**
     * @author: 张攀钦
     * @description: axios.post 保存数据
     * @param: *{String} url,请求地址,'/users'
     * @param: {Object|FormData} bodyData,请求体内容，当上传文件时，bodyData 为 FormData
     * @param: {Object} config 格外配置属性,axios.post(url[, data[, config]])
     * @return Promise
     */
    post(url, data = {}, config = {}) {
        const tempConfig = config;
        if (tempConfig.params) {
            if (!tempConfig.headers) {
                tempConfig.headers = {};
            }
            tempConfig.headers[HEADERS_KEYS.contentType] = HEADERS_VALUES.formUrlencoded;
        }
        return this.axios.post(url, data, tempConfig);
    }

    /**
     * @author: 张攀钦
     * @description: axios.put 更新数据
     * @param: *{String} url,请求地址,'/users'
     * @param: {Object|FormData} bodyData,请求体内容，当上传文件时，bodyData 为 FormData
     * @param: {Object} config 格外配置属性,axios.put(url[, data[, config]])
     * @return: Promise
     */
    put(url, data = {}, config = {}) {
        const tempConfig = config;
        if (tempConfig.params) {
            if (!tempConfig.headers) {
                tempConfig.headers = {};
            }
            tempConfig.headers[HEADERS_KEYS.contentType] = HEADERS_VALUES.formUrlencoded;
        }
        return this.axios.put(url, data, tempConfig);
    }

    /**
     * @author: 张攀钦
     * @description: 请求数据
     * @param {Object} config axios.request(config);
     * @return Promise
     */
    request(config = {}) {
        return this.axios.request(config);
    }
}
