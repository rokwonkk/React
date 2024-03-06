import { useState } from 'react';
import axios from 'axios';

const App = () => {

  const [str, setStr] = useState('');

  console.log(str);

  const stt = () => {
    axios
      .post("http://localhost:9922/tts", null,
        {
          params: {
            "str" : str
          }
        })
      .then((res) => {
        console.log(res.data);
        if(res.data === 'success'){
          alert('변환에 성공하였습니다.');
        }
      })
      .catch((e) => {
        console.log(e);
        alert('변환에 실패하였습니다.');
      })
  }

  return (
    <div>
      <textarea value={str} onChange={(e) => { setStr(e.target.value) }} cols="30" rows="10"></textarea>
      <br />
      <button onClick={ stt }>text to speech</button>
    </div>
  );
}

export default App;