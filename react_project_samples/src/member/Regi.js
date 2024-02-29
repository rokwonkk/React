import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import './Regi.css';

const Regi = () => {

    let navigate = useNavigate();

    const [userid, setUserid] = useState("");
    const [ynId, setYnid] = useState("");

    const [successId, setSuccessId] = useState("");

    const [pw, setPw] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const id_chk = async () => {

        if (userid === '') {
            alert('아이디를 입력해 주십시오');
            return;
        }

        await axios
            .post("http://localhost:9922/idcheck",
                null,
                {
                    params: {
                        "id": userid
                    }
                })
            .then((res) => {
                console.log(res.data);
                setYnid(res.data);

                if (res.data === 'yes') {
                    setSuccessId(userid);
                } else {
                    setSuccessId("");
                }
            })
            .catch((e) => {
                alert('error');
            })
    }

    const checkedId = () => {
        if (ynId === "yes") {
            return <p style={{ fontSize: 12, color: "blue" }}> 사용할 수 있는 아이디 입니다.</p>
        } else if (ynId === 'no') {
            return <p style={{ fontSize: 12, color: "red" }}> 사용할 수 없는 아이디 입니다.</p>
        } else {
            return <p></p>
        }
    }

    const addMember = async () => {

        if (successId === '') {
            alert('id check를 해주십시오.');
            return;
        }

        await axios
            .post("http://localhost:9922/addmember",
                null,
                {
                    params: {
                        "id": successId,
                        "pw": pw,
                        "name": name,
                        "email": email
                    }
                })
            .then((res) => {
                console.log(res.data);
                setYnid(res.data);

                if (res.data === 'addsuccess') {
                    alert('회원가입에 성공했습니다.');
                    navigate("/login");
                } else {
                    alert("회원가입에 실패했습니다.");
                }
            })
            .catch((e) => {
                alert('error');
            })
    }
    return (
        <div className="center">
            <h1 className="title">회원가입</h1>
            <table className="table">
                <tbody className="tbody">
                    <tr>
                        <td>
                            <div style={{ display: "flex" }}>
                                <input className="form-control" value={userid} onChange={(e) => setUserid(e.target.value)} placeholder="아이디 입력" />
                                <input className="btn btn-primary" type="button" onClick={() => id_chk()} value="id확인" />
                            </div>
                            {checkedId()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" value={successId} size="20" placeholder="인증된 아이디" readOnly />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" type="password" value={pw} onChange={(e) => setPw(e.target.value)} id="pw" placeholder="패스워드 입력" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="이름 입력" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일 입력" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input className="btn btn-primary regi" type="button" onClick={() => addMember()} value="회원가입" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Regi;