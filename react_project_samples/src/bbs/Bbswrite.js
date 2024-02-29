import { useState, useEffect } from "react";
//useNavigate = location.href
//Link = tag
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Bbs.css';
const Bbswrite = () => {

    let navigate = useNavigate();

    //id, title, content
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // console.log(title);
    // console.log(content);

    useEffect(() => {
        //login 확인
        let str = localStorage.getItem("login");
        if (str !== null && str !== '') { //login 되어있을 경우

            console.log(str);
            let login = JSON.parse(str);
            setId(login.id);

        } else {
            //alert('login 페이지로 이동합니다.');
            localStorage.setItem("before", "/bbswrite");

            navigate("/login");
        }
    }, [navigate]);

    const returnlist = () => {
        navigate("/bbslist");
    }

    const bbswrite = () => {

        //alert("z");

        if (title === '') {
            alert('제목을 입력해주세요');
            return;
        }

        axios
            .post("http://localhost:9922/bbswrite",
                null,
                {
                    params: {
                        "id": id,
                        "title": title,
                        "content": content
                    }
                })
            .then((res) => {
                //console.log(res.data);
                //alert("글을 작성하였습니다.");
                navigate("/bbslist");
            })
            .catch((e) => {
                alert('error');
            })
    }


    return (
        <div align="center">
            <h1>글쓰기</h1>
            <table className="table table-bordered">
                <colgroup>
                    <col style={{ width:'150px' }}/>
                    <col style={{ width:'500px' }}/>
                </colgroup>
                <tbody>
                    <tr>
                        <th className="th">작성자</th>
                        <td>
                            <input value={id} className="form-control" name="id" size="50px" readOnly />
                        </td>
                    </tr>
                    <tr>
                        {/* <!-- <th>제목</th> --> */}
                        <td colSpan={2}><input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" name="title" size="50px"
                            placeholder="제목을 작성해주세요" /></td>
                    </tr>
                    <tr>
                        {/* <!-- <th>내용</th> --> */}
                        <td colSpan={2}><textarea id="summernote" value={content} onChange={(e) => setContent(e.target.value)} className="form-control" cols="50" rows="20"
                            placeholder="내용을 작성해주세요"></textarea></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <button type="button" className="btn btn-info bbswrite" onClick={() => bbswrite()}>글작성완료</button>
            <button type="button" className="btn btn-info bbswrite" onClick={returnlist}>글목록으로</button>
        </div>
    )
}

export default Bbswrite;