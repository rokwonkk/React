import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import './Login.css';

//리액트 쿠키사용
import { useCookies } from 'react-cookie'; // npm i react-cookie

const Login = () => {

    let navigete = useNavigate();

    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const [cookies, setCookies] = useCookies("");   //쿠키 저장용
    const [saveId, setSaveId] = useState(false);    //체크박스용

    //쿠키의 값이 바뀔때 실행
    useEffect(() => {

        //쿠키에서 id를 산출
        let user_id = cookies.user_id;
        if (user_id !== undefined && user_id !== "") {    //저장 id가 있음
            setId(user_id);
            setSaveId(true);
        } else {
            setId("");
            setSaveId(false);
        }

    }, [cookies]);

    // id를 cookie에 저장 및 체크박스 핸들러
    const checkHandler = () => {
        //alert('checkHandler');
        //체크박스 토글
        setSaveId(!saveId);

        if (id !== "" && !saveId === true) {
            setCookies("user_id", id);
        } else {
            setCookies("user_id", "");
        }
    }

    const loginAf = () => {
        axios
            .post("http://localhost:9922/login",
                null,
                {
                    params: {
                        "id" : id,
                        "pw" : pw
                    }
                })
                .then((res)=>{
                    console.log(res.data.id);

                    if(res.data.id !== undefined && res.data.id !== ""){
                        alert(res.data.id + "님 환영합니다.");
                        
                        //여기서 JWT token을 받는다.
    
                        localStorage.setItem("login", JSON.stringify(res.data));
                        
                        //(전 페이지로) 이동
                        let before = localStorage.getItem("before");
                        navigete(before);
                    } else {
                        alert("아이디나 패스워드를 확인해주십시오.");
                    }
                })
                .catch((e)=>{
                    alert("error");
                })
    }

    return (
        // <div className="login">
        //     <table className="table">
        //         <tbody>
        //             <tr>
        //                 <th>아이디</th>
        //                 <td>
        //                     <input value={id} className="form-control"
        //                         onChange={(e) => setId(e.target.value)} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>패스워드</th>
        //                 <td>
        //                     <input type="password" value={pw} className="form-control"
        //                         onChange={(e) => setPw(e.target.value)} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <td colSpan="2">
        //                     <input type="checkbox"
        //                         checked={saveId}
        //                         onChange={checkHandler} />&nbsp;&nbsp; id 저장<br />
        //                     <br />
        //                     <span><input type="button" className="btn btn-primary" value='login'
        //                         onClick={loginAf} /></span>&nbsp;&nbsp;&nbsp;&nbsp;
        //                     <span><Link to="/regi">회원가입</Link></span>
        //                 </td>
        //             </tr>
        //         </tbody>
        //     </table>
        // </div>
        <div id="loginform">
            <h1>로그인</h1>
            <br />
            <div id="logininput">
                <input className='form-control' value={id} onChange={(e)=>setId(e.target.value)} placeholder='아이디를 입력해주세요' />
                <br />
                <input type='password' className='form-control' value={pw} onChange={(e)=>setPw(e.target.value)} placeholder='비밀번호를 입력해주세요' />
            </div>
            <div id="find">
                <span><input type="checkbox" checked={saveId} onChange={checkHandler} />&nbsp; id 저장</span>
                <span><Link to="/">아이디 찾기</Link> / <Link to="/">비밀번호 찾기</Link></span>
            </div>
            <div id="loginBtn">
                <button className='btn btn-primary login' onClick={() => loginAf()}>로그인</button>
                <button className='btn btn-secondary login' onClick={ () => navigete("/regi") }>회원가입</button>
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