console.log("I can log to console!");

// 속성
// length: 문자열 길이
var song = "Strawberry Mo on";
console.log(song.replace(" ",""));

// toUpperCase()
// toLowerCase()
// trim()
// a.replace(" ", ''); => 공백을 모두 제거!

var msg = 'Happy BirthDay~';
let userId = "        user123    ";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.trim());

// 인덱싱 (indexing);
// : string에서 한 글자를 선택
// 변수명[위치값]
console.log(song[0] + song[12] + song[14] + song[14] + song[9]);


// indexOf(x): string에서 x가 나타내는 index값을 반환
        // 없다면 -1 반환
// slice() 슬라이싱 하고싶으면 파이써은 잊고 이걸 앞에 붙여주자
// replace(교체될 값, 교체할 값) 앞에 있는거 하나만 해줌
// replaceAll(교체될 값, 교체할 값) 발견한 값 모두 교체

var fruit = 'applemango';
var msg = "Wow~ It is so amazing~~~!!";
console.log(fruit.substring(4, -3));
console.log(fruit.indexOf('p'));
console.log(fruit.indexOf('mange'));

console.log(fruit.slice(5));
console.log(fruit.slice(-3));
console.log(msg.replace('Wow', "Yay"));

let date = '2022.9.26';
console.log(date.replaceAll(".","-"));
console.log(date.replace("20","").replaceAll(".","-"));

if (7 == '7'){
    console.log('samsam');
}
else{
    console.log('nosamsam');
}

if (7 === '7'){
    console.log('samsam');
}
else{
    console.log('nosamsam');
}