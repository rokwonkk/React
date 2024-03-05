import { useState } from "react";
import axios from 'axios';
//녹음기능 사용할 때 필요한 모듈 
import { ReactMediaRecorder } from 'react-media-recorder'; //npm i react-media-recorder@1.6.5 

const App = () => {

  const [res, setRes] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('uploadfile', document.frm.uploadfile.files[0]);

    // send
    axios
      .post("http://localhost:9922/fileupload", formData)
      .then(res => {
        setRes(res.data.text);
      })
      .catch(e => {
        console.log(e);
      })
  }

  return (
    <div>
      <ReactMediaRecorder
        audio
        render={
          ({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button><br /><br />
              <audio src={mediaBlobUrl} controls></audio><br />

              {/* 다운로드 링크 */}
              <a href={mediaBlobUrl} download='my-audio-file.wav'>
                download
              </a>
            </div>
          )}
      />
      <hr />
      <h2>음성파일 업로드</h2>
      <form name='frm' onSubmit={onSubmit} encType="multipart/form-data">
        <input type="file" name='uploadfile' accept="*" />
        <input type="submit" value="파일전송" />
      </form>
      <h3>결과 : {res}</h3>
    </div>
  );
}

export default App;