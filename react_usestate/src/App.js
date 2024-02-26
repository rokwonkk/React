import react, { useState } from 'react';
import LogIn from "./pages/LogIn";
import { Routes, Route, BrowserRouter } from "react-router-dom";

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
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const loginid = (e) => {
    setId(e.target.value);
  }

  const loginpw = (e) => {
    setPw(e.target.value);
  }

  const login = () => {
    alert("환영합니다 " + id + " 님");
    // alert("아이디 : " + id);
    // alert("비번 : " + pw);

  }

  return (
    <div id="loginform">
    <BrowserRouter>
      <Routes>
        {/* 웹 서비스 소개 페이지 */}
        {/* <Route path="/" element={<FirstPage />} /> */}
        {/* <SignIn /> */}
        {/* <Route path="/signin" element={<SignIn />} /> */}
        {/* <LogIn /> */}
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter> 

      <h1>로그인</h1>
      <br/>
      <div id="logininput">
      <input className='form-control' value={id} onChange={loginid} placeholder='아이디를 입력해주세요'/>
      <br/>
      <input type='password' className='form-control' value={pw} onChange={loginpw} placeholder='비밀번호를 입력해주세요'/>
      </div>
      <div id="find">
      <a href="">아이디 찾기</a> / <a href=''>비밀번호 찾기</a>
      </div>
      <div id="loginBtn">
      <button className='btn btn-primary' onClick={() => login()}>로그인</button>
      <button className='btn btn-secondary'>회원가입</button>
      </div>
      <hr/>
      <div id="snsLogin">
      <button className='btn btn-secondary'>구글 로그인</button>
      <button className='btn btn-secondary'>네이버 로그인</button>
      <button className='btn btn-secondary'>카카오 로그인</button>
      </div>
    </div>
  )
}

export default App;