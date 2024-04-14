// 1. 함수 표현식

function funcA() {
    // console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
    // console.log("func8");
} // -> 호이스팅이 되지 않음.

varB();


// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC(10));