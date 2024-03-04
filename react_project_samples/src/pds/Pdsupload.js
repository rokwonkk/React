import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './Pdsupload.css';

const Pdsupload = () => {
    let navigate = useNavigate();

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        // login 확인   session.setAttribute("login", login);
        let str = localStorage.getItem("login");
        if (str !== null && str !== "") { // login 한 경우
            // alert('login 되어 있습니다');
            console.log(str);
            let login = JSON.parse(str);
            setId(login.id);     // (useState를 사용하지 말고)바로 넣어야 합니다
        } else {
            alert('login 해 주십시오');
            localStorage.setItem("before", "/bbswrite");

            navigate("/login");
        }
    }, [navigate]);

    const onSubmit = (e) => {
        e.preventDefault(); // 이동하지 않도록 하는 함수

        // form field(id, title, content) -> string
        // 짐을 싼다
        let formData = new FormData();
        formData.append("id", id);
        formData.append("title", title);
        formData.append("content", content);

        // file -> byte
        formData.append("uploadfile", document.frm.uploadfile.files[0]);

        // 보내자
        // multipart 인 경우는 두번째 매개변수 보내는 파라미터가 된다
        axios.post("http://localhost:9922/pdswrite", formData)
            .then((resp) => {
                alert(resp.data);
                navigate("/pdslist");
            })
            .catch((error) => {
                alert('error');
            });
    }

    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    return (
        <div>
            <form name='frm' onSubmit={onSubmit} encType='multipart/form-data'>
                <table className="table table-bordered">
                    <colgroup>
                        <col width="200" /><col width="50"/><col width="500" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <th className="colorfy">아이디</th>
                            <td colSpan={2}>
                                <input value={id} onChange={(e) => setId(e.target.value)} className="form-control" placeholder='아이디' />
                            </td>
                        </tr>
                        <tr>
                            <th className="colorfy">제목</th>
                            <td colSpan={2}>
                                <input value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder='제목' />
                            </td>
                        </tr>
                        <tr>
                            <th className="colorfy">파일</th>
                            <td>
                                <div style={{width : 50}}>{imageSrc && <img src={imageSrc} style={{width : 80, height : 80}} alt="preview-img" />}</div>
                            </td>
                            <td>
                                <input type='file' name='uploadfile' className="form-control" onChange={(e) => { encodeFileToBase64(e.target.files[0]) }} />
                            </td>
                        </tr>
                        <tr>
                            <th className="colorfy">내용</th>
                            <td colSpan={2}>
                                <textarea cols='15' rows='18' className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div align="center">
                    <input type='submit' className='btn btn-primary' value="자료올리기" />
                </div>
            </form>
        </div>
    )
}

export default Pdsupload;