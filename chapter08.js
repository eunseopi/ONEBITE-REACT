// 1. null 병합 연산자
// -> 존재하는 값을 추러내는 기능
// -> null, undefined 가 아닌 값을 찾아내는 연산자

let var1;
let var2= 10;
let var3 = 20;

let var4 = var1 ?? var2; // var1은 undefined 기 때문에 var2 값이 들어감.
let var5 = var1 ?? var3; // var1은 undefined 기 때문에 var3 값이 들어감.
let var6 = var2 ?? var3; // 2개 다 값이 있으면 var2 값이 출력.

let userName ="홍길동";
let userNickName = "winterLoad";

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

// 요구사항 : 변수 res 에 var8의 값이 짝수 -> "짝수", 홀수 -> "홀수"
let res = var8 % 2 === 0 ? "짝수" : "홀수";

