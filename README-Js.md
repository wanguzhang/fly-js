## 目录

### [API](#API)

- #### [String](#String)
  -  [String.prototype.charAt](#String.prototype.charAt)

  -   [String.prototype.fromCharCode](#String.prototype.fromCharCode)

  -   [String.prototype.concat](#String.prototype.concat)

  -   [String.prototype.includes](#String.prototype.includes)

  -   [String.prototype.endsWith](#String.prototype.endsWith)

  -   [String.prototype.indexOf](#String.prototype.indexOf)

  -   [String.prototype.lastIndexOf](#String.prototype.lastIndexOf)

  -   [String.prototype.toLowerCase](#String.prototype.toLowerCase)

  -   [String.prototype.toUpperCase](#String.prototype.toUpperCase)

  -   [String.prototype.match](#String.prototype.match)

  -   [String.prototype.replace](#String.prototype.replace)

  -   [String.prototype.search](#String.prototype.search)

  -   [String.prototype.slice](#String.prototype.slice)

  -   [String.prototype.split](#String.prototype.split)

  -   [String.prototype.substring](#String.prototype.substring)

- #### [Array](#Array)

    -  [Array.from()](#Array.from())

    -  [Array.isArray()](#Array.isArray())

    -  [Array.of](#Array.of)

    -  [Array.prototype.concat](#Array.prototype.concat)

    -  [Array.prototype.every](#Array.prototype.every)

    -  [Array.prototype.filter](#Array.prototype.filter)

    -  [Array.prototype.find](#Array.prototype.find)

    -  [Array.prototype.findIndex](#Array.prototype.findIndex)

    -  [Array.prototype.forEach](#Array.prototype.forEach)

    -  [Array.prototype.includes](#Array.prototype.includes)

    -  [Array.prototype.indexOf](#Array.prototype.indexOf)

    -  [Array.prototype.join](#Array.prototype.join)

    -  [Array.prototype.keys](#Array.prototype.keys)

    -  [Array.prototype.lastIndexOf](#Array.prototype.lastIndexOf)

    -  [Array.prototype.map](#Array.prototype.map)

    -  [Array.prototype.pop](#Array.prototype.pop)

    -  [Array.prototype.push](#Array.prototype.push)

    -  [Array.prototype.reduce](#Array.prototype.reduce)

    -  [Array.prototype.reverse](#Array.prototype.reverse)

    -  [Array.prototype.shift](#Array.prototype.shift)

    -  [Array.prototype.slice](#Array.prototype.slice)

    -  [Array.prototype.some](#Array.prototype.some)

    -  [Array.prototype.sort](#Array.prototype.sort)

    -  [Array.prototype.splice](#Array.prototype.splice)

    -  [Array.prototype.unshift](#Array.prototype.unshift)

    -  [Array.prototype.values](#Array.prototype.values)

- #### [Symbol](#Symbol)

    -  [Symbol.match](#Symbol.match)

    -  [Symbol.replace](#Symbol.replace)

    -  [Symbol.search](#Symbol.search)

    -  [Symbol.split](#Symbol.split)

    -  [Symbol.hasInstance](#Symbol.hasInstance)

- #### [Function](#Function)

    -  [Function.prototype.apply](#Function.prototype.apply)

    -  [Function.prototype.call](#Function.prototype.call)

    -  [Function.prototype.call](#Function.prototype.call)

- #### [Object](#Object)
    -  [Object.assign](#Object.assign)

    -  [Object.create](#Object.create)

    -  [Object.defineProperties](#Object.defineProperties)

    -  [Object.entries](#Object.entries)

    -  [Object.freeze](#Object.freeze)

    -  [Object.getOwnPropertyDescriptor](#Object.getOwnPropertyDescriptor)

    -  [Object.getOwnPropertyNames](#Object.getOwnPropertyNames)

    -  [Object.getOwnPropertySymbols](#Object.getOwnPropertySymbols)

    -  [Object.getPrototypeOf](#Object.getPrototypeOf)

    -  [Object.is](#Object.is)

    -  [Object.isFrozen](#Object.isFrozen)

    -  [Object.keys](#Object.keys)

    -  [Object.preventExtensions](#Object.preventExtensions)

    -  [Object.values](#Object.values)

- #### [class](#class)

    -  [class静态属性和静态方法](#class 静态属性和静态方法)

    -  [class继承](#class继承)

- #### [Proxy](#Proxy)

    -  [handler.apply](#handler.apply)

    -  [handler.construct](#handler.construct)

    -  [handler.defineProperty](#handler.defineProperty)

    -  [handler.deleteProperty](#handler.deleteProperty)

    -  [handler.getOwnPropertyDescriptor](#handler.getOwnPropertyDescriptor)

    -  [handler.getPrototypeOf](#handler.getPrototypeOf)

    -  [handler.has](#handler.has)

    -  [handler.isExtensible](#handler.isExtensible)

    -  [handler.ownKeys](#handler.ownKeys)

    -  [handler.preventExtensions](#handler.preventExtensions)

    -  [handler.setPrototypeOf](#handler.setPrototypeOf)

- #### [Reflect](#Reflect)

    -  [Reflect.deleteProperty](#Reflect.deleteProperty)

    -  [Reflect.apply](#Reflect.apply)

    -  [Reflect.construct](#Reflect.construct)

    -  [Reflect.defineProperty](#Reflect.defineProperty)

    -  [Reflect.isExtensible](#Reflect.isExtensible)

    -  [Reflect.preventExtensions](#Reflect.preventExtensions)

    -  [Reflect.get](#Reflect.get)

    -  [Reflect.getOwnPropertyDescriptor](#Reflect.getOwnPropertyDescriptor)

    -  [Reflect.has](#Reflect.has)

    -  [Reflect.ownKeys](#Reflect.ownKeys)

    -  [Reflect.getPrototypeOf](#Reflect.getPrototypeOf)

    -  [Reflect.setPrototypeOf](#Reflect.setPrototypeOf)

    -  [Reflect.set](#Reflect.set)

- #### [Promise](#Promise)

    -  [Promise.all](#Promise.all)

    -  [Promise.race](#Promise.race)

    -  [Promise.resolve](#Promise.resolve)

- #### [async](#async)

- #### [Map](#Map)

    -  [Map.prototype.forEach](#Map.prototype.forEach)

- #### [Set](#Set)
    -  [Set.prototype.forEach](#Set.prototype.forEach)

- #### [Math](#Math)

- #### [Number](#Number)

- #### [Regexp](#Regexp)

- #### [Date](#Date)
    - [Date-get获取属性](#Date-get获取属性)

### Other

- #### [var,let,const](#var,let,const)

- #### [闭包](#闭包)

- #### [原型及原型链](#原型及原型链)
    -  [原型链实现继承](#原型链实现继承)

    -  [构造函数和原型链组合实现继承](#构造函数和原型链组合实现继承)

  -  [构造函数和__proto__实现继承](#构造函数和__proto__实现继承)

    -  [寄生组合实现继承](#寄生组合实现继承)

-  [解构](#解构)

- #### [this](#this)
  -  [参考资料](#参考资料 )

  -  [arrow-this](#arrow-this)

## API

### String

```js
// 1.
const str1 = 'Fury';
console.log(typeof str1); // string
console.log(str1 instanceof String);
// 2.构造函数
const str2 = new String('Fury');
console.log(typeof str2); // object
// 3.字符串比较逻辑判断
// 空字串逻辑判断时，按 false 判断，不为空字符串，按 true 判断
console.log('' == false); // true
console.log('' === false); // false
console.log('a' == true); // true
```

#### String.prototype.charAt

```javascript
// 3.String.prototype.charAt
const str3 = 'Fury';
const ret3 = str3.charAt(3);
console.log(ret3); // y
const ret4 = str3.charAt(10);
console.log(ret4); // ''
```

#### String.prototype.fromCharCode

```js
/**
 * 5.
 * const str = String.prototype.fromCharCode(num1, ..., numN)
 * @description: 由指定的UTF-16代码单元序列创建的字符串。
 * @param {Number} num 一系列UTF-16代码单元的数字。范围介于0到65535
 * @returns {String} str 一个长度为N的字符串，由N个指定的UTF-16代码单元组成.
 */
console.log(String.fromCharCode(65, 66, 67)); // ABC
console.log(String.fromCharCode(0x2014)); // -
console.log(String.fromCharCode(0x12014)); // -
```

#### String.prototype.concat

```js
/**
 * @author: 张攀钦
 * const str = String.prototype.concat(string2, string3[, ..., stringN])
 * @param {String}  stringN:和源字符串链接的多个字符串
 * @returns {String} str:链接之后返回的新字符串,原字符串不变
 * @description:将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
 */
const name = '古拉斯·约瑟夫·弗瑞：';
const name1 = 'Nicholas ';
const name2 = 'Joseph ';
const name3 = 'Fury ';
const ret5 = name.concat(name1, name2, name3);
console.log(name); // 古拉斯·约瑟夫·弗瑞：
console.log(name1); // Nicholas
console.log(name2); // Joseph
console.log(name3); // Fury
console.log(ret5); // 古拉斯·约瑟夫·弗瑞：Nicholas Joseph Fury
```

#### String.prototype.includes

```js
/**
 * @author: 张攀钦
 * const bool = String.prototype.includes(searchString[, fromIndex=0])
 * @param {String} searchString:要在此字符串中搜索的字符串。
 * @param {Number} fromIndex:从某个索引位置开始,
 * @description: 用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
 */
console.log('Blue Whale'.includes('lu')); // true
console.log('Blue Whale'.includes('lu', 2)); // false
```

#### String.prototype.endsWith

```js
/**
 * @author: 张攀钦
 * const bool = String.prototype.endsWith(searchString[, length=str.length])
 * @param {String} searchString:要在此字符串中搜索的字符串。
 * @param {Number} length:字符串的长度，相当于将字符串截取length 长度
 * @description: 用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
 */
const str11 = 'i love you three thousand times';
console.log(str11.endsWith('times')); // true
console.log(str11.endsWith('i', 1)); // true
```

#### String.prototype.indexOf

```js
/**
 * @author: 张攀钦
 * const index=String.prototype.indexOf(searchValue[, fromIndex])
 * @description:字符串第一次出现searchValue的索引，从fromIndex开始搜索,未找到，则返回-1。
 * @param {String} searchValue:一个字符串表示被查找的值。
 * @param {Number} fromIndex: 开始查询的索引
 * @returns {Number} index:指定值的第一次出现的索引; 如果没有找到 -1。
 */
const str12 = 'i love you three thousand times';
console.log(str12.indexOf('l')); // 2
console.log(str12.indexOf('l', 3)); // -1
console.log(str12.indexOf('l', 1 - str12.length)); // 2
```

#### String.prototype.lastIndexOf

```js
/**
 * @author: 张攀钦
 * const index=String.prototype.lastIndexOf(searchValue[, endIndex=str.length-1])
 * @description:字符串第一次出现searchValue的索引，将 str的按strLength改变
 * @param {String} searchValue:一个字符串表示被查找的值。
 * @param {Number} endIndex: 字符串截止到索引处
 * @returns {Number} index:指定值的第一次出现的索引; 如果没有找到 -1。
 */
const str13 = 'i love you three thousand times';
console.log('str13字符串长度为：', str13.length); // 31
console.log(str13.lastIndexOf('times')); // 26
console.log(str13.lastIndexOf('s')); // 30
// 实际查找'i love '
console.log(str13.lastIndexOf('ve ', 6)); // 4
// 实际查找'i love'
console.log(str13.lastIndexOf('ve', 5)); // 4
// 开始
console.log(str13.lastIndexOf('i', 1 - str13.length)); // 0
console.log(str13.lastIndexOf('i', -1)); // 0
```

#### String.prototype.toLowerCase

#### String.prototype.toUpperCase

```js
/**
 * @author: 张攀钦
 * const str = String.prototype.toLowerCase() 字符串转小写返回，不影响原来字符串
 * const str = String.prototype.toUpperCase() 字符串转大写返回，不影响原来字符串
 * @description:
 */
const str14 = 'abcDGE张';
const ret14 = str14.toLowerCase();
console.log(ret14); // abcdge张
const ret15 = str14.toUpperCase();
console.log(ret15); // ABCDGE张
```

#### String.prototype.match

```js
/**
 * @author: 张攀钦
 * const ret = String.prototype.match(regexp)
 * @param {RegExp} regexp:正则表达式
 * @returns {Array} ret 匹配到的结果，一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。
 * groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
 * index: 匹配的结果的开始位置
 * input: 搜索的字符串.
 * @description:
 */
// 1. 正则表达式带g,匹配成功之后，从剩余的字符串匹配。尽可能的匹配符合最多的规则。
const str1 = 'aaaa1aaaa1aaaa';
const ret1 = str1.match(/aa/g);
console.log(ret1); // ['aa', 'aa', 'aa', 'aa', 'aa', 'aa'];
// 尽可能匹配多的规则
const ret2 = str1.match(/aa*/g);
console.log(ret2); // [ 'aaaa', 'aaaa', 'aaaa' ]

// 2.正则表达式不带g,尽可能多的匹配第一个，然后返回数据
const str3 = 'aaaa1aaaa1aaaa';
const ret3 = str3.match(/aa/);
console.log(ret3); // [ 'aa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]
console.log(ret3[0]); // aa
// 匹配的结果的开始位置
console.log(ret3.index); // 0
// 搜索的字符串.
console.log(ret3.input); // aaaa1aaaa1aaaa
// 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
console.log(ret3.groups); // undefined

const ret4 = str3.match(/aa*/);
console.log(ret4); // [ 'aaaa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]

// 3.操作字符串
const ret5 = str3.match('aaa');
console.log(ret5); // [ 'aaa', index: 0, input: 'aaaa1aaaa1aaaa', groups: undefined ]

```

#### String.prototype.replace

```js
/**
 * @author: 张攀钦
 * const ret = String.prototype.replace(regexp, newSubStr|function)
 * @description: 将字符串符合正则表达式的部分替换，返回新的字符串，不改变原来的字符串。
 * @param {RegExp} regexp:正则表达式
 * @param {String} newSubStr:匹配的结果替换成对应的字符串
 * @param {Function} function:匹配的结果执行回调函数
 * @returns {String} ret 字符串实例替换之后返回新的字符串
 */
// 1.返回新的字符串，不改变原来的字符串。
const str1 = 'Carol, the night';
const ret1 = str1.replace('Carol', 'Alisa');
console.log(str1); // Carol, the night
console.log(ret1); // Alisa, the night

// 2.匹配正则表达式，不带g，只替换第一个符合规则
const str2 = 'aaaa1saaaa1saaaa';
const ret2 = str2.replace(/aaaa/, 'Carol');
console.log(ret2); // Carol1saaaa1saaaa

// 3.匹配正则表达式,带g,替换全部符合规则。
const str3 = 'aaaa1saaaa1saaaa';
const ret3 = str3.replace(/aaaa/g, 'Carol');
console.log(ret3); // Carol1sCarol1sCarol

/**
 * 匹配的结果执行回调函数
 * String.prototype.replace(regexp, callback(match,p1[,p2,...]),offset,string)
 * @param {String} match:匹配的子串
 * @param {} pn 正则表达式，分组时,每个匹配到的结果
 * @param {Number} offset:匹配到的子字符串在原字符串中的索引
 * @param {String} string:操作方法的实例
 */
const str4 = 'aaaa1saaaa1saaaa';
const ret4 = str4.replace(/(aaaa)(1s)/g, (match, p1, p2, offset, string) => {
    console.log(match); // aaaa1s
    console.log(p1); // aaaa
    console.log(p2); // 1s
    console.log(offset); // 0
    console.log(string); // aaaa1saaaa1saaaa
    return `${match}M`;
});
console.log(ret4);

```

#### String.prototype.search

```js
/**
 * @author: 张攀钦
 * const index = String.prototype.search(regexp)
 * @description: 搜寻是否匹配正则表达式，匹配到返回索引，匹配不到返回-1;
 * @param {RegExp} regexp:正则表达式
 * @returns {Number} index：匹配到返回索引，匹配不到返回-1;
 */
// 1.
const str1 = 'aaaa1aaaa1aaaa';
const index1 = str1.search(/1aa/g);
console.log(index1); // 4
const index2 = str1.search('ax');
console.log(index2); // -1

```

#### String.prototype.slice

```js
/**
 * @author: 张攀钦
 * const ret = String.prototype.slice(beginIndex[, endIndex])
 * @description: 截取字符串返回新的字符串，不改变原来的字符串
 * @param {Number} beginIndex:开始索引
 * @param {Number} endIndex:结束索引，不包括技术索引。默认str.length
 * @returns {String} ret：截取之后返回新的字符串。
 */
// 1. 正常传参
const str = 'abcdefg';
const ret = str.slice(1);
console.log(ret); // bcdefg
const ret1 = str.slice(2, 5);
console.log(ret1); // cde
// 2. 传负数(索引-字符串长度)等于负索引 -3 对应e,-1对应g,但不包含结束索引
const ret3 = str.slice(-3, -1);
console.log(ret3); // ef

```

#### String.prototype.split

```js
/**
 * @author: 张攀钦
 * const arr = String.prototype.split([separator[, limit]])
 * @description: 截取字符串返回新的字符串，不改变原来的字符串
 * @param {Number} separator:一个字符串或正则表达式
 * @param {Number} limit:一个整数，限定返回的分割片段数量
 * @returns {Array} arr:分割之后返回结果
 */
// 1. 正常传参
const str = 'a12b12c12d12e12f12g';
const ret = str.split(/12/);
console.log(ret); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
const ret1 = str.split(/12/, 3);
console.log(ret1); // [ 'a', 'b', 'c' ]

```

#### String.prototype.substring

```js
/**
 * @author: 张攀钦
 * const str = String.prototype.substring(indexStart[, indexEnd])
 * @description: 返回一个字符串在开始索引到结束索引之间的一个子集
 * @param {Number} indexStart:开始索引
 * @param {Number} indexEnd:结束索引
 * @returns {String} str:截取之后返回新的字符串
 */
// 1. 正常传参
const str = 'abcdefg';
const ret = str.substring(1);
console.log(ret); // bcdefg
const ret1 = str.substring(2, 5);
console.log(ret1); // cde
// 2. 传负数(索引-字符串长度)等于负索引 -3 对应e,-1对应g,但不包含结束索引
const ret3 = str.substring(-3, -1);
console.log(ret3); // ''空字符串

```

### Array

#### Array.from()

```js
/* eslint-disable prefer-rest-params */
/**
 * @author: 张攀钦
 * @description: Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
 * @param arrayLike：想要转换成数组的伪数组对象或可迭代对象。字符串，数组，Set,Map
 * @param {Function} mapFn:如果指定了该参数，新数组中的每个元素会执行该回调函数。
 * @param {Object} thisArg:可选参数，执行回调函数 mapFn 时 this 对象。
 * 如果mapFn为箭头函数，箭头函数体内this不是 thisArg。
 * @returns {Array} array:一个新的数组实例
 * const array = Array.from(arrayLike[, mapFn[, thisArg]])
 */
// 1、Array.from 操作字符串
const arr = Array.from('又高又帅的全栈');
console.log(arr); // [ '又', '高', '又', '帅', '的', '全', '栈' ]

// 2、Array.from 操作Set,此操作也可以对数组进行去重
const obj = Array.from(new Set([1, 2, 1, 3]));
console.log(obj); // [ 1, 2, 3 ]

// 3、Array.from 操作Map
const map = new Map();
map.set('name', '张');
map.set('function', (data) => {
    console.log(data);
});
const fromMap = Array.from(map);
console.log(fromMap); // [ [ 'name', '张' ], [ 'function', [Function] ] ]

// 4、Array.form 操作 function 的 arguments
function f1() {
    return Array.from(arguments);
}
f1(1, 2, 3); // [ 1, 2, 3 ]

// 5、Array.from 全参
const arrFromAllArguments = Array.from(
    [1, 2, 3],
    // 此处如果是箭头函数，this绑定不到{num:2}
    function mapFn(x) {
        return x * this.num;
    },
    { num: 2 },
);
console.log(arrFromAllArguments); // [ 2, 4, 6 ]
```

#### Array.isArray()

```js
/* eslint-disable no-array-constructor */
/**
 * @author: 张攀钦
 * @description: Array.isArray() 用于确定传递的值是否是一个Array。
 * @param {*} obj: 需要检测的变量
 * @returns {Boolean} bool：如果 obj 是Array,bool 为true。
 * const bool=Array.isArray(obj)
 */
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(Array.prototype);
```

#### Array.of

```js
/* eslint-disable no-array-constructor */
/**
 * @author: 张攀钦
 * @description: Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
 * @param {*} elementN:任意个参数，将按顺序成为返回数组中的元素。
 * @returns {Array} array:新的数组实例。
 * const array=Array.of(element0[, element1[, ...[, elementN]]]);
 */
// 1.
const arr = Array.of(7);
console.log(arr); // [7]
// 2.
const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]
// 3.
const arr2 = Array(7);
console.log(arr2); // [ , , , , , , ]
// 4.
const arr3 = Array(1, 2, 3);
console.log(arr3); // [1, 2, 3]
// 5.
const obj = [1, 2, 3, 4];
const arr4 = Array.of(obj);
console.log(arr4); // [ [ 1, 2, 3, 4 ] ]
// 6.
const arr5 = Array.of(...obj);
console.log(arr5); // [ 1, 2, 3, 4 ]
```

#### Array.prototype.concat

```js
/**
 * @author: 张攀钦
 * const newArray=Array.prototype.concat(value1[, value2[, ...[, valueN]]])
 * @description: Array.prototype.concat 连接数组，返回一个新的数组。不会改变原来的数组。
 * @param {*} value:需要添加的元素
 * @returns {Array} newArray:连接之后新的数组
 */
// 1.
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];
const ret = arr.concat(arr2);
console.log(arr); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(ret); // [ 1, 2, 3, 4, 5, 6 ]
// 2.建议用这个
const ret2 = [...arr, ...arr2];
console.log(arr); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(ret2); // [ 1, 2, 3, 4, 5, 6 ]

```

#### Array.prototype.every

```js
/**
 * @author: 张攀钦
 * const bool = Array.prototype.every(callback([item[,index[,array]]])[, thisArg])
 * @description: 一个数组内的所有元素是否都能通过某个指定函数的测试。返回true。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Boolean} bool: 每个回调都返回true，最终返回true。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3];
const thisArg = { name: 'Thor' };
const ret1 = arr1.every((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 2;
}, thisArg);
console.log('操作值', ret1); // false
// 2.正常参数,正常函数绑定this
const arr2 = [2, 3];
const ret2 = arr2.every(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 2;
}, thisArg);
console.log(ret2); // false

```

#### Array.prototype.filter

```js
/**
 * @author: 张攀钦
 * const arr = Array.prototype.filter(callback([item[,index[,array]]])[, thisArg])
 * @description: 一个数组内的所有元素是否都能通过某个指定函数的测试。返回true。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Array} arr: 返回符合断言的元素。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3, 6, 4, 9, 8];
const thisArg = { name: 'Thor' };
const ret1 = arr1.filter((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 4;
}, thisArg);
console.log('操作值', ret1); // [ 6, 9, 8 ]
// 2.正常参数,正常函数绑定this
const ret2 = arr1.filter(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 4;
}, thisArg);
console.log('操作值', ret2); // [ 6, 9, 8 ]

```

#### Array.prototype.find

```js
/**
 * @author: 张攀钦
 * const item = Array.prototype.find(callback([item[,index[,array]]])[, thisArg])
 * @description: 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {*} item: 满足条件的第一个元素。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [4, 2, 4, 43, 4];
const thisArg = { name: 'Thor' };
const ret1 = arr1.find((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 2;
}, thisArg);
console.log('操作值', ret1); // 4
// 2.正常参数,正常函数绑定this
const ret2 = arr1.find(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 2;
}, thisArg);
console.log(ret2); // 4

```

#### Array.prototype.findIndex

```js
/**
 * @author: 张攀钦
 * const index = Array.prototype.findIndex(callback([item[,index[,array]]])[, thisArg])
 * @description: 返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Number} index: 满足条件的第一个元素的索引。
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [4, 2, 4, 43, 4];
const thisArg = { name: 'Thor' };
const ret1 = arr1.findIndex((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 2;
}, thisArg);
console.log('操作值', ret1); // 0
// 2.正常参数,正常函数绑定this
const ret2 = arr1.findIndex(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 2;
}, thisArg);
console.log(ret2); // 0

```

#### Array.prototype.forEach

```js
/**
 * @author: 张攀钦
 * const obj = Array.prototype.forEach(callback([item[,index[,array]]])[, thisArg])
 * @description: 对数组的每个元素执行一次提供的函数。
 * @param {Function} callback: 回调函数
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {undefined} obj: undefined
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3];
const thisArg = { name: 'Thor' };
arr1.forEach((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
}, thisArg);
// 2.正常参数,正常函数绑定this
const arr2 = [2, 3];
arr2.forEach(function _forEach(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
}, thisArg);

```

#### Array.prototype.includes

```js
/**
 * @author: 张攀钦
 * @description: 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
 * @param {*} valueToFind：需要去判断的变量
 * @param {Number} 可选，fromIndex开始位置的索引，默认为0。
 * @returns {Boolean} bool 包含返回true。
 * const bool = Array.prototype.includes(valueToFind[, fromIndex]);
 */
// 1、
const arr = [1, 2, 3];
const ret1 = arr.includes(1);
console.log(ret1); // true
// 2、
const ret2 = arr.includes(1, 1);
console.log(ret2); // false
// 3、索引-数组长度可以得出负数索引
const ret3 = arr.includes(2, -2);
console.log(ret3); // true
// 4、索引-
const ret4 = arr.includes(1, -2);
console.log(ret4); // false
// 5、索引为负数，绝对值大于数组长度，整个数组搜索
const ret5 = arr.includes(1, -5);
console.log(ret5); // true

```

#### Array.prototype.indexOf

```js
/**
 * @author: 张攀钦
 * const index = Array.prototype.indexOf(searchElement[, fromIndex = 0])
 * @description: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 * @param {*} searchElement: 查找元素
 * @param {Number} fromIndex: 开始索引
 * @returns {Number} index: 返回给定元素的索引
 */
// 1.正常参数
const arr1 = [2, 3, 4, 5, 6];
const index1 = arr1.indexOf(3);
console.log(index1); // 1
const index2 = arr1.indexOf(3, 2);
console.log(index2); // -1

```

#### Array.prototype.join

```js
/**
 * @author: 张攀钦
 * const string=Array.prototype.join([separator])
 * @description: Array.prototype.join 将元素链接成字符串，返回这个字符串。
 * @param {String} separator:指定字符串分隔元素，默认','
 * @returns {String} string:个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串。
 */
// 1.链接数字
const arr1 = [1, 2, 3];
const str1 = arr1.join();
console.log(str1); // 1,2,3
// 2.链接字符串
const arr2 = ['L', 'o', 'k', 'i'];
const str2 = arr2.join('');
console.log(str2); // Loki
// 3.链接对象
const arr3 = [{ name: 'Loki' }, { name: 'Loki' }, { name: 'Loki' }];
const str3 = arr3.join();
console.log(str3); // [object Object],[object Object],[object Object]

```

#### Array.prototype.keys

```js
/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * const iterator = Array.prototype.keys()
 * @description: 返回一个包含数组中每个索引键的Array Iterator对象。
 * @returns {Iterator} iterator: 新的迭代器对象
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [4, 2, 4, 43];
const obj = arr1.keys();
for (const index of obj) {
    console.log(index); // expected output: 0,1,2,3
}

```

#### Array.prototype.lastIndexOf

```js
/**
 * @author: 张攀钦
 * const index = Array.prototype.lastIndexOf(searchElement[, fromIndex = arr.length - 1])
 * @description: 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
 * @param {*} searchElement: 查找元素
 * @param {Number} fromIndex: 开始索引
 * @returns {Number} index: 返回给定元素的索引
 */
// 1.正常参数
const arr1 = [2, 3, 4, 6, 5, 6];
const index1 = arr1.lastIndexOf(6);
console.log(index1); // 5
const index2 = arr1.lastIndexOf(3, 2);
console.log(index2); // 1
```

#### Array.prototype.map

```js
/**
 * @author: 张攀钦
 * const arr = Array.prototype.map(callback([item[,index[,array]]])[, thisArg])
 * @description: 创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
 * @param {Function} callback: 回调函数 callback([item[,index[,array]]])
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {Array} arr: 数组每个元素调用回调，返回原素组成的数组。
 */
// 1.正常参数,箭头函数绑定不了 thisArg
const arr1 = [2, 3, 4];
const thisArg = { name: 'Thor' };
const ret1 = arr1.map((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item * 2;
}, thisArg);
console.log('操作值', ret1); // [ 4, 6, 8 ]
// 2.正常参数,正常函数绑定 thisArg
const ret2 = arr1.map(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item * 2;
}, thisArg);
console.log(ret2); // [ 4, 6, 8 ]

```

#### Array.prototype.pop

```js
/**
 * @author: 张攀钦
 * @description: Array.prototype.pop()从数组中删除最后一个元素，并返回该元素的值。此方法改变数组长度。
 * @returns {*} item: 从数组删除的元素，数组为空时，返回 undefined
 * const item = Array.prototype.pop()
 */
const arr = [1, 2, 3, 4, 5];
const item = arr.pop();
console.log(item); // 5
console.log(arr); // [ 1, 2, 3, 4 ]

```

#### Array.prototype.push

```js
/**
 * @author: 张攀钦
 * @description: Array.prototype.push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
 * @param {*} elementN: 添加到数组的元素
 * @returns {Number} length: 数组的新的长度
 * const length = Array.prototype.push(element1, ..., elementN);
 */
// 1、push 一个元素
const arr = [1, 2, 3];
const length = arr.push(6);
console.log(length); // 4
console.log(arr); // [ 1, 2, 3, 6 ]
// 2、push 多个元素
const arr1 = [1, 2, 3];
const length1 = arr1.push(5, 7);
console.log(length1); // 5
// 3、push(...arr)
const arr2 = [1, 2, 3];
const arr3 = [1, 4, 7];
const length2 = arr2.push(...arr3);
console.log(arr2); // [ 1, 2, 3, 1, 4, 7 ]
console.log(length2); // 6

```

#### Array.prototype.reduce

```js
/**
 * @author: 张攀钦
 * const ret = Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue]
 * @description: 对数组中的每个元素执行callback函数(升序执行)，将其结果汇总为单个返回值。
 * @param {Function} callback: 回调函数 callback(accumulator, currentValue[, index[, array]])[, initialValue])
 * @param {*} accumulator:累加器
 * @param {*} currentValue:当前值，可选
 * @param {Number} index:当前索引，可选
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Number} initialValue:accumulator 初始化值。可选。
 * @returns {*} ret: 函数累计处理的结果 accumulator
 */
// 1.操作数字
const arr1 = [2, 3, 4];
const arg = 10;
const ret1 = arr1.reduce((acc, item, index, arr) => {
    // 第一次操作时 累加值:10,操作元素：2,操作元素的索引：0,调用方法的数组：2,3,4
    console.log(`累加值:${acc},操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return acc + item;
}, arg);
console.log(ret1);
// 2.计算每个元素出现的次数
const arr2 = [2, 3, 4, 1, 2, 3, 3, 4, 4, 4];
const arg2 = {};
const ret2 = arr2.reduce((acc, item, index, arr) => {
    // 第一次操作时 累加值:10,操作元素：2,操作元素的索引：0,调用方法的数组：2,3,4
    console.log(`累加值:${acc},操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    if (item in acc) {
        acc[item] += 1;
    } else {
        acc[item] = 1;
    }
    return acc;
}, arg2);
console.log(ret2); // { '1': 1, '2': 2, '3': 3, '4': 4 }
// 3.按属性分类
const arr3 = [{ name: 'Alice', age: 21 }, { name: 'Max', age: 20 }, { name: 'Jane', age: 20 }];
function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
}
const ret3 = groupBy(arr3, 'age');
console.log(ret3);
// { '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
// '21': [ { name: 'Alice', age: 21 } ] }

```

#### Array.prototype.reverse

```js
/**
 * @author: 张攀钦
 * @description: Array.prototype.reverse 方法将数组中元素的位置颠倒,并返回该数组。该方法会改变原数组。
 * @returns: {Array} arr：调用原来方法的数组实例。
 * const arr = Array.prototype.reverse();
 */
// 1、reverse
const arr = [1, 3, 2, 5, 4];
const ret = arr.reverse();
console.log(arr); // [ 4, 5, 2, 3, 1 ]
console.log(ret); // [ 4, 5, 2, 3, 1 ]
console.log(ret === arr); // true

```

#### Array.prototype.shift

```js
/**
 * @author: 张攀钦
 * @description: Array.prototype.shift 从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
 * @returns: {*} item：数组中的第一个元素，如果数组为空则返回undefined 。
 * const item = Array.prototype.shift();
 */
// 1、shift
const arr = [1, 3, 2, 5, 4];
const ret = arr.shift();
console.log(arr); // [ 3, 2, 5, 4 ]
console.log(ret); // 1

```

#### Array.prototype.slice

```js
/**
 * @author: 张攀钦
 * const arr=Array.prototype.slice([begin[,end]]),包含begin 对应元素，不包含 end 对应元素。
 * @description: 将数组从开始索引到结束索引浅拷贝，返回新的数组。
 * @param {Number} begin: 指定开始索引
 * @param {Number} end: 指定结束索引
 * @returns {Array} arr: 浅拷贝的新的数组
 */
// 1.正常参数
const arr1 = [2, 3, 4, 5, 6];
const ret1 = arr1.slice(2, 4);
console.log(ret1); // [ 4, 5 ]
// 2.非正常参数
const arr2 = [2, 3, 4, 5, 6];
const ret2 = arr2.slice(-4, -1);
console.log(ret2); // [ 3, 4, 5 ]
// 3.验证浅拷贝
const obj1 = { age: 'obj0' };
const obj2 = { name: 'obj2' };
const obj3 = { gender: 'obj2' };
const arr3 = [obj1, obj2, obj3];
const ret3 = arr3.slice(1, 2);
console.log(ret3); // [ { name: 'obj1' } ]
ret3[0].name = '修改';
console.log(ret3); // [ { name: '修改' } ]
console.log(obj2); // [ { name: '修改' } ]

```

#### Array.prototype.some

```js
/**
 * @author: 张攀钦
 * const obj = Array.prototype.some(callback([item[,index[,array]]])[, thisArg])
 * @description: 至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。
 * @param {Function} callback: 回调函数
 * @param {*} item:正在处理的元素。
 * @param {Number} index:正在处理的元素的索引。可选。
 * @param {Array} array:调用方法的数组实例。可选。
 * @param {Object} thisArg: 可选参数。当执行回调函数时用作 this 的值(参考对象)。
 * @returns {undefined} obj: undefined
 */
// 1.正常参数,箭头函数绑定不了this
const arr1 = [2, 3];
const thisArg = { name: 'Thor' };
const ret1 = arr1.some((item, index, arr) => {
    console.log('this:', this); // {}
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`);
    return item > 2;
}, thisArg);
console.log('操作值', ret1); // true
// 2.正常参数,正常函数绑定this
const arr2 = [2, 3];
const ret2 = arr2.some(function _every(item, index, arr) {
    console.log('this:', this); // { name: 'Thor' }
    console.log(`操作元素：${item},操作元素的索引：${index},调用方法的数组：${arr}`); // 操作元素：3,操作元素的索引：1,调用方法的数组：2,3
    return item > 2;
}, thisArg);
console.log(ret2); // true

```

#### Array.prototype.sort

```js
/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * @description: Array.prototype.sort 对数组元素进行排序，默认根据字符串的Unicode码点升序排列。
 * @param: {Function} compareFunction 用来指定按某种顺序进行排列的函数。
 * compareFunction(firstEl,secondEl) firstEl:第一个用于比较的元素。secondEl 第二个用于比较的元素。
 * @returns: {*} arr 调用方法数组的实例。
 * const arr = Array.prototype.sort([compareFunction]);
 */
// 1、sort(),默认根据字符串的Unicode码点升序排列
const arr = ['b', 1, 'c', 3, 2, 'a', 5, 4];
const ret = arr.sort();
console.log(arr); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
console.log(ret); // [ 1, 2, 3, 4, 5, 'a', 'b', 'c' ]
console.log(ret === arr); // true
// 2.sort((a,b)=>a-b),返回值0，位置不动，返回值小于0，a排在b前面，索引小于b的索引，大于0 ，则相反。
const arr2 = [{ name: 'c' }, { name: '2' }, { name: 'a' }, { name: '2' }, { name: '3' }, { name: 'b' }];
arr2.sort((a, b) => {
    const A = a.name.toUpperCase();
    const B = b.name.toUpperCase();
    if (A < B) {
        return -1;
    }
    if (A > B) {
        return 1;
    }
    return 0;
});
console.log(arr2); // [ { name: '2' },  { name: '2' },  { name: '3' },  { name: 'a' },  { name: 'b' },  { name: 'c' } ]
// 3、字符串和数字排序,元素转换字符串，按ASCII码 排序
const arr3 = ['1', 'b', 1, 'c', 3, 2, 'a', 5, '张'];
arr3.sort();
console.log(arr3); // [ 1, '1', 2, 3, 5, 'a', 'b', 'c', '张' ]
```

#### Array.prototype.splice

```js
/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * @description: Array.prototype.splice 删除数组中的元素或删除数组中的元素，并将删除位置的元素替换提供的元素。
 * 并以数组形式返回被修改的内容。此方法会改变原数组。
 * @param: {Number} start 用来指定修改位置索引+1。start大于数组长度，不操作。负数从倒数第几开始。
 * @param: {Number} deleteCount 可选，删除几个元素。不传，默认删除start开始后所有。
 * @param: {*} item1,item2 可选，要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
 * @returns: {Array} arr 由被删除的元素组成的一个数组。没有删除返回[]
 * const arr = Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]]);
 */
// 1、只传一个参数start
const arr = [1, 2, 3, 4, 5];
const retArr = arr.splice(1);
console.log(arr === retArr);
console.log(arr); // [ 1 ]
console.log(retArr); // [ 2, 3, 4, 5 ]
// 1-1、传负数start
const arrA = [1, 2, 3, 4];
const retArrA = arrA.splice(-1);
console.log(arrA); // [ 1, 2, 3 ]
console.log(retArrA); // [ 4 ]
// 2、 传入参数start大于数组长度，不改变原来数组
const arr1 = [1, 2, 3];
const retArr1 = arr1.splice(4);
console.log(arr1); // [ 1, 2, 3 ]
console.log(retArr1); // []
// 3、正常传入start，deleteCount
const arr2 = [1, 2, 3, 4, 5];
const retArr2 = arr2.splice(2, 2);
console.log(arr2); // [ 1, 2, 5 ]
console.log(retArr2); // [ 3, 4 ]
// 3、正常传入start,deleteCount大于start后元素数量
const arr3 = [1, 2, 3, 4, 5];
const retArr3 = arr3.splice(2, 10);
console.log(arr3); // [ 1, 2 ]
console.log(retArr3); // [ 3, 4, 5 ]
// 4、参数全部传入，添加的元素多余删除的元素
const arr4 = [1, 2, 3, 4];
const retArr4 = arr4.splice(2, 5, ...[5, 6, 7, 8]);
// const retArr4 = arr4.splice(2, 5, 5, 6, 7, 8);
console.log(arr4); // [ 1, 2, 5, 6, 7, 8 ]
console.log(retArr4); // [ 3, 4 ]

```

#### Array.prototype.unshift

```js
/**
 * @author: 张攀钦
 * @description: Array.prototype.unshift 在数组开头添加一个或多个元素。返回数组长度
 * @param: {*} item：添加到数组中的一个或多个元素
 * @returns: {Number} length 数组的长度
 * const length = Array.prototype.unshift(element1, ..., elementN);
 */
// 1.unshift
const arr = [3, 4, 5];
const ret = arr.unshift(1, 2);
console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(ret); // 5
// 2.添加多个元素
const arr1 = [4, 5, 6];
const ret1 = arr1.unshift(...[1, 2, 3]);
console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]
console.log(ret1); // 6

```

#### Array.prototype.values

```js
/* eslint-disable no-restricted-syntax */
/**
 * 这个 api 在 node 环境下运行报错，浏览器可以
 * @author: 张攀钦
 * const iterator = Array.prototype.values()
 * @description: 返回一个包含数组中所有值键的Array Iterator对象。
 * @returns {Iterator} iterator: 新的迭代器对象
 */
// 1.正常参数
const arr1 = [4, 2, 4, 43];
const obj = arr1.values();
for (const value of obj) {
    console.log(value); // expected output: 4，2，43，2
}

```

###  Symbol

```js
/* eslint-disable eqeqeq */
/**
 * @author: 张攀钦
 * Symbol es6 新的基本数据类型
 */
// 1.Symbol() 全局唯一的值，每次运行都是唯一的值
const symbol1 = Symbol('搏击俱乐部');
const symbol10 = Symbol('搏击俱乐部');
const symbol2 = Symbol('杀人回忆');
console.log(symbol1 === symbol10); // false
console.log(symbol1 == symbol10); // false
console.log(typeof symbol2); // symbol
// 2.Symbol.for();全局寻找，找不到不新建
const king1 = Symbol.for('国王的演讲');
const king2 = Symbol.for('国王的演讲');
console.log(king1 === king2); // true
// 3.Sym.keyFor(symbol);返回某个 Symbol 的描述
console.log(Symbol.keyFor(king1)); // 国王的演讲

```

#### Symbol.match

#### Symbol.replace

#### Symbol.search

#### Symbol.split

#### Symbol.hasInstance

```js
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

```

### Function

```js
// 1.函数默认参数
const func = function _func(name = '默认') {
    console.log(name);
};
func(); // 默认
func('人工智能'); // 人工智能
// 2.函数参数结构赋值
const func2 = function _func2({ name = '哈利波特', age = 18 }) {
    console.log(`${name}-${age}`);
};
func2({ name: '哈利' }); // 哈利波特-18
func2({ name: 'will', age: '19' }); // will-19
// 3.尾调用优化（Tail Call），函数的最后一步调用另一个函数，尾调用可以避免爆栈。例子用的阮一峰 es6 入门
const Fibonacci = function _Fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return _Fibonacci(n - 1) + _Fibonacci(n - 2);
};
// 进行尾递归调用优化的代码
const Fibonacci2 = function _Fibonacci2(n, ac1 = 1, ac2 = 1) {
    if (n <= 1) {
        return ac2;
    }

    return _Fibonacci2(n - 1, ac2, ac1 + ac2);
};
console.log(Fibonacci2(100)); // 573147844013817200000
// 超时，爆栈
console.log(Fibonacci(100));

```

#### Function.prototype.apply

```js
/**
 * @author: 张攀钦
 * Function.prototype.apply(thisArg, [argsArray])
 * @description:调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {Array} argsArray 给函数传的参数
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
playGame.apply({ name: '张攀钦' }, [game]); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
sleep.apply({ name: '林克' }); // undefined 睡觉

```

#### Function.prototype.call

```js
/**
 * @author: 张攀钦
 * Function.prototype.call(thisArg,[, arg1[, arg2[, ...]]])
 * @description:调用一个具有给定this值的函数
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {*} arg1 给函数传的参数
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
playGame.call({ name: '张攀钦' }, game); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
sleep.call({ name: '林克' }); // undefined 睡觉

```

#### Function.prototype.call

```js
/**
 * @author: 张攀钦
 * const func=Function.prototype.call(thisArg,[, arg1[, arg2[, ...]]])
 * @description:创建一个新的函数，在调用时设置this关键字为提供的值。
 * @param {Object} thisArg 函数运行时绑定的this对象
 * @param {*} arg1 给函数传的参数
 * @returns {Function} func 返回一个原函数的拷贝，并拥有指定的this值和初始参数。
 */
// 不是箭头函数
const game = '塞尔达之荒野之息';
global.name = '林克';
const playGame = function _playGame(gameName) {
    console.log(`${this.name} 玩 ${gameName}`);
};
playGame(game); // 林克 玩 塞尔达之荒野之息
const exec1 = playGame.bind({ name: '张攀钦' }, game);
exec1(); // 张攀钦 玩 塞尔达之荒野之息
// 箭头函数,绑定不了 this
const sleep = () => {
    console.log(this); // {}
    console.log(`${this.name} 睡觉`);
};
sleep(); // undefined 睡觉
const exec2 = sleep.bind({ name: '林克' });
exec2(); // undefined 睡觉

```

### Object

#### Object.assign

```js
/**
 * @Author: 张攀钦
 * const obj=Object.assign(target, ...sources)
 * @description 用于将所有可枚举属性的值，从一个或多个源对象复制到目标对象。
 * 源对象属性会覆盖目标对象相同属性，它将返回目标对象。
 * @param target 目标对象
 * @param sources 源对象
 * @returns obj 目标对象 obj===target true
 */
// 1. 复制对象
const obj = { a: 1 };
const target1 = { a: 2, b: 2 };
const copy = Object.assign(target1, obj);
console.log(copy === target1); // true
console.log(copy); // { a: 1, b: 2 }

// 1.2 复制对象之扩展运算符...
const target2 = { ...target1, ...obj };
console.log(target2); // { a: 1, b: 2 }
// 2、继承属性和不可枚举属性是不能拷贝的
const prototype = Object.create(
    { extend: 22 },
    {
        bar: {
            value: 'bar', // bar 是个不可枚举属性
        },
        baz: {
            value: 'baz',
            enumerable: true, // baz 是个自身可枚举属性
        },
    },
);
// prototype {baz: "baz", bar: "bar"} extend 是prototype原型对象上的属性
const target3 = { a: 3 };
Object.assign(target3, prototype);
console.log(target3); // { a: 3, baz: 'baz' }

// 3、基于class 复制
class Parent {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
class Son extends Parent {
    constructor(age, name) {
        super(name);
        this.age = age;
    }

    getAge() {
        return this.age;
    }
}
const son = new Son('age', 'name');
const ret = Object.assign({ gender: '男' }, son);
console.log(ret); // { gender: '男', name: 'name', age: 'age' }

// 4、拷贝 Symbol 类型的属性
const o1 = { a: 1 };
const o2 = { [Symbol('foo')]: 2 };
const retObj = Object.assign({}, o1, o2);
console.log(retObj); // { a: 1, [Symbol(foo)]: 2 }

```

#### Object.create

```js
/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * 使用指定的原型对象和属性创建一个新对象。
 * const ret=Object.create(proto, [propertiesObject])
 * @description 以对象 proto 作为原型对象创建新的对象 ret.__proto__ 就是 proto
 * @param proto: 新创建对象的原型对象。
 * @param propertiesObject: 可选。定义添加到创建新对象 ret 上属性及属性描述（可枚举，默认值，是否可以修改）
 * @returns ret 一个新对象，带着指定的原型对象和属性
 */
// 1、简单需求
const prototype = { age: 'age', name: 'name' };
const newObject = Object.create(prototype, {
    sex: {
        value: 'sex',
        enumerable: true, // 是否可以被枚举
    },
    hobby: {
        value: 'hobby',
        enumerable: true, // 是否可以被枚举
    },
});
console.log(newObject); // { sex: 'sex', hobby: 'hobby' }
console.log(newObject.__proto__ === prototype); // true

const Parent = function aa(name) {
    this.name = name;
    this.getName = function _getName() {
        console.log('getName');
        return this.name;
    };
};
Parent.prototype.move = function _move() {
    console.log('move');
};

const Son = function son(age, name) {
    Parent.call(this, name);
    this.age = age;
    this.getAge = function _getAge() {
        return this.age;
    };
};
Son.prototype = Object.create(Parent.prototype);
console.log(Son.prototype === Parent.prototype); // false
console.log(Son.prototype.__proto__ === Parent.prototype); // true
debugger;
console.log(Son);

```

#### Object.defineProperties

```js
/**
 * @Author: 张攀钦
 * const ret = Object.defineProperties(obj, props)
 * const ret = Object.defineProperty(obj, prop, descriptor) // 新增属性或者修改已有属性描述，并返回该对象 obj
 * @description 在一个对象上新增新的属性或修改现有属性及属性描述，并返回该对象 obj
 * @param obj: 需要操作的对象。
 * @param props: 属性描述
 * @returns ret 一个新对象，带着指定的原型对象和属性
 */
// 1、简单需求
const prototype = { age: 'age', name: 'name' };
const newObject = Object.defineProperties(prototype, {
    sex: {
        value: 'sex', // 属性的值，默认 undefined
        enumerable: true, // 是否可以被枚举
        configurable: true, // 默认 false。为 true 表示 sex 属性可以删除以及可以改变属性描述符
        writable: true, // 默认 false。为 true 表示 value 能被赋值运算符改变
    },
    hobby: {
        value: 'hobby',
        enumerable: false, // 是否可以被枚举
        configurable: false, // 默认 false。为 true 表示 hobby 属性可以删除以及可以改变属性描述符
        writable: false, // 默认 false。为 true 表示 value 能被赋值运算符改变
    },
    test: {
        value: 'test',
        configurable: true,
    },
});
// hobby 属性描述符 enumerable 为 false,表示对象该属性不能枚举，但是可以取到值
console.log(newObject); // { age: 'age', name: 'name', sex: 'sex' }
console.log(newObject.hobby); // hobby
// hobby 属性描述符 configurable 为 true,表示对象 hobby 属性不能修改
newObject.hobby = 'hobby修改';
console.log(newObject.hobby); // hobby
// configurable: true,表示属性可以删除
delete newObject.hobby;
delete newObject.sex;
console.log(newObject.hobby); // hobby
console.log(newObject.sex); // undefined
// test 不能被修改
prototype.test = '11';
console.log(prototype.test);
Object.defineProperties(prototype, {
    test: {
        value: 'test11',
        enumerable: true,
        configurable: true,
        writable: true,
    },
});
console.log(prototype); // { age: 'age', name: 'name', test: 'test11' }
// test 不能被修改
prototype.test = '11';
console.log(prototype.test); // 11

```

#### Object.entries

```js
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/**
 * @Author: 张攀钦
 * const arr = Object.entries(obj)
 * @description 返回一个给定对象自身可枚举属性的键值对数组，
 * 其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环也枚举原型链中的属性）。
 * @param {Object} obj: 需要操作的对象。
 * @returns {Array} arr
 */
// 1.
const obj = { name: 'name', age: 11 };
const arr = Object.entries(obj);
console.log(arr); // [ [ 'name', 'name' ], [ 'age', 11 ] ]
for (const [key, value] of arr) {
    console.log('key', key);
    console.log('value', value);
}
// 2. 枚举对象自身可以枚举的属性
const parent = { name: 'IronMan', age: 18 };
const obj2 = Object.create(parent, {
    hobby: {
        value: 'I love you three thousand times',
        enumerable: false, // 属性不可枚举
    },
    test: {
        value: 'test',
        enumerable: true,
    },
});
console.log('从 prototype 集成 name 和 age 属性', obj2.name); // IronMan
console.log('从 prototype 集成 name 和 age 属性', obj2.age); // 18
console.log('不可枚举属性，hobby', obj2.hobby); // I love you three thousand times
// 只能遍历对象自身可枚举的属性
const arr2 = Object.entries(obj2);
for (const [key, value] of arr2) {
    console.log('key,value=>', `${key},${value}`); // key,value test,test
}
// forin // 遍历自身和原型上可枚举的属性
for (const key in obj2) {
    // 属性 key--值 value test--test
    // 属性 key--值 value name--IronMan
    // 属性 key--值 value age--18
    console.log('属性 key--值 value', `${key}--${obj2[key]}`);
}

```

#### Object.freeze

```js
/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret1 = Object.freeze(obj)
 * @description 冻结一个对象,浅冻结，obj 属性是对象 ret 的话，对象ret 里面的属性可以操作。
 * obj 中不能添加、修改和删除属性；属性描述符也不能修改。因为是浅冻结，所以原型对象的属性可以修改。
 * @param {Object} obj: 需要冻结的对象。
 * @returns {Object} ret1 操作的对象。obj===ret1  为 true
 */
// 1.
const parent = { name: 'IronMan', age: 18, testObj: { test: 'test' } };
const obj2 = Object.create(parent);
obj2.data = { hobby: '看电影' };
obj2.gender = '男';
// 冻结obj2 之前操作,可以修改原型属性
console.log('name 属性', obj2.name); // IronMan
obj2.__proto__.name = '钢铁侠';
console.log('name 属性', obj2.name); // 钢铁侠
obj2.__proto__.name = 'IronMan';
console.log('name 属性', obj2.name); // IronMan
// 冻结对象
const ret = Object.freeze(obj2);
console.log(ret === obj2); // true
console.log('冻结之后的obj2', obj2); // { data: { hobby: '看电影' }, gender: '男'}
// 验证是否可以修改其原型，得出结论，可以增加、删除、更新原型对象中的属性
console.log('name 属性', obj2.name); // IronMan
obj2.__proto__.name = '钢铁侠';
console.log('name 属性', obj2.name); // 钢铁侠
console.log('name 属性', obj2.__proto__.name); // 钢铁侠
delete obj2.__proto__;
console.log('delete obj2.__proto__', obj2.__proto__); // { name: '钢铁侠', age: 18, testObj: { test: 'test' } }
obj2.__proto__.add = 'add';
console.log('obj2.__proto__.add 添加属性', obj2.__proto__.add); // add

// 修改自身基本数据类型,冻结之后不能添加属性
obj2.hobby = '看电影,复仇者联盟 4';
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 冻结之后不能删除属性
delete obj2.data;
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 冻结之后不能修改属性
obj2.gender = 'nan';
console.log(obj2); // { data: { hobby: '看电影' }, gender: '男' }
// 修改自身对象
obj2.data.hobby = '看电影,黑客帝国';
console.log(obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男'}

// 深冻结实现
Object.deepFreeze = function deepFreeze(obj) {
    // 取回定义在obj上的属性名
    const propNames = Object.getOwnPropertyNames(obj);

    // 在冻结自身之前冻结属性
    propNames.forEach((name) => {
        const prop = obj[name];
        // 如果prop是个对象，冻结它
        if (typeof prop === 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });

    // 冻结自身(no-op if already frozen)
    return Object.freeze(obj);
};

console.log('深冻结之前', obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男' }
Object.deepFreeze(obj2);
obj2.data.hobby = '看电影,阿甘正传';
// 深冻结成功
console.log(obj2); // { data: { hobby: '看电影,黑客帝国' }, gender: '男'}

```

#### Object.getOwnPropertyDescriptor

```js
/**
 * @Author: 张攀钦
 * const ret=Object.getOwnPropertyDescriptor(obj, prop)
 * @description 返回指定对象上属性对应的属性描述符。不能返回原型对象上的。
 * @param {Object} obj: 需要操作的对象。
 * @param {String} prop: 对象自身属性。
 * @returns {Object} ret 对象属性操作符对象
 */
const parent = { age: 18 };
const obj = Object.create(parent);
obj.name = 'Thanos';

// 1.获取对象自身属性操作符
const ret = Object.getOwnPropertyDescriptor(obj, 'name');
console.log('对象自身属性操作符', ret); // { value: 'Thanos',  writable: true,  enumerable: true,  configurable: true }

// 2.获取原型对象上的属性，不能获得
const ret2 = Object.getOwnPropertyDescriptor(obj, 'age');
console.log('原型对象自身属性操作符', ret2); // undefined

```

#### Object.getOwnPropertyNames

```js
/**
 * @Author: 张攀钦
 * const arr = Object.getOwnPropertyNames(obj)
 * @description 返回对象自身属性名称的数组。不可枚举和可以枚举的都会返回了。
 * @param {Object} obj: 需要操作的对象。
 * @returns {Array} arr 对象自身全部属性。
 */
const parent = { name: 'Captain America', age: 100 };
const obj = Object.create(parent, {
    hobby: {
        value: '我错过了一个约会!',
        enumerable: false, // false,属性不可枚举
    },
});
obj.gender = '男';
console.log('从原型对象parent 获得 name 属性:', obj.name); // Captain America
console.log(obj); // { gender: '男' }
const arr = Object.getOwnPropertyNames(obj);
console.log(arr); // [ 'hobby', 'gender' ]

```

#### Object.getOwnPropertySymbols

```js
/**
 * @Author: 张攀钦
 * const arr = Object.getOwnPropertySymbols(obj)
 * @description 返回一个对象自身的 Symbol 属性
 * @param {Object} obj: 需要冻结的对象。
 * @returns {Array} arr: Symbol 属性的数组。
 */
const Natasha = Symbol('Natasha');
const beauty = Symbol('beauty');
const age = Symbol('age');
const parent = { [age]: 18, height: 170 };
console.log(parent); // { height: 170, [Symbol(age)]: 18 }
const obj = Object.create(parent);
obj[Natasha] = 'Natasha';
obj[beauty] = 'beauty';
obj.gender = '女';
console.log(obj); // { gender: '女',  [Symbol(Natasha)]: 'Natasha',  [Symbol(beauty)]: 'beauty' }
const arr = Object.getOwnPropertySymbols(obj);
// 只返回自身 Symbol 属性
console.log(arr); // [ Symbol(Natasha), Symbol(beauty) ]

```

#### Object.getPrototypeOf

```js
/* eslint-disable new-cap */
/* eslint-disable no-unused-expressions */
/* eslint-disable symbol-description */
/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret = Object.getPrototypeOf(obj)
 * @description 方法返回指定对象的原型对象 ret===obj.__proto__ 为 true
 * @param {Object} obj: 需要操作的对象。
 * @returns {Object} ret: 操作对象的原型对象
 */
// 1.Object.create()
const parent = { name: 'Hulk', age: 18 };
// Object.create(parent) 创建的是在返回对象__proto__上添加Parent
const obj = Object.create(parent);
obj.prototype = { height: 178, description: '完美身高，和我一样，哈哈!' };
console.log(obj.prototype === parent); // false
console.log(obj.__proto__ === parent); // false
const ret = Object.getPrototypeOf(obj);
console.log(ret); // { name: 'Hulk', age: 18 }
// 2.直接给对象复制__proto__
const obj2 = { weight: '58kg', description: '数据有问题吧,身材一般啊' };
const prototype2 = { [Symbol()]: '测试' };
obj2.prototype = prototype2;
const ret2 = Object.getPrototypeOf(obj2);
console.log(ret2); // {}
obj2.__proto__ = prototype2;
const ret3 = Object.getPrototypeOf(obj2);
console.log(ret3); // { [Symbol()]: '测试' }
console.log(ret3 === prototype2); // true
// 3.Function 获取
const getName = function _getName() {
    return 'Hulk';
};
const getAge = function _getAge() {
    return 18;
};
getAge.prototype = getName;
const ret4 = Object.getPrototypeOf(getAge);
console.log(ret4 === Object.__proto__); // true
const obj4 = new getAge();
const ret5 = Object.getPrototypeOf(obj4);
ret5 === obj4.__proto__;
console.log(ret5 === obj4.__proto__); // true
// 4. class
class A {}
class B extends A {}
const ret6 = Object.getPrototypeOf(B);
console.log(B.__proto__ === A); // true
console.log(B.__proto__ === ret6); // true
const b = new B();
const ret7 = Object.getPrototypeOf(b);
console.log(b.__proto__ === ret7); // true

```

#### Object.is

```js
/**
 * @Author: 张攀钦
 * const bool = Object.is(obj1,obj2),基本和===类似
 * @description 方法返回指定对象的原型对象 ret===obj.__proto__ 为 true
 * @param {*} obj1: 需要操作的对象。
 * @param {*} obj2: 需要操作的对象。
 * @returns {Boolean} bool: 两个参数是否相等
 */

// 两个值都是 null
// 两个值都是 true 或者都是 false
// 两个值是由相同个数的字符按照相同的顺序组成的字符串
// 两个值指向同一个对象
// 两个值都是数字并且
// 都是正零 +0
// 都是负零 -0
// 都是 NaN
// 都是除零和 NaN 外的其它同一个数字
// 1.比较 两个值都是相同的 undefined
console.log(Object.is(undefined, undefined)); // true
console.log(Object.is(null, null)); // true
console.log(Object.is(true, true)); // true
console.log(Object.is(false, false)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is('a', 'a')); // true
console.log(Object.is('a', 'a')); // true
// 2.比较值相同类型不同
console.log(Object.is('1', 1)); // false
console.log(Object.is(+0, -0)); // false
console.log(Object.is(0, -0)); // false
console.log(Object.is(0, +0)); // true
// 3. 比较对象
const obj = { age: 1 };
const obj2 = { age: 1 };
console.log(Object.is(obj, obj2)); // false

```

#### Object.isFrozen

```js
/**
 * @Author: 张攀钦
 * const bool = Object.isFrozen(obj)
 * @description 对象是否被冻结,Object.freeze(obj)一定是冻结了对象
 * @param {Object} obj1: 需要操作的对象。
 * @returns {Boolean} bool: 对象是否被冻结。
 */
// 1、Object.isFrozen
const obj = { age: 1 };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); // true
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj)); // true
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj)); // false
// 2.
const obj2 = { release: 'the kraken!' };
Object.defineProperty(obj2, 'release', { writable: false });
console.log(Object.isFrozen(obj2)); // false
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj2)); // false
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj2)); // true
// 3.
const obj3 = { release: 'the kraken!' };
Object.defineProperty(obj3, 'release', { configurable: false });
console.log(Object.isFrozen(obj3)); // false
// 一个冻结对象也是一个密封对象.
console.log(Object.isSealed(obj3)); // false
// 当然,更是一个不可扩展的对象.
console.log(Object.isExtensible(obj3)); // true

```

#### Object.keys

```js
/**
 * @Author: 张攀钦
 * const arr = Object.keys(obj)
 * @description 枚举一个实现迭代接口的 对象自身可以枚举的属性,不能获得Symbol
 * @param {Object} obj: 需要操作的对象。
 * @returns {*} arr: 迭代器 key
 */
// 1.字符串
const str = '1234556';
console.log(Object.keys(str)); // [ '0', '1', '2', '3', '4', '5', '6' ]
// 2.数组
const arr = [1, 2, 3];
console.log(Object.keys(arr)); // [ '0', '1', '2' ]
// 3.对象
const parent = { name: 'IronMan', age: 18 };
const obj = Object.create(parent, {
    hobby: {
        value: 'I love you three thousand times',
        enumerable: false, // 属性不可枚举
    },
    test: {
        value: 'test',
        enumerable: true,
    },
});
// hobby 属性不能枚举
console.log(obj.hobby); // 'I love you three thousand times'
// 只能获得自身可以枚举的属性，原型上的 name 没有枚举
console.log(Object.keys(obj)); // [ 'test' ]

```

#### Object.preventExtensions

```js
/**
 * @Author: 张攀钦
 * const obj1 = Object.preventExtensions(obj)
 * @description 阻止对象自身属性扩展，不能添加自身属性，可以修改和删除已存在属性
 * @param {Object} obj: 需要操作的对象。
 * @returns {Object} obj1: obj===obj1 为 true
 */
// 1.
const obj = { name: 'name' };
const ret = Object.preventExtensions(obj);
console.log(obj === ret); // ret
// 可以修改原来属性
obj.name = 1;
console.log(obj);
// 不能增加属性
obj.age = 1;
console.log(obj);
// 可以删除属性
delete obj.name;
console.log(obj); // {}

```

#### Object.setPrototypeOf

```js
/* eslint-disable no-proto */
/**
 * @Author: 张攀钦
 * const ret=Object.setPrototypeOf(obj, __proto__)
 * @description 设置对象的原型对象obj.__proto__ === __proto__ 为 true。ES6 正式推荐的设置原型对象的方法。
 * @param {Object} obj: 需要操作的对象。
 * @param {Object} __proto__: obj 的原型对象。
 * @returns {Object} ret ret===obj 为 true
 */
// 1.Object.create()
const parent = { name: 'Hulk', age: 18 };
const son = {};
const obj = Object.setPrototypeOf(son, parent);
obj.prototype = { height: 178, description: '完美身高，和我一样，哈哈!' };
console.log(son === obj); // true
console.log(son.prototype === parent); // false
console.log(son.prototype.__proto__ === parent); // false
console.log(son.__proto__ === parent); // true
const ret = Object.getPrototypeOf(obj);
console.log(ret); // { name: 'Hulk', age: 18 }
// 2.Function 设置原型
const getName = function _getName() {
    return 'Hulk';
};
const getAge = function _getAge() {
    return 18;
};
Object.setPrototypeOf(getAge, getName);
const ret4 = Object.getPrototypeOf(getAge);
console.log(getAge.__proto__ === getName); // true
console.log(getAge.__proto__ === ret4); // true
console.log(getName === ret4); // true
// 4. class
class A {}
class B {}
Object.setPrototypeOf(B, A);
const ret6 = Object.getPrototypeOf(B);
console.log(B.__proto__ === A); // true
console.log(B.__proto__ === ret6); // true
const b = new B();
const ret7 = Object.getPrototypeOf(b);
console.log(b.__proto__ === ret7); // true

```

#### Object.values

```js
/**
 * @Author: 张攀钦
 * const arr = Object.values(obj)
 * @description 枚举一个实现迭代接口的 对象自身可以枚举的属性的值,不能获得Symbol
 * @param {Object} obj: 需要操作的对象。
 * @returns {*} arr: 迭代器 可以枚举属性的值
 */
// 1.字符串
const str = '23456';
console.log(Object.values(str)); // [ '2', '3', '4', '5', '6' ]
// 2.数组
const arr = [1, 2, 3];
console.log(Object.values(arr)); // [ '0', '1', '2' ]
// 3.对象
const parent = { name: 'IronMan', age: 18 };
const obj = Object.create(parent, {
    hobby: {
        value: 'I love you three thousand times',
        enumerable: false, // 属性不可枚举
    },
    test: {
        value: 'test',
        enumerable: true,
    },
});
// hobby 属性不能枚举
console.log(obj.age); // 'I love you three thousand times''
console.log(Object.values(obj)); // [ 'test' ]

```

### class

```js
/**
 * @author: 张攀钦
 * @description: class可以看作只是一个语法糖,实现比 es5更简单。
 * class constructor 当不存在的时候自动加上一个空参构造
 * 而且基于 instanceof 判断类型更准确
 * 类的内部所有定义的方法，定义在 Class.prototype,并且不可枚举（non-enumerable）。
 */
// 1.基于 class
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    // 定义在 prototype 的方法
    ['test']() {
        return this.age;
    }
}
const a = new A('马林达', 40);
console.log(a.getAge()); // 40
console.log(a.getName()); // 马林达
console.log(A === A.prototype.constructor); // true
console.log(a instanceof A); // true
// 类内定义的方法都是不可枚举的
console.log(Object.keys(A.prototype)); // []

// 2.上述可以理解为
const B = function _B(name, age) {
    this.name = name;
    this.age = age;
};
B.prototype = {
    constructor: B,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
};
const b = new B('马林达', 40);
console.log(b.getAge()); // 40
console.log(b.getName()); // 马林达
console.log(B === B.prototype.constructor); // true
console.log(b instanceof B); // true
// 与 class 不同
console.log(Object.keys(B.prototype)); // [ 'constructor', 'getName', 'getAge' ]

```

#### class静态属性和静态方法

```js
/**
 * @author: 张攀钦
 * @description: class可以看作只是一个语法糖,实现比 es5更简单。
 * class constructor 当不存在的时候自动加上一个空参构造
 * 而且基于 instanceof 判断类型更准确
 * 类的内部所有定义的方法，定义在 Class.prototype,并且不可枚举（non-enumerable）。
 */
// 1.基于 class
class A {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    // 定义在 prototype 的方法
    ['test']() {
        return this.age;
    }
}
const a = new A('马林达', 40);
console.log(a.getAge()); // 40
console.log(a.getName()); // 马林达
console.log(A === A.prototype.constructor); // true
console.log(a instanceof A); // true
// 类内定义的方法都是不可枚举的
console.log(Object.keys(A.prototype)); // []

// 2.上述可以理解为
const B = function _B(name, age) {
    this.name = name;
    this.age = age;
};
B.prototype = {
    constructor: B,
    getName() {
        return this.name;
    },
    getAge() {
        return this.age;
    },
};
const b = new B('马林达', 40);
console.log(b.getAge()); // 40
console.log(b.getName()); // 马林达
console.log(B === B.prototype.constructor); // true
console.log(b instanceof B); // true
// 与 class 不同
console.log(Object.keys(B.prototype)); // [ 'constructor', 'getName', 'getAge' ]

```

#### class继承

```js
/* eslint-disable no-proto */
/**
 * 目前唯一追的一部小数，《剑来》
 * @author: 张攀钦
 * @description: 通过 extends 实现集成
 * 子类构造函数必须通过 super 调用父类构造函数
 * 子类可以集成父类的静态属性和静态方法
 * class A{}
 * class B extends A{}
 * B.__proto__===A 为 true,集成了父类的静态属性和方法
 * B.prototype.__proto__ === A.prototype 为 true，子类实例集成父类的普通方法，B 的原型的原型是 A的原型，定义在 A 上的普通方法既是A原型上的方法，因此 B集成了 A的普通方法。
 * ES6 规定，在子类普通方法中通过super调用父类的方法时，方法内部的this指向当前的子类实例。
 */
// 1.基于 class
class A {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    static staticGetName() {
        return this.staticName;
    }
}
A.staticName = '阿良';
class B extends A {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
console.log(B.__proto__ === A); // true
console.log(Object.getPrototypeOf(B) === A); // true
console.log(B.prototype.__proto__ === A.prototype); // true
console.log(B.staticGetName());
console.log(B.staticName);

```

### Proxy

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.get()拦截对象的设置属性操作。
 * 1、访问属性: proxy[foo]和 proxy.bar
 * 2、Object.create(proxy)[foo]
 * Reflect.get()
 *
 * handler.set()拦截对象的读取属性操作。
 * 1、指定属性值: proxy[foo] = bar 和 proxy.foo = bar
 * 2、指定继承者的属性值: Object.create(proxy)[foo] = bar
 * Reflect.set()
 */
// 1.初试牛刀
const handler = {
    // 拦截构造函数
    construct(target, argumentsList, targetConstructor) {
        console.log(targetConstructor);
        return new target(...argumentsList);
    },
    // target 为被代理对象，name 为访问属性。
    get(target, name) {
        console.log('拦截之前');
        return name in target ? target[name] : 37;
    },
    set(target, name, value) {
        // target 被代理对象
        // name 访问的属性
        // 属性target.name的value
        if (name in target) {
            target[name] = value;
            return;
        }
        target[name] = '默认值';
    },
};
const Person = function _Person(name) {
    this.name = name;
};
const proxyPerson = new Proxy(Person, handler);
const obj = new proxyPerson('乔峰');
console.log(obj.name);
const p = new Person('段誉');
console.log(p.name);

```



#### handler.apply

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.apply()，返回任意值。
 * 该拦截器可以拦截以下操作:
 * 1、proxy(...args)
 * 2、Function.prototype.apply() 和 Function.prototype.call()
 * 3、Reflect.apply()
 */
// 1.初试牛刀
const person = {
    name: '无崖子',
    // rest 参数
    getName() {
        return this.name;
    },
};
const handler = {
    /**
     * target:被代理对象
     * thisArg:调用时的上下文对象。
     * argumentsList:被调用时的参数数组。
     */
    apply(target, thisArg, argumentsList) {
        console.log(target === person.getName); // true
        console.log(thisArg); // undefined
        console.log(argumentsList); // [ 1, 2, 3 ]
        return target.bind(person, argumentsList)();
    },
};
const proxy = new Proxy(person.getName, handler);
console.log(proxy(1, 2, 3)); // 无崖子
// 2.绑定函数的上下文
const liangXiao = {
    name: '梁萧',
    // rest 参数
    getName() {
        return this.name;
    },
};
const handler2 = {
    /**
     * target:被代理对象
     * thisArg:调用时的上下文对象。
     * argumentsList:被调用时的参数数组。
     */
    apply(target, thisArg, argumentsList) {
        console.log(target === liangXiao.getName); // true
        console.log(thisArg); // { name: '梁萧', getName: [Function: getName] }
        console.log(argumentsList); // [ 1, 2, 3 ]
        return target.apply(thisArg, argumentsList);
    },
};
const proxy2 = new Proxy(liangXiao.getName, handler2);
console.log(proxy2.call(liangXiao, 1, 2, 3)); // 梁萧
console.log(proxy2.apply(liangXiao, [1, 2, 3])); // 梁萧

```

#### handler.construct

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.construct()，必须返回对象。
 * 该拦截器可以拦截以下操作:
 * 1、执行代理对象new proxy(...args)
 * 2、Reflect.construct()
 */
// 1.初试牛刀
const Person = function _Person(name) {
    this.name = name;
};
const handler = {
    /**
     * target:被代理对象的构造函数
     * argumentsList:调用时代理对象时，餐的参数
     * targetConstructor：代理对象
     */
    construct(targetConstructor, argumentsList, proxy) {
        console.log(argumentsList); // [ '乔峰', 10 ]
        console.log(targetConstructor === Person); // true
        console.log(proxy); // proxyPerson
        return new targetConstructor(...argumentsList);
    },
};
const proxyPerson = new Proxy(Person, handler);
const obj = new proxyPerson('乔峰', 10); // 执行构造函数，被拦截
console.log(obj.name);
const p = new Person('段誉'); // 执行构造函数没有被拦截
console.log(p.name);

```

#### handler.defineProperty

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.defineProperty()，必须返回Boolean,标识操作是否成功。
 * 该拦截器可以拦截以下操作:
 * 1、Reflect.defineProperty()
 * 2、Object.defineProperty()
 */
// 1.初试牛刀
const person = { name: '无崖子' };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     * descriptor:属性描述符
     */
    defineProperty(target, prop, descriptor) {
        console.log(target === person); // true
        return Object.defineProperty(target, prop, descriptor);
    },
};
const descriptor = { configurable: true, enumerable: true, value: '无崖子变身' };
const proxy = new Proxy(person, handler);
Object.defineProperty(proxy, 'name', descriptor);
console.log(proxy);

```

#### handler.deleteProperty

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.deleteProperty()，必须返回Boolean,标识操作是否成功。
 * 该拦截器可以拦截以下操作:
 * 1、delete proxy[foo] 和 delete proxy.foo
 * 2、Reflect.deleteProperty()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    deleteProperty(target, prop) {
        console.log(target === person); // true
        delete target[prop];
        return true;
    },
};
const proxy = new Proxy(person, handler);
delete proxy.name;
console.log(proxy); // { age: 30 }

```

#### handler.getOwnPropertyDescriptor

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.getOwnPropertyDescriptor()，必须返回对象。
 * 该拦截器可以拦截以下操作:
 * 1、Object.getOwnPropertyDescriptor()
 * 2、Reflect.getOwnPropertyDescriptor()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    getOwnPropertyDescriptor(target, prop) {
        console.log(target === person); // true
        return Object.getOwnPropertyDescriptor(target, prop);
    },
};
const proxy = new Proxy(person, handler);
const descriptor = Object.getOwnPropertyDescriptor(proxy, 'name');
console.log(descriptor); // { value: '无崖子',writable: false,  enumerable: true,  configurable: true }

```

#### handler.getPrototypeOf

```js
/* eslint-disable no-proto */
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.getPrototypeOf()，必须返回对象。
 * 该拦截器可以拦截以下操作:
 * 1、Object.getPrototypeOf()
 * 2、Reflect.getPrototypeOf()
 * 3、访问对象的__proto__
 * 3、instanceof
 * 3、Object.prototype.isPrototypeOf()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
Object.setPrototypeOf(person, { name: '无崖子的师傅' });
const handler = {
    /**
     * target:被代理对象
     */
    getPrototypeOf(target) {
        console.log(target === person); // true
        return Object.getPrototypeOf(target);
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.getPrototypeOf(proxy)); // { name: '无崖子的师傅' }
console.log(Reflect.getPrototypeOf(proxy)); // { name: '无崖子的师傅' }
console.log(proxy.__proto__); // { name: '无崖子的师傅' }

```

#### handler.has

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.has()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、属性查询: foo in proxy
 * 2、foo in Object.create(proxy)
 * 3、Reflect.has()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    has(target, prop) {
        console.log(target === person); // true
        return prop in target;
    },
};
const proxy = new Proxy(person, handler);
const boll = 'name' in proxy;
console.log(boll); // true

```

#### handler.isExtensible

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.isExtensible()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.isExtensible()
 * 2、Reflect.isExtensible()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    isExtensible(target) {
        console.log(target === person); // true
        return Object.isExtensible(target);
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.isExtensible(proxy)); // true
console.log(Reflect.isExtensible(proxy)); // true

```

#### handler.ownKeys

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.ownKeys()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.getOwnPropertyNames()
 * 2、Object.getOwnPropertySymbols()
 * 3、Object.keys()
 * 4、Reflect.ownKeys()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * @param target:被代理对象
     * @param prop:修改的属性名称
     * @returns {Array}
     */
    ownKeys(target) {
        console.log(target === person); // true
        return Object.keys(target);
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.keys(proxy)); // true[ 'name', 'age' ]
console.log(Object.getOwnPropertyNames(proxy)); // [ 'name', 'age' ]
console.log(Object.getOwnPropertySymbols(proxy)); // []
console.log(Reflect.ownKeys(proxy)); // [ 'name', 'age' ]

```

#### handler.preventExtensions

```js
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.preventExtensions()，必须返回Boolean 。
 * 该拦截器可以拦截以下操作:
 * 1、Object.preventExtensions()
 * 2、Reflect.preventExtensions()
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * target:被代理对象
     * prop:修改的属性名称
     */
    preventExtensions(target) {
        console.log(target === person); // true
        Object.preventExtensions(target);
        return true;
    },
};
const proxy = new Proxy(person, handler);
console.log(Object.preventExtensions(proxy)); // true
console.log(Reflect.preventExtensions(proxy)); // true

```

#### handler.setPrototypeOf

```js
/* eslint-disable no-proto */
/* eslint-disable new-cap */
/* eslint-disable no-param-reassign */
/**
 * @author: 张攀钦
 * const proxy =new Proxy(target,handler);
 * @param {Object} target:被代理的对象
 * @param {Object} handler:一个对象，其属性是当执行一个操作时定义代理的行为的函数。
 * @returns {Object} proxy: 代理对象
 * @description: 代理对象的行为。
 * handler.setPrototypeOf()，必须返回Boolean。
 * 该拦截器可以拦截以下操作:
 * 1、Object.handler.setPrototypeOf()
 * 2、Reflect.handler.setPrototypeOf()
 * 3、访问对象的__proto__
 */
// 1.初试牛刀
const person = { name: '无崖子', age: 30 };
const handler = {
    /**
     * @param target:被代理对象
     * @param prototype:被代理对象的原型
     */
    setPrototypeOf(target, prototype) {
        console.log(target === person); // true
        return Object.setPrototypeOf(target, prototype);
    },
};

const proxy = new Proxy(person, handler);
console.log(Object.setPrototypeOf(proxy, { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }
console.log(Reflect.setPrototypeOf(proxy, { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }
console.log((proxy.__proto__ = { name: '无崖子的师傅' })); // { name: '无崖子的师傅' }

```

#### Reflect

#### Reflect.deleteProperty

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.deleteProperty(target, propertyKey)
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Boolean} ret:操作成功
 * @description: 用于删除属性,与 delete operator 类似
 */
// 昆仑
const gongYangYu = { name: '公羊羽' };
// 定义 wife 属性，不能删除
const ret = Reflect.defineProperty(gongYangYu, 'wife', { value: '花无媸', enumerable: true, configurable: false });
console.log(ret); // true
console.log(gongYangYu.wife); // 花无媸
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
delete gongYangYu.wife;
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
const ret2 = Reflect.deleteProperty(gongYangYu, 'wife');
console.log(ret2); // false
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }
const ret3 = Reflect.deleteProperty(gongYangYu, 'name');
console.log(ret3); // true
console.log(gongYangYu); // { wife: '花无媸' }

```

#### Reflect.apply

```js
/**
 * @author: 张攀钦
 * const ret=Reflect.apply(target, thisArg argumentsList)
 * @param: {Object} target:目标函数
 * @param: {Object} thisArg:函数绑定的 this 的对象
 * @param: {Array} argumentsList:参数列表
 * @returns: {*} ret:执行 target函数的返回值
 * @description: 通过指定的参数列表发起对目标(target)函数的调用。
 */
// 昆仑
global.age = 19;
const liangXiao = function _liangXiao(name, ...data) {
    console.log(name); // 梁萧
    console.log(data); // [ '花晓霜', '柳莺莺' ]
    console.log(this.age); // 18
    return name;
};
console.time('reflect:');
const name = Reflect.apply(liangXiao, { age: 18 }, ['梁萧', '花晓霜', '柳莺莺']);
console.log(name); // 梁萧
console.timeEnd('reflect:'); // reflect:: 3.972ms
// 证明有性能损耗
console.time('liangXiao:');
const name1 = liangXiao('梁萧');
console.log(name1); // 梁萧
console.timeEnd('liangXiao:'); // 0.172ms

```

#### Reflect.construct

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret=Reflect.construct(target, argumentsList[, function])
 * @param: {Object} target:目标函数
 * @param: {Array} argumentsList:参数列表
 * @param: {Function} function:function.prototype为 ret 的原型
 * @description: 相当于运行 new target(...args).
 * ret.__proto__===prototype.prototype
 */
// 昆仑
global.age = 19;
const liangXiao = function _liangXiao(name, ...data) {
    console.log(data); // [ '花晓霜', '柳莺莺' ]
    this.name = name;
};
const proto = function _proto_() {};
proto.prototype = {
    construct: proto,
    getName() {
        return this.name;
    },
};
// 当年高中看完《昆仑》，久久无法释怀。蓦然回首，早已沧海桑田啊，无喜无悲。
const ret = Reflect.construct(liangXiao, ['梁萧', '花晓霜', '柳莺莺'], proto);
console.log(ret);
console.log(ret.__proto__ === proto.prototype); // true
console.log(ret.getName()); // 梁萧
const prototype = Object.getPrototypeOf(ret);
console.log(prototype === proto.prototype); // true

```

#### Reflect.defineProperty

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.defineProperty(target, propertyKey, attributes)
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Object} attributes:属性的描述符
 * @param: {Boolean} ret:操作成功
 * @description: 定义属性操作符
 */
// 昆仑
const gongYangYu = { name: '公羊羽' };
const ret = Reflect.defineProperty(gongYangYu, 'wife', { value: '花无媸', enumerable: true });
console.log(ret); // true
console.log(gongYangYu.wife); // 花无媸
console.log(gongYangYu); // { name: '公羊羽', wife: '花无媸' }

```

#### Reflect.isExtensible

#### Reflect.preventExtensions

```js
/**
 * @author: 张攀钦
 * const bool = Reflect.isExtensible(target);//判断对象是否可扩展。；
 * const bool = Reflect.preventExtensions(target);//设置对象不可扩展。；
 */
const story = ['昆仑', '沧海'];
console.log(Reflect.isExtensible(story)); // true
story.push('灵飞经');
console.log(story); // [ '昆仑', '沧海', '灵飞经' ]
console.log(Reflect.preventExtensions(story)); // true
// story.push('铁血天骄');//报错

```

#### Reflect.get

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.get(target, propertyKey[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Object} receiver:如果遇到 getter，此值将提供给目标调用。
 * @param: {*} ret:返回值
 * @description: 获取属性的值,如果绑定的属性有 getter 方法调用 getter,receiver为绑定 getter的 this
 */
// 昆仑
console.log(Reflect.get(['九如', '花生'], 1)); // 花生
const jiuRu = {
    name: '九如',
    apprentice1: '花生',
    get apprentice() {
        return `${this.name}的徒弟是：${this.apprentice1}`;
    },
};
console.log(Reflect.get(jiuRu, 'apprentice')); // 九如的徒弟是：花生
console.log(Reflect.get(jiuRu, 'apprentice', { name: '梁萧', apprentice1: '风怜' })); // 梁萧的徒弟是：风怜

```

#### Reflect.getOwnPropertyDescriptor

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const arr = Reflect.getOwnPropertyDescriptor(target, propertyKey)
 * @param: {Object} target:目标对象
 * @param: {*} propertyKey:目标对象的属性
 * @param: {Object} ret:返回值
 * @description: 获取自身属性的属性描述符。Symbol和不能枚举的都可以获取
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(Reflect.getOwnPropertyDescriptor(obj, 'name')); // { value: '萧千绝',  writable: true,  enumerable: true,  configurable: true }
console.log(Reflect.getOwnPropertyDescriptor(obj, Symbol.for('萧千绝'))); // { value: '萧千绝',  writable: true,  enumerable: true,  configurable: true }
console.log(Reflect.getOwnPropertyDescriptor(obj, 'age')); // { value: 40,  writable: false,  enumerable: false,  configurable: false }

```

#### Reflect.has

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.has(target, propertyKey, value[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {Boolean} ret:返回值
 * @description: 判断是否有个属性，不能枚举的属性也可以判断,Symbol 也可以,原型上的属性也可以判断
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(obj); // { name: '萧千绝' }
console.log(obj.designation); // 黑水滔滔，荡尽天下
// 判断自身属性，不能枚举的
console.log(Reflect.has(obj, 'age')); // true;
// 判断 Symbol 类型
console.log(Reflect.has(obj, Symbol.for('萧千绝'))); // true;
// 判断原型上的属性
console.log(Reflect.has(obj, 'designation')); // true;

```

#### Reflect.ownKeys

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const arr = Reflect.ownKeys(target);
 * @param: {Object} target:目标对象
 * @param: {Array} ret:返回值
 * @description: 获取自身所有属性，包括不能枚举的属性,Symbol
 */
// 昆仑
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
Object.defineProperty(obj, 'age', { value: 40, enumerable: false, configurable: false });
console.log(Reflect.ownKeys(obj));

```

#### Reflect.getPrototypeOf

#### Reflect.setPrototypeOf

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const obj=Reflect.getPrototypeOf(target)// 获取 target 的原型,不存在返回 null
 * const bool=Reflect.setPrototypeOf(target,proto)// 设置 target 的原型,设置陈工返回 true
 * @description:
 */
const obj = {
    name: '萧千绝',
    [Symbol.for('萧千绝')]: '萧千绝',
};
const parent = { designation: '黑水滔滔，荡尽天下' };
obj.__proto__ = parent;
console.log(Reflect.getPrototypeOf(obj)); // { designation: '黑水滔滔，荡尽天下' }
console.log(Reflect.setPrototypeOf(obj, { age: 30 })); // true
console.log(obj.__proto__); // { age: 30 }

```

#### Reflect.set

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * const ret = Reflect.set(target, propertyKey, value[, receiver])
 * @param: {Object} target:目标对象
 * @param: {String} propertyKey:操作的属性
 * @param: {*} value:设置属性的值
 * @param: {Object} receiver:如果遇到 setter，receiver为绑定 getter的 this
 * @param: {Boolean} ret:返回值
 * @description: 就像在一个对象上设置一个属性。
 */
// 昆仑
const jiuRu = {
    name: '九如',
    apprentice1: '花生',
    set apprentice(apprentice1) {
        this.apprentice1 = `${apprentice1}--${this.age}`;
    },
};
Reflect.set(jiuRu, 'name', '九如大师');
console.log(jiuRu); // { name: '九如大师', apprentice1: '花生', apprentice: [Setter] }
const thisArg = { age: 18 };
Reflect.set(jiuRu, 'apprentice', '花生', thisArg);
console.log(jiuRu); // { name: '九如大师', apprentice1: '花生', apprentice: [Setter] }
console.log(thisArg); // { age: 18, apprentice1: '花生--18' }

```

### Promise

```js
/* eslint-disable prefer-promise-reject-errors */
/**
 * @author: 张攀钦
 * @description:Promise 异步编程
 * 一个 Promise有以下几种状态: 状态一旦代表，便不能更改
 * pending: 初始状态，既不是成功，也不是失败状态。等待状态转变
 * fulfilled: 意味着操作成功完成。then 处理逻辑
 * rejected: 意味着操作失败。可以在 catch 处理逻辑
 * 每一个 then 都会返回一个新的 Promise 实例
 */
// 1. new Promise();
const func = function _func(movie) {
    return new Promise((resolve, reject) => {
        if (movie === '盗梦空间') {
            resolve('做梦，就要做大一点');
        } else {
            // 心灵捕手
            reject('成功的含义不在于要得到什么，而在于你从那个奋斗的起点走了多远。');
        }
    });
};

func('盗梦空间')
    .then((data) => {
        console.log(data); // 做梦，就要做大一点
    })
    .catch((error) => {
        console.log(error);
    });
func('心里捕手')
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error); // 成功的含义不在于要得到什么，而在于你从那个奋斗的起点走了多远。
    });

```

#### Promise.all

```js
/**
 * @author: 张攀钦
 * const promi=Promise.all(iterable);
 * @description: 方法返回Promise 实例，或包含所有 resolve(data),有一个状态是 reject ,将会将返回的实例的状态转变为 reject
 */
const sleep = function _sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
const sleep1 = sleep(1000).then(() => {
    console.log('休息一秒');
    return '跟他説抱歉,我要去找个女孩';
});
const sleep2 = sleep(2000).then(() => {
    console.log('休息两秒');
    return '忘记应该忘记的，面对未来一切可以出现的。';
});
const sleep3 = sleep(3000).then(() => {
    console.log('休息三秒');
    return '孩子，生活不是靠书本和想当然来的，是靠心去体会的。';
});
const sleep4 = sleep(4000).then(() => {
    console.log('休息四秒');
    return '总有人有不好的时候，但这也会让你回忆起从前不曾在意的美好。';
});
const sleep5 = sleep(5000).then(() => {
    console.log('休息五秒');
    throw new Error('模拟测试失败情况');
});
// 返回 最先执行的 promise，sleep2先执行,所以会将 sleep2 返回。因为事件已经在队列中了，所以其余的 promise 也会执行
// const ret = Promise.all([sleep1, sleep2, sleep3, sleep4]);
// ret.then((data) => {
//     // 所有 promise resolve(data) data 组成的数组
//     console.log(data);
// }).catch((error) => {
//     console.log(error.message);
// });
// 休息一秒;
// 休息两秒;
// 休息三秒;
// 休息四秒
// [('跟他説抱歉,我要去找个女孩', '忘记应该忘记的，面对未来一切可以出现的。', '孩子，生活不是靠书本和想当然来的，是靠心去体会的。', '总有人有不好的时候，但这也会让你回忆起从前不曾在意的美好。')];
const ret2 = Promise.all([sleep1, sleep2, sleep3, sleep4, sleep5]);
ret2.then((data) => {
    // 所有 promise resolve(data) data 组成的数组
    console.log(data);
}).catch((error) => {
    console.log(error.message); // 执行这个
});
// 休息一秒;
// 休息两秒;
// 休息三秒;
// 休息四秒;
// 休息五秒;
// 模拟测试失败情况;

```

#### Promise.race

```js
/**
 * @author: 张攀钦
 * const promise = Promise.race(iterable);
 * @description:  方法返回一个 promise，
 * 一旦迭代器中的最先改变状态，就返回那个 promise
 */
const sleep = function _sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
};
const sleep2 = sleep(2000).then(() => {
    console.log('休息两秒');
    return '你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。';
});
const sleep3 = sleep(3000).then(() => {
    console.log('休息三秒');
    return '人终究是一个孤独的个体，纵使你已经拥有了他人的怀抱，这其中，也许人与人之间唯一不同的，只是你把孤独藏在哪里。';
});
const sleep4 = sleep(4000).then(() => {
    console.log('休息四秒');
    return '躲避和不信任，是因为曾经被应该爱我的人遗弃。';
});
// 返回 最先执行的 promise，sleep2先执行,所以会将 sleep2 返回。因为事件已经在队列中了，所以其余的 promise 也会执行
const ret = Promise.race([sleep2, sleep3, sleep4]);
ret.then((data) => {
    console.log(data); // 你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。
}).catch((error) => {
    console.log(error.message);
});
// 带过运行的结果
// 休息两秒
// 你可以了解世间万物，但追根溯源的唯一途径便是亲身尝试。
// 休息三秒
// 休息四秒

```

#### Promise.resolve

```js
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

```

### async

```js
/**
 * @author: 张攀钦
 * @description:async函数返回一个 Promise 对象，可以使用then方法添加回调函数。
 * 当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
 */
// 1.等待 await 后面执行完再执行后面的语句。
const awaitFunc = function _awaitFunc() {
    return Promise.resolve('awaitFunc').then((data) => {
        console.log(data);
        return 'awaitFunc-then-return-data';
    });
};
const async = async function _async() {
    // 等待 await 执行完之后，再将后续的代码放入微任务队列
    await awaitFunc().then((data) => {
        console.log(data);
    });
    console.log('awaitFunc 执行完在打印');
};
async();
/**
 * awaitFunc
 * awaitFunc-then-return-data
 * awaitFunc 执行完在打印
 */
const noAwaitFunc = function _noAwaitFunc() {
    return Promise.resolve('noAwaitFunc').then((data) => {
        console.log(data);
        return 'noAwaitFunc-then-return-data';
    });
};
const noAsync = function _noAsync() {
    noAwaitFunc().then((data) => {
        console.log(data);
    });
    console.log('noAwaitFunc 执行完在打印');
};
noAsync();
/**
 * noAwaitFunc 执行完在打印
 * noAwaitFunc
 * noAwaitFunc-then-return-data
 */

```

```js
/* eslint-disable no-unused-vars */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`sleep for ${ms} ms`);
        }, ms);
    });
}
// 1.错误用法
async function asyncFunction() {
    console.time('asyncFunction total executing:');
    const sleep1 = await sleep(1000);
    console.log(`sleep1: ${sleep1}`);
    const sleep2 = await sleep(2000);
    console.log(`sleep2: ${sleep2}`);
    const sleep3 = await sleep(3000);
    console.log(`sleep3: ${sleep3}`);
    const sleep4 = await sleep(4000);
    console.log(`sleep4: ${sleep4}`);
    const sleep5 = await sleep(5000);
    console.log(`sleep5: ${sleep5}`);
    console.timeEnd('asyncFunction total executing:');
    return 'asyncFunction done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
// 2.推荐用法用法
async function asyncFunction2() {
    console.time('asyncFunction2 total executing:');
    const promiseAll = await Promise.all([sleep(1000), sleep(2000), sleep(3000), sleep(4000), sleep(5000)]);
    console.timeEnd('asyncFunction2 total executing:');
    console.log(promiseAll); // [ 'sleep for 1000 ms','sleep for 2000 ms','sleep for 3000 ms','sleep for 4000 ms','sleep for 5000 ms' ]
    return 'asyncFunction2 done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
// asyncFunction total executing:: 15023.078ms,全部阻塞运行
// asyncFunction().then(data => console.log(data));
// asyncFunction2 total executing:: 5004.143ms
// asyncFunction2();

```

```js
/* eslint-disable no-unused-vars */
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const str = `sleep for ${ms} ms`;
            console.log(str);
            resolve(`resolve-${str}`);
        }, ms);
    });
}

async function asyncFunction2() {
    console.time('asyncFunction2 total executing:');
    const promiseRace = await Promise.race([sleep(1000), sleep(2000), sleep(3000), sleep(4000), sleep(5000)]);
    console.timeEnd('asyncFunction2 total executing:');
    console.log(promiseRace); // [ 'sleep for 1000 ms','sleep for 2000 ms','sleep for 3000 ms','sleep for 4000 ms','sleep for 5000 ms' ]
    return 'asyncFunction2 done.'; // 这个可以不返回，这里只是做个标记，为了显示流程
}
asyncFunction2().then(data => console.log(data));
/**
 *
sleep for 1000 ms
asyncFunction2 total executing:: 1006.042ms
resolve-sleep for 1000 ms
asyncFunction2 done.
sleep for 2000 ms
sleep for 3000 ms
sleep for 4000 ms
sleep for 5000 ms
 */

```

### Map

```js
/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * new Map([iterable])
 * @param {Iterable} iterable 可以是一个数组或者其他 iterable 对象
 * @description:Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
 */
// 1. iterable为二维数组[[key,value],[key,value]]
const arr = [['name', 'batman'], ['age', '27']];
const map = new Map(arr);
console.log(map.get('name')); // batman
console.log(map.get('age')); // 27

// 2.
const map1 = new Map();
map1.set('name', '神奇女侠');
map1.set('gender', '美女');
console.log(map1.get('name')); // 神奇女侠
console.log(map1.get('gender')); // 美女

// 3.Map.prototype.clear()移除Map对象的所有键/值对 。
map1.clear();
console.log(map1.get('name')); // undefined
console.log(map1.get('gender')); // undefined

// 4.Map.prototype.delete(key)
// 如果 Map 对象中存在该元素，则移除它并返回 true；否则如果该元素不存在则返回 false
const arr2 = [['name', '海王'], ['age', '27']];
const map4 = new Map(arr2);
console.log(map4.get('name')); // 海王
// 存在删除返回 true
console.log(map4.delete('name')); // true
console.log(map4.get('name')); // undefined
// 不存在删除，false
console.log(map4.delete('name')); // false

// 5.Map.prototype.has(key)返回一个布尔值，表示Map实例是否包含键对应的值。
const arr5 = [['name', '超人'], ['age', '27']];
const map5 = new Map(arr5);
console.log(map5.has('name')); // true
map5.delete('name');
console.log(map5.has('name')); // false
// 6.Map.prototype.keys()
// 返回一个新的 Iterator对象， 它按插入顺序包含了Map对象中每个元素的键 。
const arr6 = [['name', '超人'], ['age', '27']];
const map6 = new Map(arr6);
const iterator = map6.keys();
for (const item of iterator) {
    console.log(item); // name age;
}
// 7.Map.prototype.values()返回一个新的Iterator对象，它按插入顺序包含了Map对象中每个元素的值 。
const arr7 = [['name', '超人'], ['age', '27']];
const map7 = new Map(arr7);
const iterator7 = map7.values();
for (const item of iterator7) {
    console.log(item); // 超人 27
}
// 8.Map.prototype.entries()返回一个新的 Iterator 对象，它按插入顺序包含了Map对象中每个元素的 [key, value] 数组。
const arr8 = [['name', '超人'], ['age', '27']];
const map8 = new Map(arr8);
const iterator8 = map8.entries();
for (const [key, value] of iterator8) {
    console.log(key); // name age
    console.log(value); // 超人 27
}

```

#### Map.prototype.forEach

```js
/**
 * @author: 张攀钦
 * Map.prototype.forEach(callback(value[,key[,map]])[, thisArg])
 * @description: 方法将会以插入顺序对 Map 对象中的每一个键值对执行一次参数中提供的回调函数。
 * @param {*} value:值
 * @param {*} key:键
 * @param {Map} map:调用方法的对象
 * @param {Object} thisArg:callback 执行时的 this，箭头函数绑定不了 this
 */
const arr = [['movie-1', '肖申克的救赎'], ['movie-2', '阿甘正传']];
const movie = new Map(arr);
movie.forEach((value, key, map) => {
    console.log(value);
    console.log(key);
    console.log(map);
});

```

### Set

```js
/* eslint-disable no-restricted-syntax */
/**
 * @author: 张攀钦
 * const set = new Set([iterable]);
 * @description:Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。
 */
// 1.
const movie = { movie: '聚焦' };
const set1 = new Set([1, 1, movie, movie, 2, 3]);
console.log(set1); // Set { 1, { movie: '聚焦' }, 2, 3 }
// 多少个元素
console.log(set1.size); // 4
// 添加元素
set1.add('黑客帝国');
console.log(set1); // { 1, { movie: '聚焦' }, 2, 3, '黑客帝国' }
// 删除元素
set1.delete(1);
console.log(set1); // Set { { movie: '聚焦' }, 2, 3, '黑客帝国' }
// 判断是否包含某个元素,包含返回 true
console.log(set1.has(2)); // true
console.log(set1.has(21)); // false
// Set.prototype.entries() 返回一个新的迭代器对象，
const it = set1.entries();
for (const [key, value] of it) {
    // key 和 value 一样，为 set 中的元素
    console.log(key);
    console.log(value);
}
// Set.prototype.keys()和Set.prototype.values() 行为一样
const values = set1.values();
for (const value of values) {
    console.log(value);
    /**
     * { movie: '聚焦' }
     * 2
     * 3
     * 黑客帝国
     */
}

```

#### Set.prototype.forEach

```js
/**
 * @author: 张攀钦
 * Set.prototype.forEach(callback([currentValue[,currentKey[,set]]])[, thisArg])
 * @param {*} currentValue 操作当前元素
 * @param {*} currentKey 操作当前元素
 * @param {Set} set 调用方法的的实例
 * @param {*} thisArg 给回调函数绑定的 this,箭头函数会绑定不上
 * @description:根据集合中元素的插入顺序，依次执行提供的回调函数。
 */
const set = new Set(['蝙蝠侠之侠影之谜', '蝙蝠侠之黑暗骑士', '蝙蝠侠之黑暗骑士的崛起']);
set.forEach((key, val, set1) => {
    console.log(key);
    console.log(set1);
    console.log(val);
});
console.log(set);

```

### Math

```js
/**
 * @author: 张攀钦
 * Math.E，欧拉常数，也是自然对数的底数, 约等于 2.718.
 * Math.LN2，2的自然对数, 约等于0.693.
 * Math.LN10，10的自然对数, 约等于 2.303.
 * Math.LOG2E，以2为底E的对数, 约等于 1.443.
 * Math.LOG10E，以10为底E的对数, 约等于 0.434.
 * Math.PI，圆周率，一个圆的周长和直径之比，约等于 3.14159.
 * Math.SQRT1_2，1/2的平方根, 约等于 0.707.
 * Math.SQRT2，2的平方根,约等于 1.414.
 */
// 1.Math.abs(x),返回x的绝对值.会进行转换数字在去绝对值
console.log(Math.abs(-1)); // 1
console.log(Math.abs(1)); // 1
console.log(Math.abs(-0)); // 1
console.log(Math.abs(+0)); // 1
console.log(Math.abs('_Elsa')); // NaN
console.log(Math.abs('1')); // 1
// 2.Math.ceil(x)返回x向上取整后的值：大于等于x的最小整数
console.log(Math.ceil(-1.1)); // -1
console.log(Math.ceil(1.2)); // 2
console.log(Math.ceil('-1.1')); // -1
console.log(Math.ceil('_Elsa')); // Nan
console.log(Math.ceil(1)); // 1
// 3.Math.floor(x)向下取整：小于等于 x的最小整数
Math.floor(45.95); // 45
Math.floor(45.05); // 45
Math.floor(4); // 4
Math.floor(-45.05); // -46
Math.floor(-45.95); // -46
// 4.Math.max([x[,y[,…]]])返回0个到多个数值中最大值.
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(1, 2, 3, '4')); // 4
console.log(Math.max(1, 2, 3, '4', 'asdfa')); // NaN
console.log(Math.max(1, 2, 3, '4', '4.5')); // 4.5
console.log(Math.max(1, 2, 3, '4', '4.5', '4.5')); // 4.5
// 5.Math.min([value1[,value2, ...]]) 返回最小值。
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.min(1, 2, 3, '4')); // 1
console.log(Math.min(1, 2, 3, '4', 'asdfa')); // NaN
console.log(Math.min(1, 2, 3, '4', '4.5')); // 1
console.log(Math.min(1, 1, 2, 3, '4', '4.5', '4.5')); // 1
// 6.Math.random() 随机数在这个区间[0，1)
console.log(Math.random()); // 0.29555726609770505
//  7.Math.round(x) 返回四舍五入后的整数.
console.log(Math.round(-4.3)); // -4
console.log(Math.round(4.3)); // 4
console.log(Math.round('4.3')); // 4
console.log(Math.round('4.as3')); // NaN

```

### Number

```js
// 1.Number.isNaN()确定传递的值是否是 NaN。
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(1)); // false
console.log(Number.isNaN('NaN')); // false
// 2.Number.isFinite()确定传递的值类型是“number”，且是有穷的（finite），才返回 true。
// 正无穷大
console.log(Number.isFinite(Infinity)); // false
// Nan
console.log(Number.isFinite(NaN)); // false
// 负无穷大
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(0)); // true
console.log(Number.isFinite(2e64)); // true
console.log(Number.isFinite('0')); // false

// 3.Number.isInteger()确定传递的值类型是“number”，且是整数。
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-100000); // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger('10'); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

// 4.const ret=Number.parseInt(string[, radix]) 将字符串以制定进制转换成整数,不能转换返回 NaN
// radix为指定基数，即字符串以多少进制的数字表示
const strObj = '0110';
console.log(Number.parseInt(strObj, 2)); // 6
console.log(Number.parseInt(strObj, 10)); // 110
console.log(Number.parseInt('asdfas', 10)); // NaN

```

### Regexp

```js
/**
 * @author: 张攀钦
 * const regexp=new RegExp(pattern [, flags])
 * @param {String} 正则表达式
 * @param {String} flags
 * flags 可以为下列组合
 * g：全局匹配;找到所有匹配，而不是在第一个匹配后停止
 * i：忽略大小写
 * y：粘性匹配; 匹配成功之后，会从剩下的字符串的开始做匹配，匹配不上就没有后续结果了。
 * regexp.lastIndex g，y模式生效，记录下次开始的匹配位置,当匹配失败会赋值为 0
 * @description: 匹配会最大限度的符合正则表达式需要匹配的结果
 */
// 0.正则表达式会尽可能多的匹配
const str = 'aaaa11aaaa11aaaa11';
const regexp = /a+/g;
console.log(regexp.exec(str)); // [ 'aaaa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp.exec(str)); // [ 'aaaa', index: 6, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp.exec(str)); // [ 'aaaa', index: 12, input: 'aaaa11aaaa11aaaa11' ]
// 0-1 不带 g
const str0 = 'abc11abbc11abbbc';
const reg0 = new RegExp('ab+c');
const ret01 = reg0.exec(str0);
const ret02 = reg0.exec(str0);
const ret03 = reg0.exec(str0);
console.log(ret01); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret02); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret03); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
// 1.g
const str1 = 'abc11abbc11abbbc';
const reg1 = new RegExp('ab+c', 'g');
const ret1 = reg1.exec(str1);
const ret2 = reg1.exec(str1);
const ret3 = reg1.exec(str1);
console.log(ret1); // [ 'abc', index: 0, input: 'abc11abbc11abbbc' ]
console.log(ret2); // [ 'abbc', index: 5, input: 'abc11abbc11abbbc' ]
console.log(ret3); // [ 'abbbc', index: 11, input: 'abc11abbc11abbbc' ]
// 2.i
const str3 = 'aaaa11aaaa11aaaa11';
const regexp3 = /aA+/i;
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 6, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp3.exec(str3)); // [ 'aaaa', index: 12, input: 'aaaa11aaaa11aaaa11' ]
// 3.y
const str4 = 'aaaa11aaaa11aaaa11';
const regexp4 = /aa/y;
// 第一次运行 匹配 aaaa11aaaa11aaaa11，剩下11aaaa11aaaa11
console.log(regexp4.exec(str4)); // [ 'aa', index: 0, input: 'aaaa11aaaa11aaaa11' ]
// 第二次运行 匹配 11aaaa11aaaa11，没有匹配到结果，剩下
console.log(regexp4.exec(str4)); // [ 'aa', index: 2, input: 'aaaa11aaaa11aaaa11' ]
console.log(regexp4.exec(str4)); // null
// RegExp.prototype.test()用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。
const str5 = 'aaaa11aaaa11aaaa11';
const regexp5 = /aa/y;
console.log(regexp5.test(str5)); // true
console.log(regexp5.test(str5)); // true
// 匹配失败，lastIndex 设置为 0
console.log(regexp5.test(str5)); // false
// 匹配成功，lastIndex 设置为 2
console.log(regexp5.test(str5)); // true
```

### Date

```js
/**
 * @author: 张攀钦
 * @description: Date 对象则基于 Unix Time Stamp，即自1970年1月1日（UTC）起经过的毫秒数。
 */
// 1. new Date(); 获取系统当前时间
const now = new Date();
console.log(now); // 2019-05-31T14:33:47.439Z
// 2.new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
// monthIndex 从 0 开始
const thatData = new Date(2019, 2, 14, 19, 30);
console.log(thatData); // Thu Mar 14 2019 19:30:00 GMT+0800 (中国标准时间)
console.log(thatData.toUTCString()); // Thu Mar 14 2019 19:30:00 GMT+0800 (中国标准时间)
// 3. const milliseconds = Date.UTC(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
const milliseconds = Date.UTC(2019, 2, 14, 19, 30);
console.log(milliseconds); // 1552591800000
// 4.new Date(milliseconds);1970-1-1经过毫秒之后的时间
const thatDay = new Date(milliseconds);
console.log(thatDay); // 2019-03-14T19:30:00.000Z

```

Date-get获取属性

```js
const mill = Date.UTC(2019, 2, 14, 19, 30, 21, 21, 21);
console.log(mill); // 1552591821021
const thatDay = new Date(mill);
// 1.Date.prototype.getDate()根据本地时间返回指定日期对象的月份中的第几天（1-31）。
console.log('thatDay.getDate():', thatDay.getDate()); // 15

// 2.Date.prototype.getUTCDate()根据世界时返回特定日期对象一个月的第几天（1-31）.
console.log('thatDay.getUTCDate():', thatDay.getUTCDate()); // 14

// 3.Date.prototype.getTime()返回从1970-1-1 00:00:00 UTC（协调世界时）到该日期经过的毫秒数，
console.log('thatDay.getTime():', thatDay.getTime()); // 1552591821021

// 4.Date.prototype.getDay()根据本地时间返回指定日期对象的星期中的第几天（0-6）。
console.log('thatDay.getDay():', thatDay.getDay()); // 5

// 5.Date.prototype.getUTCDay()根据世界时返回特定日期对象一个星期的第几天（0-6）.
console.log('thatDay.getUTCDay():', thatDay.getUTCDay()); // 4

// 6.Date.prototype.getHours();根据本地时间返回指定日期对象的小时（0-23）。
console.log('thatDay.getHours():', thatDay.getHours()); // 3

// 7.Date.prototype.getUTCHours()根据世界时返回特定日期对象当前的小时（0-23）.
console.log('thatDay.getUTCHours():', thatDay.getUTCHours()); // 19

// Date.prototype.getMilliseconds();根据本地时间返回指定日期对象的毫秒（0-999）。
console.log('thatDay.getMilliseconds():', thatDay.getMilliseconds()); // 21

// Date.prototype.getUTCMilliseconds()根据世界时返回特定日期对象的毫秒数（0-999）.
console.log('thatDay.getUTCMilliseconds():', thatDay.getUTCMilliseconds()); // 21

// Date.prototype.getMinutes();根据本地时间返回指定日期对象的分钟（0-59）。
console.log('thatDay.getMinutes():', thatDay.getMinutes()); // 30

// Date.prototype.getUTCMinutes()根据世界时返回特定日期对象的分钟数（0-59）.
console.log('thatDay.getUTCMinutes():', thatDay.getUTCMinutes()); // 30

// Date.prototype.getMonth();根据本地时间返回指定日期对象的月份（0-11）。
console.log('thatDay.getMonth():', thatDay.getMonth()); // 2

// Date.prototype.getUTCMonth()根据世界时返回特定日期对象的月份（0 - 11）.
console.log('thatDay.getUTCMonth():', thatDay.getUTCMonth()); // 2

// Date.prototype.getSeconds();根据本地时间返回指定日期对象的秒数（0-59）。
console.log('thatDay.getSeconds():', thatDay.getSeconds()); // 21

// Date.prototype.getUTCSeconds()根据世界时返回特定日期对象的秒数（0-59）.
console.log('thatDay.getUTCSeconds():', thatDay.getUTCSeconds()); // 21

```

## other

### var,let,const

```js
// 1.块级作用域
{
    const a = 1;
    let b = 2;
    // eslint-disable-next-line no-var
    var c = 3;
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: a is not defined
console.log(c); // 3

// 2.不存在变量提升
console.log(foo); // 输出undefined
var foo = 2;
// console.log(bar); // 报错ReferenceError
let bar = 2;

// 3.暂时性死区(TDZ):在代码块内，使用let命令声明变量之前，该变量都是不可用的。
var d = 'd';
try {
    if (true) {
        // 下面复制报错：ReferenceError: d is not defined
        d = 'd'; // TDZ-begin
        console.log(d);

        let d = 'c'; // TDZ-end
        console.log(d); // c
    }
} catch (error) {
    console.log(error.message); // d is not defined
}

// 3-1,在同一个作用域，不允许声明同一个变量，不同块级可以
let e = '3';
if (true) {
    let e = 'e';
    // 定义 var 会报错
    // var e = 'var-e';
    console.log(e); // e
}
// 4.不建议使用：ES6 引入了块级作用域，明确允许在块级作用域之中声明函数。
(function _execFunction() {
    let f;
    if (true) {
        f = function _f() {
            console.log('倒悬山');
            console.log('剑气长城');
        };
    }
    f();
}());

```



### 闭包

```js
/**
 * @author: 张攀钦
 * 《JavaScript高级程序设计》中写道：“闭包是指有权访问另一个函数作用域中的变量的函数”
 * @description: 简单理解：闭包为函数。A 函数中包含 B 函数。执行 A函数，return B; B 为闭包。
 */
// 1.变量 C 引用 _C,运行 C();返回的对象访问 C 中的局部变量，导致 C 不会被内存回收。
const C = function _C() {
    // const a = { name: 'name' };
    const getA = function _getA() {
        return '11';
    };
    return { getA };
};
const ret = C();
console.log(ret.getA()); // { name: 'name' }
// // 自执行函数
// const retC = (function _C(obj2) {
//     const a = { name: 'name' };
//     const data = obj2;
//     const getA = function _getA() {
//         return a;
//     };
//     const setA = function _setA(obj) {
//         Object.assign(a, obj);
//     };
//     return { getA, setA, data };
// }({ age: 18 }));
// console.log(retC.data); // { age: 18 }
// console.log(retC.getA()); // { name: 'name' }

```

```js
/**
 * 在栈中查看执行上下文
 * 执行上下文{
 * 作用域链：[[scope]],在函数创建的时候已经确定。先从自身作用域找，找不到去父作用域找。
 * 变量对象：用于存储被定义在上下文中的 变量(variables) 和 函数声明(function declarations) 。
 * thisArg:执行代码的时候，确认 this 的指针
 * }
 * 函数调用，变量对象（VO）编程（AO）
 */
const A = function _A(data) {
    const a1 = 'a';
    const b1 = 'a-b1';
    // const c1 = 'a-c1';
    const b = function _b() {
        // const b1 = 'b';
        // const c1 = 'b-c1';
        const c = function _c() {
            const c1 = 'c';
            const d = function _d() {
                const d1 = `${data}-${a1}-${b1}-${c1}`;
                return {
                    a1,
                    b1,
                    c1,
                    d1,
                };
            };
            return d;
        };
        return c();
    };
    return b();
};
// 返回的函数中[[scope]] 定义了需要的变量的值。
const a = A('A');
console.log(a());

```

### 原型及原型链

```js
/* eslint-disable func-names */
/* eslint-disable no-proto */
/**
 * [JS 的 new 到底是干什么的？](https://juejin.im/post/584e1ac50ce463005c618ca2)
 * [JS原型链与继承别再被问倒了](https://juejin.im/post/58f94c9bb123db411953691b)
 * [从prototype与__proto__窥探JS继承之源](https://juejin.im/post/58f9d0290ce46300611ada65)
 * @author: 张攀钦
 * @description:
 * 每个对象（包括函数）都会有__proto__属性,es6也将其加入到规范中来了。
 * __proto__ 是对象的内部属性, 它指向构造器的原型, 对象依赖它进行原型链查询，instanceof 也是依赖它来判断是否继承关系.
 * 对象 obj 属性查找的规则，先从obj中查找，找不到就去obj的原型（obj.__proto__）中找，找不到，再去obj原型的原型(obj.__proto__)找。。。。直到找到 或者null，原型链因此形成.
 * const A =function _A(){}
 * const a=new A();
 * new 关键字提到什么作用呢？
 * 1、创建一个空对象 const temp={};
 * 2、对对象赋值，temp.__proto__=A.prototype;
 * 3、A.call(temp);将 A 中的 this 替换为 temp ,然后将 temp 返回赋值给啊a;
 */
// 《雪中悍刀行》
// 1.对象 __proto_ 属性
const A = { wife: { name: '洛阳' } };
const B = { faShu: '真武法身' };
const C = { name: '徐凤年' };
// Object.setPrototypeOf(xuFengNian, qianShi); 推荐这种写法
B.__proto__ = A;
C.__proto__ = B;
// 先从自身对象 obj 找，找不到去obj的原型（obj.__proto__）中找,还找不到去原型的原型找（obj.__proto__.__proto__）
console.log(C.wife); // { name: '洛阳' }
console.log(C.faShu); // 真武法身
console.log(C.name); // 徐凤年
// 2.验证 new 关键字的作用
const D = function _D(name) {
    this.name = name;
    this.play = function _play() {
        console.log(1211);
    };
};
D.prototype = {
    constructor: D,
    getName() {
        return this.name;
    },
};
// 执行构造函数返回实例
const d = new D('洪洗象');
// a.__proto__=A.prototype;
console.log(d.__proto__ === D.prototype); // true
// 将 this 指向 obj
console.log(d.getName()); // 洪洗象
d.play(); // 验证 this 指向 obj

```

#### 原型链实现继承

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于原型链实现继承。
 */
// 1.通过原型链实现继承
const A = function _A() {};
A.play = function _play() {
    console.log('A.paly');
};
const B = function _B() {};
B.study = function _study() {
    console.log('B.study');
};
const C = function _C() {};
C.sleep = function _sleep() {
    console.log('C.sleep');
};
B.__proto__ = C;
A.__proto__ = B;
A.study(); // B.study
A.sleep(); // C.sleep
// 2.基于原型链也可以继承，但存在问题，原型obj的属性 data 指向引用类型，基于 obj 为原型的子类将会共享 data，一个子类修改，其余也将受到影响。
B.names = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象'];
const D = function _D() {};
D.__proto__ = B;
console.log(A.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象' ]
console.log(D.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象' ]
A.names.push('姜泥');
D.names.push('南宫仆射');
console.log(A.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象', '姜泥', '南宫仆射' ]
console.log(D.names); // [ '徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象', '姜泥', '南宫仆射' ]
```

#### 构造函数和原型链组合实现继承

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于构造函数和原型链实现继承。
 */
// 1.通过原型链和构造函数实现继承,A 继承 B ,B 继承 C
const C = function _C(roles = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象']) {
    this.roles = roles;
    this.c = function _c() {
        return '自身 c';
    };
};
C.prototype.getRoles = function _getRoles() {
    return `${this.roles}-C.getRoles`;
};
const B = function _B(obj, roles) {
    C.call(this, roles);
    this.obj = obj;
    this.b = function _b() {
        return '自身 b';
    };
};
// B.prototype = new C();=>B.prototype.__proto__=C.prototype;是什么情况呢？二者都可以实现继承
// 推荐这种，B.prototype = new C();// 继承层次很清晰，通过 debug 可以清楚，this.b 继承于 B，this.c继承 B中的this.c,而 B 中的 this.c 继承于 C中的 this.c
// B.prototype.__proto__=C.prototype; 效果一样，但是 debug ，看不出来，b和 c 是否继承于别的原型
B.prototype = new C();
B.prototype.constructor = B;
B.prototype.study = function _study() {
    return `${this.name}-B.study`;
};
const A = function _A(name, obj, roles) {
    B.call(this, obj, roles);
    this.name = name;
    this.play = function _play() {
        return `${this.name}-A.paly`;
    };
    this.b = function _bb() {
        return `${this.name}-A重写b方法`;
    };
};
// A.prototype = new B();=>A.prototype.__proto__=B.prototype;是什么情况呢？
A.prototype = new B();
A.prototype.constructor = A;
A.prototype.getName = function _getName() {
    return this.name;
};
const a1 = new A('红薯', { age: 18 }, ['徐凤年']);
const a2 = new A('青鸟', { age: 18 }, ['吴素']);
console.log(a1.play()); // 红薯-A.paly
console.log(a2.play()); // 青鸟-A.paly
console.log(a1.getName()); // 红薯
console.log(a2.getName()); // 青鸟
console.log(a1.study()); // 红薯-B.study
console.log(a2.study()); // 青鸟-B.study
console.log(a1.getRoles()); // 徐凤年-C.getRoles
console.log(a2.getRoles()); // 吴素-C.getRoles
console.log(a2 instanceof B); // true
console.log(a1 instanceof B); // true
console.log(a1 instanceof C); // true
console.log(a1 instanceof C); // true
console.log(a1.b()); // 红薯-A重写b方法
console.log(a1.c()); // 自身 c
console.log(a2.b()); // 青鸟-A重写b方法
console.log(a2.c()); // 自身 c

```

#### 构造函数和__proto__实现继承

```js
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于构造函数和原型链实现继承。
 */
// 1.通过原型链和构造函数实现继承,A 继承 B ,B 继承 C
const C = function _C(roles = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象']) {
    this.roles = roles;
    this.c = function _c() {
        return '自身 c';
    };
};
C.prototype.getRoles = function _getRoles() {
    return `${this.roles}-C.getRoles`;
};
const B = function _B(obj, roles) {
    C.call(this, roles);
    this.obj = obj;
    this.b = function _b() {
        return '自身 b';
    };
};
// B.prototype = new C();=>B.prototype.__proto__=C.prototype;是什么情况呢？
// B.prototype = new C(); 会将 C 自身的属性和方法和 C.原型的方法都加到原型链中。标识 B 可以继承 C 自身的方法和 C 的原型上的方法。
// B.prototype.__proto__=C.prototype; 会将 C 原型上的方法加到原型链中，不能继承 C 自身的方法
B.prototype.__proto__ = C.prototype;
B.prototype.constructor = B;
B.prototype.study = function _study() {
    return `${this.name}-B.study`;
};
const A = function _A(name, obj, roles) {
    B.call(this, obj, roles);
    this.name = name;
    this.play = function _play() {
        return `${this.name}-A.paly`;
    };
    this.b = function _bb() {
        return `${this.name}-A重写b方法`;
    };
};
// A.prototype = new B();=>A.prototype.__proto__=B.prototype;是什么情况呢？
A.prototype.__proto__ = B.prototype;
A.prototype.constructor = A;
A.prototype.getName = function _getName() {
    return this.name;
};
const a1 = new A('红薯', { age: 18 }, ['徐凤年']);
const a2 = new A('青鸟', { age: 18 }, ['吴素']);
console.log(a1.play()); // 红薯-A.paly
console.log(a2.play()); // 青鸟-A.paly
console.log(a1.getName()); // 红薯
console.log(a2.getName()); // 青鸟
console.log(a1.study()); // 红薯-B.study
console.log(a2.study()); // 青鸟-B.study
console.log(a1.getRoles()); // 徐凤年-C.getRoles
console.log(a2.getRoles()); // 吴素-C.getRoles
console.log(a2 instanceof B); // true
console.log(a1 instanceof B); // true
console.log(a1 instanceof C); // true
console.log(a1 instanceof C); // true
console.log(a1.b()); // 红薯-A重写b方法
console.log(a1.c()); // 自身 c
console.log(a2.b()); // 青鸟-A重写b方法
console.log(a2.c()); // 自身 c

```

#### 寄生组合实现继承

```js
/* eslint-disable no-param-reassign */
/* eslint-disable no-proto */
/**
 * @author: 张攀钦
 * @description: 基于构造函数和原型链实现继承。
 */
// 1.通过构造函数和原型链组合继承，调用父类两次构造函数，为减少内存消耗，可利用空的中间对象做桥接。
const MyExtends = function _MyExtends(Son, Parent) {
    const F = function _F() {};
    const f = new F();
    f.__proto__ = Parent.prototype;
    Son.prototype = f;
    Son.prototype.constructor = Son;
};
const C = function _C(roles = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象']) {
    this.roles = roles;
    this.c = function _c() {
        return '自身 c';
    };
};
C.prototype.getRoles = function _getRoles() {
    return `${this.roles}-C.getRoles`;
};
const B = function _B(obj, roles) {
    C.call(this, roles);
    this.obj = obj;
    this.b = function _b() {
        return '自身 b';
    };
};
MyExtends(B, C);
B.prototype.study = function _study() {
    return `${this.name}-B.study`;
};
const A = function _A(name, obj, roles) {
    B.call(this, obj, roles);
    this.name = name;
    this.play = function _play() {
        return `${this.name}-A.paly`;
    };
    this.b = function _bb() {
        return `${this.name}-A重写b方法`;
    };
};
// A.prototype = new B();=>A.prototype.__proto__=B.prototype;是什么情况呢？
MyExtends(A, B);
A.prototype.getName = function _getName() {
    return this.name;
};
const a1 = new A('红薯', { age: 18 }, ['徐凤年']);
const a2 = new A('青鸟', { age: 18 }, ['吴素']);
console.log(a1.play()); // 红薯-A.paly
console.log(a2.play()); // 青鸟-A.paly
console.log(a1.getName()); // 红薯
console.log(a2.getName()); // 青鸟
console.log(a1.study()); // 红薯-B.study
console.log(a2.study()); // 青鸟-B.study
console.log(a1.getRoles()); // 徐凤年-C.getRoles
console.log(a2.getRoles()); // 吴素-C.getRoles
console.log(a2 instanceof B); // true
console.log(a1 instanceof B); // true
console.log(a1 instanceof C); // true
console.log(a1 instanceof C); // true
console.log(a1.b()); // 红薯-A重写b方法
console.log(a1.c()); // 自身 c
console.log(a2.b()); // 青鸟-A重写b方法
console.log(a2.c()); // 自身 c

```

### 解构

```js
/**
 * @author: 张攀钦
 * @description:ES6 允许按照一定模式，从数组和对象中提取值，
 * 对变量进行赋值，这被称为解构（Destructuring）。
 */
// 1.数组结构赋值
const [a, b, c, d, e = 6] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // undefined
console.log(e); // 6
// 2.对象的结构赋值
// 林飞，不知你在大唐找到了甘柠真了吗
const { bar, foo } = { foo: '林飞', bar: '甘柠真' };
console.log(bar);
console.log(foo);
// 3.字符串结构
const [a1, b1, c1, d1] = 'abcd';
console.log(a1); // a
console.log(b1); // b
console.log(c1); // c
console.log(d1); // d
const arr = [...'abcd'];
console.log(arr); // [ 'a', 'b', 'c', 'd' ]
// 4.函数参数赋值
const func = function _func({ x, y }) {
    console.log(`x:${x}`); // x:1
    console.log(`y:${y}`); // y:2
    return x + y;
};
console.log(func({ x: 1, y: 2 })); // 3

```

### this

#### 参考资料

[嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)

```js
/**
 * @author: 张攀钦
 * 本文按照刘小夕的博客[嗨，你真的懂this吗？](https://juejin.im/post/5c96d0c751882511c832ff7b)进行验证。
 * @description: 函数 this 指向其实在执行上下调用别的执行上下文压栈的时候确认的。这个时候this 指向了调用上下文
 */
// 1.默认绑定，指向全局函数。
const f1 = function _f1() {
    if (this === global) {
        console.log('this 指向 全局对象');
    } else {
        console.log(this);
    }
};
// 全局上下文 调用函数 f1 ,所以 this 指向 global
f1();
// 2.隐式绑定
const f2 = function _f2() {
    if (this === global) {
        console.log('this 指向 全局对象');
    } else {
        console.log(this);
    }
};
const obj = { age: 10, f: f2 };
// 在 obj 的执行上下文中运行函数
obj.f(); // { age: 10, f: [Function: _f2] }
const f3 = obj.f;
// 全局执行上下文执行函数f3，this 指向 global
f3(); // this 指向 全局对象
// 3. 显示绑定 Function.prototype.call,Function.prototype.apply,Function.prototype.bind
// 4. new，初始化对象，将 this 绑定到对象上
```

#### arrow-this

```js
/**
 * @author: 张攀钦
 * @description: 箭头函数 this 的确认
 * 箭头函数中的 this  继承外层代码库中的函数
 */
global.name = 'global';
const obj = {
    name: 'obj',
    hi() {
        return () => {
            console.log(this.name);
        };
    },
    hiFunction() {
        return function _f() {
            console.log(this.name);
        };
    },
    say: () => {
        console.log(this.name);
    },
    sayFunction() {
        console.log(this.name);
    },
};
const ret = obj.hi();
ret(); // obj
const retFunction = obj.hiFunction();
retFunction(); // global
obj.say(); // undefined
const objFunction = obj.say;
objFunction(); // undefined
obj.sayFunction(); // obj
const { sayFunction } = obj;
sayFunction(); // global

```

