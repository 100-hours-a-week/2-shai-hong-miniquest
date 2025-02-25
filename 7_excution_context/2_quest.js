const color = 'blue';

const firstLevel = () => {
  let color = 'red';

  const secondLevel = () => {
    let color = 'green';
    console.log(color); // (1) green  secondLevel() 내부에서 color = 'green'이 선언되어 있으므로, 가장 가까운 스코프에서 변수를 찾음.
  };

  secondLevel();
  console.log(color); // (2) red
};

firstLevel();
console.log(color); // (3) blue

// (1) secondLevel() 내부에서 color = 'green'이 선언되어 있기때문
// (2) firstLevel() 내부에서 color = 'red'가 선언되어 있기때문
// (3) 전역 컨텍스트의 전역변수 color값 출력
