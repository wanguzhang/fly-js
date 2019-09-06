class Foo {
    constructor(name) {
        this.name = name;
    }

    getAge () {
        return this.age;
    }


    static age = 1;

    static getAge () {
        return this.age;
    }
}

class Son extends {
    constructor (age, name) {
        super(name);
        this.age;
    }
}
console.log(Foo.getAge());
