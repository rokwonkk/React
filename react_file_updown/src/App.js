import { useState } from 'react'; //hook

import axios from 'axios'; //module

const App = () => {

  //PdsDto가 넘어오면 useState로 받아줌.
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //파일 업로드 함수
  const onSubmit = (e) => {
    //preventDefault : submit으로 이동하지 않도록 하는 함수
    e.preventDefault();

    //form field(id, title, content) - 짐 싸자
    let formData = new FormData(); //FormData 자바스크립트 class
    formData.append("id", id);
    formData.append("title", title);
    formData.append("content", content);

    //file -> byte / 문서. form의 name. form안의 file name. 안의 files
    formData.append("uploadfile", document.frm.uploadfile.files[0]);

    //보낸다.
    //multipart인 경우는 post로 보내더라도 두번째에 매개변수를 넣어준다.
    //보내는 형태의 axios 그렇기 때문에 받는 형태에서 사용된 async나 await를 사용하지 않는다.
    axios.post("http://localhost:9922/pdswrite", formData)
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        alert(e);
      })
  }

  const download = async() => {
    let filename = "복사본.docx";

    let url = "http://localhost:9922/filedownload?filename=" + filename;

    // a tag 생성한 후에 자동 실행 되도록 
    const download = document.createElement('a');
    download.setAttribute('href', url);
    
    
    //download.setAttribute("filename", filename);
    download.setAttribute("type", "application/json");
    download.click();
    

    //location.herf 사용 ( 앞에 window 붙여줘야함. )
    //window.location.href = url;
  }

  return (
    <div>
      <h3>file upload</h3>
      <form name='frm' onSubmit={onSubmit} encType='multipart/form-data'>
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder='아이디' /><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='제목' /><br />
        <input value={content} onChange={(e) => setContent(e.target.value)} placeholder='내용' /><br />

        <input type="file" name='uploadfile' /><br /><br />

        {/* submit은 버튼 눌렀을때 데이터를 가지고 이동하는 것. */}
        <input type="submit" value="자료올리기" />
      </form>

      <hr />

      <h2>file download</h2>

      <button onClick={() => download()}>download</button>

    </div>
  );
}

export default App;