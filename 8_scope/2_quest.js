if (true) {
  let isRaining = true;
  console.log(isRaining);
}

console.log(isRaining); // ReferenceError

// let은 블록 스코프를 따르므로, 중괄호로 감싼 내부만 변수접근이 가능하기 때문이다.
// 이럴땐 isRaining을 전역변수로 선언하면 해결 가능하다.
