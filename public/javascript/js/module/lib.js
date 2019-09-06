import module1 from './module-1.js';

export { default as module2 } from './module-2.js';
export { default as module3 } from './module-3.js';
const test = function _test() {
    console.log(1111);
};
export default { test, module1 };
