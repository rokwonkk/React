import axios from 'axios';
import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('uploadfile', document.frm.uploadfile.files[0]);

    // send
    axios
      .post("http://localhost:9922/pictureupload", formData)
      .then(res => {
        //console.log(JSON.stringify(res.data));
        console.log(res.data);
        console.log(res.data.images[0].title.name);
        console.log(res.data.images[0].fields[0].inferText);

        setTitle(res.data.images[0].title.name);
        setNumber(res.data.images[0].fields[0].inferText);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      <h2>사진 업로드</h2>
      <form name='frm' onSubmit={onSubmit} encType="multipart/form-data">
        <input type="file" name='uploadfile' accept="*" />
        <input type="submit" value="파일전송" />
      </form>

      <h2>판독 결과</h2>
      타이틀 명 : <p>{title}</p>
      넘버 : <p> {number}</p>

    </div>

  );
}

export default App;