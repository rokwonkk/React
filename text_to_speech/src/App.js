import { useState } from 'react';

const App = () => {

  const [text, setText] = useState("");

  const clickBtn = () => {
    getSpeech(text);
  }

  return (
    <div>
      <h1>Text to speech</h1>

      <input value={text} onChange={(e) => { setText(e.target.value) }} />
      <button onClick={ clickBtn }>speech</button>
    </div>
  );
}

const getSpeech = (text) => {
  let voices = [];

  const setVoiceList = () => {
    voices = window.speechSynthesis.getVoices();
  }

  setVoiceList();

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = voices;
  }

  //실제 reading 함수
  const speech = (txt) => {
    const language = "ko-KR"; //여기서 언어 바꾸면 됨
    const utterThis = new SpeechSynthesisUtterance(txt); //js 지원하는 기본 함수

    utterThis.lang = language;

    window.speechSynthesis.speak(utterThis);
  }

  speech(text);
}

export default App;