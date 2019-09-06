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
