console.log('connected');

function helloWorld() {
    console.log("helloworld!");
}
helloWorld();

const helloWorld2 = function () {
    console.log('hellowworld!22')
}
helloWorld2();

function helloWorld3() {
    return "Helloworld!!3";
}
console.log(helloWorld3());

const helloWorld4 = function () {
    console.log('hellowworld!24');
}
helloWorld4();

function hello1(text) {
    return text;
}
console.log(hello1("안녕!"));

function hello2(text, name) {
    let result = `${text} 나는 ${name}이야`;
    return result
}
console.log(hello2("안녕!", 'Steven'));

function hello3(text, name) {
    let result = `${text} 나는 ${name}`;
    console.log(result);
}

hello3("안녕", "Ellie");


const hello4 = function(text, name) {
    let result = `${text} 나는 ${name}이야`;
    return result
}
console.log(hello4("안녕!", 'Sean'));

const hello5 = function(text, name) {
    let result = `${text} 나는 ${name}`;
    console.log(result);
}
hello3("안녕", "Lilly");

const sayHi = (name) => console.log(`Hi ${name}`);

sayHi('Sean');

function countNum() {
    globalThis.count = 7;
    console.log('count 값: ', count);
}

countNum();
console.log(count);