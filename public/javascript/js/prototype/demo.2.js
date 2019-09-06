const MyExtends = function _MyExtends(Son, Parent) {
    const F = function _F() { };
    const f = new F();
    f.__proto__ = Parent.prototype;
    Son.prototype = f;
    Son.prototype.constructor = Son;
};


const C = function _C(roles = ['徐晓', '吴素', '徐脂虎', '徐渭熊', '徐凤年', '徐龙象']) {
    this.roles = roles;
    this.c = function _c() {
        return '自身 c';
    };
};
C.prototype.getRoles = function _getRoles() {
    return `${this.roles}-C.getRoles`;
};

const B = function _B(name, roles) {
    C.call(this, roles);
    this.name = name;
    this.b = function _b() {
        return '自身 b';
    };
};
B.prototype.study = function _study() {
    return `${this.name}-B.study`;
};
MyExtends(B, C);

const b2 = new B('陈平安', ['文圣弟子']);
const b1 = new B('宁姚', ['平安的老婆']);
console.log(b2.roles);// ['文圣弟子']
console.log(b1.roles);// ['平安的老婆']
