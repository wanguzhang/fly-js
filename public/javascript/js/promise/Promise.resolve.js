// 1.格斯·范·桑特 《心灵捕手》
Promise.resolve('你不了解真正的失去，因为唯有爱别人胜于自己才能体会，我想你还不敢这样爱人。')
    .then((data) => {
        console.log(data); // 执行
    })
    .catch((error) => {
        console.log(error);
    });
Promise.resolve('你不了解真正的失去，因为唯有爱别人胜于自己才能体会，我想你还不敢这样爱人。')
    .then((data) => {
        console.log(data); // 执行
        throw new Error('我们的小缺点，让我们找到对的人。'); // 模拟错误
    })
    .then(() => {
        console.log('上个实例出错，执行 catch'); // 为执行
    })
    .catch((error) => {
        console.log(error.message); // 执行，我们的小缺点，让我们找到对的人。
    });
