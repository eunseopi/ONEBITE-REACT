// 함수선언

// function greeting () {
//     console.log("안녕하세요");
// }

// 함수

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(20, 20);
console.log(area2);

// 호이스팅
// -> 끌어올리다라는 뜻
function getArea(width, height)  { // 매개 변수
    function another() { // 중첩 함수
        console.log("another");
    }

    another();
    let area = width * height;

    return area;
}
