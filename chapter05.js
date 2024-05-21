// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;
//  JS 는 수학연산에서 좀 더 안전하다.

// 2. String Type
let myName = "홍길동";
let myLocation = "목동";
let introduce = myName + myLocation;

// 탬플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null; // => 직접 명시적으로 변수에 할당을 해줘야 하는 값

// 5. Undefined Type
let none; // => 초기화히지 못했거나 존재하지 않는 값을 불러오려고 할 때 발생하는 값.