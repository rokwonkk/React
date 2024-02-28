import { useState } from 'react';

const Login = () => {

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
            <h1>로그인</h1>
            <br />
            <div id="logininput">
                <input className='form-control' value={id} onChange={loginid} placeholder='아이디를 입력해주세요' />
                <br />
                <input type='password' className='form-control' value={pw} onChange={loginpw} placeholder='비밀번호를 입력해주세요' />
            </div>
            <div id="find">
                <a href="">아이디 찾기</a> / <a href=''>비밀번호 찾기</a>
            </div>
            <div id="loginBtn">
                <button className='btn btn-primary' onClick={() => login()}>로그인</button>
                <button className='btn btn-secondary'>회원가입</button>
            </div>
            <hr />
            <div id="snsLogin">
                <button className='btn btn-secondary login'>구글 로그인</button>
                <button className='btn btn-secondary login'>네이버 로그인</button>
                <button className='btn btn-secondary login'>카카오 로그인</button>
            </div>
        </div>
    )
}

export default Login;