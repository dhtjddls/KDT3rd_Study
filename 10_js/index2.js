for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i === 5){
        break
    }
}
let i = 1
while (i < 10) {
    console.log(i);
    i += 1;
    if (i === 6) {
        break
    }
}

for (let i = 5; i > 0; i--){
    console.log(i);
}

for (let i = 2; i <= 10; i += 2){
        console.log(i);
}
let sum = 0;
for (let i =1; i <= 10; i++){
    sum += i;
}
console.log(`1~10까지 모두 더한 값: ${sum}`);

sum = 0;
for (let i = 2; i <= 10; i += 2){
    sum += i;
}
console.log(sum);

sum = 0;
for (let i = 1; i <= 10; i += 2){
    sum += i;
}
console.log(sum);

// #############################################################################################
// while 문
/*

while (조건식) {
	// 반복할 코드
}
=> 조건식 만족; 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
	- if문; 조건식 true; 블럭 내부 코드 "1번" 실행
	- while문; 조건식이 true; "계속" 반복 
=> 조건식 flase; 블럭을 빠져나옴 (= 반복 종료)

*/

var n = 1;
while(n <= 5){
    console.log(n);
    n++;
}


n = 9;
while(n >= 4){
    console.log(n);
    n--;
}

n = 2;
while(n <= 10){
    console.log(n);
    n += 2;
}

n = 9;
while(n > 0){
    console.log(n);
    n -= 2;
}


for (let i = 1; i <= 10; i += 2) {
    console.log(' '.repeat((10-i)/2) + '*'.repeat(i));
}
console.log(' '.repeat(10 / 2 -1) + '*');
console.log(' '.repeat(10 / 2 -1) + '*');

// ======================
// 무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
// 이를 활용해 의도적으로 무한루프를 만들어서 
// 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함
/*
while (true) {
	...
	// 탈출 조건 만들기
}
*/
// 조건문 등을 이용해 탈출 조건을 만들어 주고
// break 키워드 -> 블록 ({})을 빠져나옴


var count = 1;
while (true){
    if (confirm("계속 진행할까요?") === true){
        alert(`${count}번째 반복입니다.`);
        count += 1;
    }
    else {
        break;
    }
}
console.log("무한 루프 탈출!");