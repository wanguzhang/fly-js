/* eslint-disable new-cap */
/* eslint-disable no-multi-assign */
const jQuery = function _jQuery(name = 'jQuery') {
    return new jQuery.fn.init(name);
};
jQuery.getAge = function _getAge() {
    console.log('getAge');
};
jQuery.prototype.getName = function _getName() {
    return this.name;
};
jQuery.fn = jQuery.prototype;

const init = jQuery.fn.init = function _init(name) {
    this.name = name;
};

init.prototype = jQuery.fn;
const jq1 = new jQuery('jq1-创建');
const jq2 = jQuery('jq2-创建');
console.log(jq1.getName());
console.log(jq2.getName());
