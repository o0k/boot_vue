const isDebug_mode = false;
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;

ELEMENT.locale(ELEMENT.lang.zhCN)

// 请求拦截
axios.interceptors.request.use(config => {
    let tokenObj = localStorage.getItem('shell-token');
    if (tokenObj) {
        config.headers['token'] = tokenObj.toString();
    }
    return config
}, error => {
    return Promise.reject(error)
});

// 响应拦截
axios.interceptors.response.use(response => {
    const result = response.data
    if (result === '') {
        return result
    } else if (result.code !== 200) {
        ELEMENT.Message.error(result.message)
        return Promise.reject(new Error(result.message));
    } else {
        return result.data
    }
}, function (error) {
    let errData = error.response.data;
    ELEMENT.Message.error(errData.message)
    if (errData.code >= 700010 && errData.code <= 700013) {
        setTimeout(function () {
            window.location.href = "index.html"
        }, 2000)
    }
    return Promise.reject(error)
});