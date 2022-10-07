console.log("Connected");

/*
    자료형
    - 기본형 (primitive)

    - 객체
        - 배열
        - 객체 리터럴(객체)
*/


// 배열
const arr1 = ['red', 'orange', 'yellow', 1, 2, 3];
const arr2 = new Array('red', 'orange', 'yellow', 1, 2, 3);

console.log(typeof arr1);
console.log(arr2);

arr1[2] = "따란"
console.log(arr1);

arr1[4] = 100

for (i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
}

const korean = [
    ['가','나', '다'],
    ['라' ,'마', '바'],
    [], 
]

// 퀴즈) 아래 배열에서 아이스크림 출력하기
const letters = [
    ['사', '스', '자', '크'],
    ['진', '안', '리', '이'],
    ['가', '수', '림', '나'],
    ['아', '으', '차', '운'],
    ];

console.log(letters[3][0]);
console.log(letters[1][3]);
console.log(letters[0][1]);
console.log(letters[0][3]);
console.log(letters[2][2]);

// 3차원 배열
const nums = [
	[
		[1, 2, 3],
		[4, 5, 6],
	],
	[
		[7, 8, 9],
		[10, 11, 12],
	],
];

console.log(nums);
console.log(nums[1][0][1]); // 8 뽑기

// #############################################################################################
// 2. 객체 리터럴, 딕셔너리 (object)
// 배열: 순서가 있음
// 객체: 키-값 형태 
// {}를 이용해 생성
// { key1: value1, key2: value2, key3: value3, ... }

const cat = {
    name: '나비',
    age: 1,
    mew: function() {
        return '냐옹';
    },
}

console.log(cat.mew());


cat.age = 3;
console.log(cat);

cat['age'] = 5;
cat['weight'] = 5;
console.log(cat);

const dog = {
    name : 'Coco',
    isPoodle: true,
    age: 3,
    sibling:['Max', 'Lucy', 'Bella'],
};

console.log(dog.sibling[2]);

let date = new Date();