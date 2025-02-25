// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 무엇이 출력될까요? => ReferenceError: Cannot access 'messageLet' before initialization
let messageLet = 'Hello with let!';

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // 무엇이 출력될까요? => ReferenceError: Cannot access 'messageConst' before initialization
const messageConst = 'Hello with const!';

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // 무엇이 출력될까요? => ReferenceError: Cannot access 'greet' before initialization
const greet = () => 'Hello, Arrow Function!';

// 위 결과 값들이 모두 참조에러가 나는 이유는
// let과 const, 화살표함수는 선언단계와 초기화 단계가 분리돼 진행되기 때문이다.
// 즉 자바스크립트 엔진에 의해 호이스팅이 일어나 변수가 선언은 되지만, TDZ에 있기때문에 초기화되기전에 접근하면 참조에러가 발생한다.
