class AjaxUtil {
    static get(url, otherSetting = {}) {
        return new Promise((resolve, reject) => {
            const ajaxGetSetting = {
                url: url,
                type: 'GET',
                dataType: 'json',
                success: data => {
                    resolve(data);
                },
                error: error => {
                    reject(error);
                }
            };
            $.ajax(Object.assign(otherSetting, ajaxGetSetting));
        });
    }
}
