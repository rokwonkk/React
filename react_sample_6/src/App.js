import react from 'react';

const App = () => {

  let input_value = ""

  const nextbutton = () => {
    console.log('next click');
  };

  const nextbutton2 = () => {
    console.log('next2 click');
  };

  // const inputVal = (e) => {
  //   //return console.log( e.target.value );
  //   input_value = e.target.value
  //   return input_value;
  // }

  function inputVal(e) {
    console.log(e.target.value);
    input_value = e.target.value;
  }

  return (
    <div>
      <button onClick={() => { console.log('온클릭') }}>버튼</button>

      <button onClick={nextbutton}>next</button>

      <button onClick={()=>nextbutton2()}>next2</button>

      {/* <button onSubmit={} onMouseOver={}></button> */}
      <br /><br />

      <input size={20} onChange={ (e) => { console.log(e.target.value) }}></input>
      {/* <input size={20} onChange={ inputVal }></input> */}


      <br /><br />

      <p>{input_value}</p>
    </div>
  );
}

/**
 *  Hook(낚시줄 == 연결)
 * 
 *  기본
 *  useState        : 동적 상태 관리. => 변수(set, get)
 *  useEffect       : side effect 수행 => 뷰가 갱신, 뷰 초기화
 *  useContext      : (전역) 변수 접근
 * 
 *  추가
 *  useReducer      : 상태를 분리, 관리
 *  useCallback     : 특정 함수 재사용
 *  useMemo         : 연산한 값을 재사용
 *  useRef          : 특정 필드의 값을 취득
 *  useLayoutEffect : 
 *  useDebugValue   :
 * 
 */

export default App;
