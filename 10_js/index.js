// switch 문
// - 하나 이상의 case문으로 구성
// - default문이 있지만 필수는 아님
// - break 키워드: 블록{}을 빠져나갈 때 사용하는 키워드

/*
switch(x){
    case 값: if(x === 값)
        case일때 실행할 문장
        break - 실행 후 종료
    case 값2: if(x === 값2)
        이하 같음
        break
    default: same with 'else'
        break
    }

*/

let a = 2 + 2;

switch(a) {
    case 3:
        console.log('비교하려는 값보다 작습니다.');
        break;
    case 4:
        console.log('비교하려는 값과 일치합니다.');
        break;    
    case 5:
        console.log('비교하려는 값보다 큽니다.');
        break;
    default:
        console.log('어떤 값인지 파악 안됨');
        break;
    }


    // switch to if 문
    if (a === 3) {
        console.log('비교하려는 값보다 작습니다.');
    }
    else if (a === 4) {
        console.log('비교하려는 값과 일치합니다.');
    }
    else if (a === 5) {
        console.log('비교하려는 값보다 큽니다.');
    }
    else{
        console.log('어떤 값인지 파악 안됨');
    }


    var grade = 'A';
    switch(grade) {
        case 'A':
            console.log('학점 A');
            break;
        case 'B':
            console.log('학점 B');
            break;
        case 'C':
            console.log('학점 C');
            break;
        case 'D':
            console.log('학점 D');
            break;
        case 'F':
            console.log('학점 F');
            break;
        default:
            console.log("오류 발생");
            break;
    }

// 여러개의 case 문을 묶을 수 있음
a = 6;
switch(a) {
    case 1:
    case 2:
    case 3:
        console.log('비교하려는 값보다 작습니다.');
        break;
    case 4:
        console.log('비교하려는 값과 일치합니다.');
        break;    
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        console.log('비교하려는 값보다 큽니다.');
        break;
    default:
        console.log('어떤 값인지 파악 안됨');
        break;
    }

// 삼항 연산자
// 조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)

var num = 3;
num % 2 === 0 ? (console.log("짝")) : (console.log('홀'));
console.log( 3>1 ?  'bigger' : 'smaller');

let hour = 15;
console.log(hour > 11 ? '오후' : '오전'); 
