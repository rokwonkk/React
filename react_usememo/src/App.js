import { useState, useMemo } from 'react'
/**
 *  useMemo : Update가 필요 없는 component까지 rerendering의 경우
 *            이를 방지하기 위해서 사용하는 것이 useMemo이다 
 */

const square = (paramsA, paramsB) => {
  console.log("square 실행");
  return paramsA * paramsB;
}

const App = () => {

  const [countAAA, setCountAAA] = useState(0);
  const [countBBB, setCountBBB] = useState(0);

  const countResultAAA = () => {
    console.log("countResultAAA 실행");
    setCountAAA(countAAA + 1);
  }

  const countResultBBB = () => {
    console.log("countResultBBB 실행");
    setCountBBB(countBBB + 1);
  }

  const sum = square(countAAA, countBBB);

  //const sum = useMemo(() => square(countBBB), [countBBB])

  return (
    <div>
      <p>
        계산결과 A : {countAAA}&nbsp;
        <button onClick={ countResultAAA }>A + 1</button>
      </p>
      <p>
        계산결과 B : {countBBB}&nbsp;
        <button onClick={ countResultBBB }>B + 1</button>
      </p>
      <p>{countAAA} x {countBBB} = {sum}</p>
    </div>
  );
}

export default App;
