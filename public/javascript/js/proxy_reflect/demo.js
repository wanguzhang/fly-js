global.name = 'global';
const data = {
    func(name) {
        console.log(name);
        console.log(this.name);
    },
};

const thisArg = { name: 'thisArgTest' };

const proxyFunc = new Proxy(data.func, {
    apply(target, thisArg2, argumentsList) {
        console.log(thisArg2);
        Reflect.apply(target, thisArg, argumentsList);
    },
});
const data2 = { proxyFunc };
data2.proxyFunc('张攀钦');
