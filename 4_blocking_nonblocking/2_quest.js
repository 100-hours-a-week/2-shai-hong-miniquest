console.log('Start');
setTimeout(() => {
  console.log('Async Operation Complete');
}, '1000');
console.log('End');

// setTimeout함수는 비동기코드이고 나머지는 동기코드이기때문에 나머지 코드가 먼저 실행된 후, 1초후에 실행됩니다.
