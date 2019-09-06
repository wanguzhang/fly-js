/* eslint-disable func-names */
// Symbol.match;
// Symbol.replace;
// Symbol.search;
// Symbol.split;
// Symbol.hasInstance
// 1.function
const SymbolFunc = function _symbolFunc(name) {
    this.name = name;
    this[Symbol.match] = function (foo) {
        return this.name.match(foo);
    };
};
SymbolFunc.prototype[Symbol.match] = function (foo) {
    return this.name.match(foo);
};
SymbolFunc.prototype[Symbol.hasInstance] = function (foo) {
    return this.name.match(foo);
};
const symbol = new SymbolFunc('威尔');
console.log('尔'.match(symbol)); // [ '尔', index: 1, input: '威尔' ]
// 2.class
class SymbolClass {
    constructor(name) {
        this.name = name;
    }

    // foo instanceOf symbolClass
    [Symbol.hasInstance](foo) {
        return this.name === foo;
    }

    // foo.match(symbolClass)
    [Symbol.match](foo) {
        return this.name.match(foo);
    }

    // foo.replace(symbolClass)
    [Symbol.replace](foo) {
        this.name.replace('a', foo);
    }

    // foo.search(symbolClass)
    [Symbol.search](foo) {
        return this.name.search(foo);
    }

    // foo.split(symbolClass)
    [Symbol.split](foo) {
        this.foo.split(foo);
    }
}
const symbol1 = new SymbolClass('张攀钦');
console.log('张'.match(symbol1)); // [ '张', index: 0, input: '张攀钦' ]
