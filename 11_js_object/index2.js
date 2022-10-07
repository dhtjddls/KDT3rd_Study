console.log('!');

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math, ....

// ================================================================================================
// Date 객체
// 시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

console.log(new Date(0));

console.log(new Date(2022, 8, 30, 10, 53));

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getDay());

let day = now.getDay();
// switch
switch (day) {
	case 1:
	case 2:
	case 3:
	case 4:
	case 5:
		console.log('평일');
		break;
	case 0:
	case 6:
		console.log('주말');
		break;
	default:
		console.log('알수 없음');
		break;
}

if (day === 0 || day === 6) {
    console.log("주말");
}
else {
    console.log('평일 ㅠㅠ');
}
numArr = [100, 200, 30, 8]

console.log(Math.min(...numArr));


// round = 반올림
// floor = 내림
// ceil = 올림

console.log(...numArr);

console.log(Math.floor((Math.random() * 10)));

console.log(Math.floor((Math.random() * 10)) + 1);
console.log(Math.floor((Math.random() * 100)) + 1);
console.log(Math.floor((Math.random() * 3)) + 20);


