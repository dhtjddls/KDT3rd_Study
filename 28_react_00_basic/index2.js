// 클래스
// 객체 생성 공장
class Cat {
    // 생성자
    constructor(name, age) {
        // 속성
        this.name = name;
        this.age = age;
    }

    mew() {
        return('mew~ ao~');
    }

    eat() {
        return(`${this.name}한테 가서 밥줘.`);
    }
}
let holong = new Cat('호롱이', 7);
console.log(holong.name);
console.log(holong.mew());
console.log(holong.eat());

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    study() {
        return '공부 시작'
    }
}

minji = new Person('minji', 'female')
minku = new Person('minku', 'male')

console.log(minji.study());
