import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

import './Bbs.css';

const Bbsupdate = () => {

    let params = useParams();

    //받을 데이터를 읽어 드리는 처리가 끝났는지 확인
    const [loading, setLoading] = useState(false);

    let navigate = useNavigate();

    const [bbs, setBbs] = useState();
    const [id, setId] = useState();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //객체를 받을때는 async, await 붙여줄 것.
    const getBbs = async (seq) => {
        await axios
            .get("http://localhost:9922/bbsdetail2",
                {
                    params: {
                        "seq": seq
                    }
                })
            .then((res) => {
                console.log(res.data);
                setBbs(res.data);

                setTitle(res.data.title);
                setContent(res.data.content);
                setLoading(true);
            })
            .catch((e) => {
                alert('error');
            })
    }

    useEffect(() => {
        //login 확인
        let str = localStorage.getItem("login");
        if (str !== null && str !== '') { //login 되어있을 경우
            //console.log(str);
            let login = JSON.parse(str);
            setId(login.id);
            //console.log(id);
        } else {
            //alert('login 페이지로 이동합니다.');
            localStorage.setItem("before", "/bbsdetail/" + params.seq);

            navigate("/login");
        }

        //alert('seq : ' + params.seq);

        //login이 되어 있는지?

        getBbs(params.seq);

    }, [navigate, params.seq, id]);

    const updateSuccess = async () => {

        await axios
            .post("http://localhost:9922/bbsupdate",
                null,
                {
                    params: {
                        "seq": params.seq,
                        "title": title,
                        "content": content
                    }
                })
            .then((res) => {
                console.log(res.data);
                if (res.data === "success") {
                    alert("글 수정에 성공하였습니다.");
                    navigate("/bbslist");
                }
            })
            .catch((e) => {
                alert(e);
            })

    }

    if (loading === false) {
        return <div>loading...</div>
    }

    const returnlist = () => {
        navigate("/bbslist");
    }

    return (
        <div>
            <table className="table table-bordered">
                <colgroup>
                    <col style={{ width: '150px' }} />
                    <col style={{ width: '500px' }} />
                </colgroup>
                <tbody>
                    <tr>
                        <th className="th">작성자</th>
                        <td>{bbs.id}</td>
                    </tr>
                    <tr>
                        <th className="th">작성일</th>
                        <td>{bbs.wdate}</td>
                    </tr>
                    <tr>
                        <th className="th">조회수</th>
                        <td>{bbs.readcount}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ fontSize: '22px', fontWeight: "bold", lineHeight: "28px" }}>
                            <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" name="title" size="50px"
                                placeholder="제목을 작성해주세요" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ height: "300px", fontSize: "120%" }}>
                            <textarea rows="12" style={{ backgroundColor: "#fff", fontSize: "20px", border: "none" }}
                                cols="15" className="form-control" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn bbsupdate">
                <button type="button" className="btn btn-info bbs" onClick={returnlist}>글목록으로</button>
                <button type="button" className="btn btn-info bbs" onClick={updateSuccess}>수정완료</button>
            </div>
        </div>
    )
}

export default Bbsupdate;