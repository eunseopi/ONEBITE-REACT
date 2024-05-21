// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {} // 객체 리터럴 방법 ( 대부분 사용 )

// 2. 객체 프로퍼티 (객체 속성)
let person = {
    name : "신은섭",
    age : 25,
    hobby : "테니스",
    job: "FE Developer",
    extra : {},
    10 : 20,
    "like cat" : true, // 띄어쓰기가 포함된 문자열 키는 "" 를 넣어줘야됨.
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name; // 없는 값을 접근하면 undefined 값 반환.

let age = person["age"];

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1);
console.log(result2);