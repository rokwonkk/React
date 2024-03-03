import react, { useEffect, useState } from 'react';

/**
 *  useeffect : component가 rendering 될 때 특정 작업을 실행,
 *                (부분) 화면 갱신, 특정 값(변수)이 변경 시
 *                axios(ajax) front-end -> back-end
 * 
 *                무한루프 될 가능성이 있어서 조심해서 사용해야함.
 *                redirection (무한루프)
 */

const App = () => {

  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const counter = () => {
    setCount(count + 1);
  }

  //////////////////////////////////////////////
  // 1. rendering 이 될 때마다 useeffect가 실행
  // useEffect(function(){
  //   console.log("useEffect 실행 : " + count);
  // })
  // useEffect(() => {
  //   console.log("useEffect 실행 : " + count);
  // });
  /////////////////////////////////////////////////

  //2. 처음 rendering 이 될 때 useeffect가 1번 실행
  // useEffect(() => {
  //   console.log("useEffect 처음 한번 실행 : " + count);
  // }, []);

  const numberCnt = () => {
    setNumber(number + 1);
  }

  // 3. useEffect 특정 값(변수) 변경이 되었을 때만 실행
  useEffect(() => { // <- update reflash
    console.log("useEffect 넘버 값 변경 -> 실행 " + number);
  }, 
  [number]); //다중으로 할땐 , 구분해서 적용하면됨

  return (
    <div>
      <p>counter : {count}</p>
      <button onClick={() => counter()}>카운터</button>

      <br />

      <p>number : {number}</p>
      <button onClick={() => numberCnt()}>넘버</button>
    </div>
  );
}

export default App;
