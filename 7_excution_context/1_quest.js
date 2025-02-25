const message = 'Hello, JavaScript!';

const showMessage = () => {
  console.log(message); // A
  let message = 'Hello, ES6!';
  console.log(message); // B
};

showMessage();

// A는 참조에러가 발생
// 코드 실행시 전역 실행 컨텍스트가 생성되어 메세지 값이 할당 되지만, showmessage() 함수가 실행되면 새로운 실행 컨텍스트가 생성되기때문에 함수안에서 밑에 선언된 message는 TDZ에 존재하여 참조에러 발생

// B는 정상출력
// showMessage()가 실행되고 그 실행 컨텍스안에서 message가 선언되고 초기화 되었기 때문에 정상출력된다.
