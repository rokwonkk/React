
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Login from "./pages/Login";

// const App = () => {

//   //useState == getter, setter 변수 << 함수 내에서만 접근이 가능
//   //
//   const [name, setName] = useState("초기값");
//   const [age, setAge] = useState(24);
//   const [phone, setPhonee] = useState([]);

//   // setName('변경값'); //error
//   // setName = '변경값'; //error

//   const btnclick = () => {
//     setName('버튼클릭');
//   }

//   return (
//     <div>
//       <button onClick={btnclick}>{name}</button>
//       <button onClick={() => btnclick() }>{name}</button>
//     </div>
//   );
// }

// const App = () => {

/*************************************************************
 *  javascript
 * **********************************************************
const clickFunc = () => {
  let name = document.getElementById('name').value;
  alert(name);
}

return (
  <div>
    <input id="name"></input>
    <button onClick={ () => clickFunc() }> 버튼 </button>
  </div>
);
**************************************************************/

/**
 *  react
 */
//   const [name, setName] = useState("");

//   const handleChange = (e) => {
//     setName(e.target.value);
//   }

//   const namePrint = () => {
//     alert(name);
//   }

//   return(
//     <div>
//       <h1>i love { name }</h1>

//       <input value={name} onChange={handleChange} />

//       <button onClick={ () => namePrint() }>이름</button>
//     </div>
//   )
// }
/*
/**
 *  셀렉트 버튼
 */
/*
const App = () => {

  const [fruit, setFruit] = useState('사과'); 

    const handleChange = (e) => {
    setFruit(e.target.value);
  }

  const selectFruit = () => {
    alert(fruit);
  }
  
  return(
    <div>
        <select value={fruit} onChange={handleChange}>
          <option value="사과">apple</option>
          <option value="배">pear</option>
          <option value="포도">grape</option>
        </select>

        <button onClick={() => selectFruit()}>선택</button>
    </div>
  );
}
*/

/**
 *  라디오버튼
 */

// const App = () => {

// const [color, setColor] = useState('blue');

//     const colorChange = (c) => {
//       setColor(c.target.value);
//     }

//   return (
//     <div>
//       <input type='radio' value="red" onChange={colorChange} checked={color === "red"} /> 빨강
//       <input type='radio' value="green" onChange={colorChange} checked={color ===
//          "green"} /> 초록
//       <input type='radio' value="blue" onChange={colorChange} checked={color === "blue"} /> 파랑

//       <button onClick={() => { alert(color); } }>선택</button>
//     </div>
//   )
// }

/**
 *  로그인
 */

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <h1> 메인 화 면 입 니 당 </h1>
        <span>
            <Link to="/login">로그인</Link>
        </span>
        <Routes>
          {/* 웹 서비스 소개 페이지 */}
          {/* <Route path="/" element={<FirstPage />} /> */}
          {/* <SignIn /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <LogIn /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;