// 1. 변수
let age; // 변수 선언, 초기화한다.

age = 30;

// 2. 상수
const birth = "1997.01.07"; // const 는 초기화를 반드시 해야함.

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
// let 2name; 문제 발생
// -> 중간이나 끝에 사용. or let _2name / $2name

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;

