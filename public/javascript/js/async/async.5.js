const data = [1, 2, 3];
const async = async function _async(data) {
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        await Promise.resolve(item)
            .then(data => {
                console.log('第一个 then');
                return data;
            })
            .then(data => {
                console.log('第二个 then');
                return data;
            });
        console.log('await 之后的代码');
    }
};
async(data);
