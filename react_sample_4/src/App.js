import './App.css';

function App() {

  /* js 영역 */
  /* 범위 주석 (shift + alt + a) */
  /* 한줄 주석 shift + / */

  const name = "홍길동";
  //name = '성춘향' //<- 안된다.

  //document.getElementsByTagName('h3')[0].innerHTML = name;

  //변수
  let address = "부산시 수영구";

  // 요소 (element)
  //let element = <h2>24세</h2>;
  let element = <h2>{address}</h2>;

  //일반 함수
  function MyFunc1(a, b) {
    return a * b;
  }

  //일반 화살표 함수
  const MyFunc2 = (a, b) => {
    return a * b;
  }

  //일반 화살표 함수 한줄밖에 없을땐 괄호와 return 생략가능
  const MyFunc3 = (a, b) => a * b;

  // component
  function Comp() {
    let age = 24;
    return (
      <>
        <h2>Hello</h2>
        <h3>React</h3>
        <h4>{age}</h4>
        <h5>{address}</h5>
      </>
    )
  }

  return (
    <div>
      {/* web 영역 */}
      <h3>{name} {address}</h3>

      {element}
      <br />

      {/* <h1 style="background-color:#ff0000; color:#ffffff">I can do it</h1> */}
      <h1 style={{ backgroundColor: "#ff0000", color: '#ffffff' }}>I can do it</h1>

      <h2 className="App">나는 반드시 성공한다</h2>

      {MyFunc1(3, 4)} <br />
      {MyFunc2(5, 6)} <br/>
      {MyFunc3(10, 20)}

       {/* component였을땐 함수로 호출 하는 것 보다 테그로 보통 사용한다. */}
      {Comp()}
      <Comp /> {/** << 이거를 보통 사용함 */}

      <World/>

      <World name = {name} age="22"/>
    </div>
  );
}


const World = (props) => {
  return(
    <div>
      <h1>Hello React World {props.name} {props.age}</h1>
    </div>
  )
}

export default App; 