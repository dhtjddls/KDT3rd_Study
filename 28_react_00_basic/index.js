let lists = ['apple', 'grape'];
[items1, items2, items3 = 'peach'] = lists
console.log("items1 : ", items1)
console.log("items2 : ", items2)
console.log("items3 : ", items3)
console.log([items1, items2, items3])


let x = 1, y = 2;
[x ,y] = [y, x]
console.log(x, y)

const obj = {
    key1 : 'one',
    key2 : 'two'
}
const {key1, newkey1, key2, key3 = 'three'} = obj;
console.log(key1);
console.log(newkey1);
console.log(key3);

const tv = {
    name: 'samsung tv',
    price: 300,
    size: '76inch',
    store: 'samsung',
}

const {name, price, size, store, hope = 'yes'} = tv

// 객체 X 변수에 할당하는 방법이라고 생각하며 좋다!
// name = tv.name 이걸 바로 해주는 느낌


const defaultInfo = {
    price : '2000',
    store : 'ceo'
}
const chocoIcecream = {
    ...defaultInfo,
    flavor : 'choco',
    
}

const strawberryIcecream = {
    ...defaultInfo,
    flavor : 'strawberry',
    
}

const mangoIcecream = {
    ...defaultInfo,
    flavor : 'mango',
    
}

console.log(strawberryIcecream);

const smun1 = ['one', 'two', 'three']
const smun2 = ['four', 'five', 'six']

const mun = [...smun1, ...smun2]
console.log(mun)