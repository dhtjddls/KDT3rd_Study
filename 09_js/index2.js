console.log("I can console to log!");

// 조건문
// 어떤 조건에 따라 논리 구조를 분기(나눔)
// -> 조건에 따라 서로 다른 문장을 실행

// 연산자
// 동등 연산자: ==, !=, ===, !==
console.log(1 == 1); // true
console.log(1 == 2); // false
console.log(1 != 1); // false
console.log(1 != 2); // true
console.log('1' == 1); // true
console.log('2' != 1); // true
// ==, !=: 타입(자료형)이 달라도 괜찮음! 값만 비교

console.log('---')
console.log(1 === 1); // true
console.log(1 === 2); // false
console.log(1 !== 1); // false
console.log(1 !== 2); // true
console.log('1' === 1); // false
console.log('2' !== 1); // false
// ===, !===: 타입(자료형)이랑 값을 모두 비교


// 비교 연산자
// >, <, >=, <=
console.log('---');
console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(1 >= 1); // true
console.log(1 <= 1); // true


// 논리 연산자
// &&: and (둘 다 참이어야 참)
// ||: or (둘 중 하나라도 참이면 참)
// !: not (참 -> 거짓, 거짓 -> 참)

console.log('---');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false

console.log('---');
console.log((2 > 1) && (-2 < 1)); // true && true = true
console.log(!(2 > 1)); // !true = false
console.log(((2 > 1) && (-2 < 1)) || (5 > 2));
// (true && true) || true = true || true = true


// ===============================================
if (5 > 3) {
	console.log('bigger!');
}

// 함수 안에서 조건문을 사용한다면?
function isBig() {
	if (5 > 3) {
		return 'bigger';
	}
}
console.log(isBig()); // console.log('bigger');

// if-else
if (5 < 3) {
	console.log('bigger');
} else {
	console.log('smaller..');
}

// if - else if
// else if 키워드: 여러 개 가능
if (5 < 3) {
	console.log('smaller...')	
} else if (5 > 3) {
	console.log('bigger!')
} else if (5 == 3) {
	console.log('same')
}

if (5 < 3) {
	console.log('smaller...')	
} else if (5 > 3) {
	console.log('bigger!')
} else {
	console.log('same')
}


// 퀴즈
let score = 80;
// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 60미만 F

if (score >= 90) {
	console.log('A')
} else if (score >= 80) {
	console.log('B')
} else if (score >= 70) {
	console.log('C')
} else if (score >= 60) {
	console.log('D')
} else {
	console.log('F')
}


// 조건문 중첩
// 가입한 아이디, 비번
let usrId = 'user'; 
let usrPw = '1234';
// 로그인할 때 입력한 아이디, 비번
let inputId = 'user';
let inputPw = '1234';

// 아이디가 일치
// 		ㄴ 비밀번호 일치 -> 인사
// 		ㄴ 비밀번호 불일치 -> 불일치
// 아이디가 불일치 -> 아이디 없음


if (usrId == inputId) {
	// 조건문 중첩
	if (usrPw == inputPw) {
		console.log(`${usrId}님 하이`);
	} else {
		console.log('비밀번호 틀림')
	}

} else {
	console.log('아이디 없음');
}

let n = 6
if ((n % 2) === 0){
    console.log("짝수");
}
else {
    console.log("홀수");
}

// function isEven(num){
//     if ((num % 2) === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

let isEven = (x) => {
    if ((x % 2) === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(7));
console.log(isEven(8));

function isValidate2(pw1, pw2) {
    if (5 <= pw1.length && pw1.length <= 8) {
        if (pw1 === pw2) {
            return "비밀번호 일치~"
        }
        else {
            return "비밀번호 불일치.."
        }
    }
    else {
        return '비밀번호는 5자리 이상 8자리 이하!!!'
    }
}

console.log(isValidate2('1234', '1234')); 
// '비밀번호는 5~8자리만 가능!!!'
console.log(isValidate2('123456789', '123456789'));
 // '비밀번호는 5~8자리만 가능!!!'
console.log(isValidate2('12345', '12345')); 
// '비밀번호 일치~'
console.log(isValidate2('12345', '12345!!')); 
// '비밀번호 불일치..'