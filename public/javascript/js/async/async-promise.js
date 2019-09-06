const ajax = function _ajax(url, callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(url);
        }, 1000);
    }).then(data => callback(data));
};

ajax('url-param', data => {
    return `${data}-callback-param`;
}).then(data => {
    console.log(data);
});
