for (let idx=1; idx <= 10; idx++) {
    if(idx % 2 === 0){
        continue;
        // 조건식이 참이 되면 밑에 코드 실행 x
        // 다시 반복문 실행
    }

    console.log(idx);

    if (idx >= 5){
        break;
    }
}