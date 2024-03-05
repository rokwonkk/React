import { useState } from "react";

import { useSpeechRecognition } from 'react-speech-kit'; //npm i --force react-speech-kit

const App = () => {

  const [value, setValue] = useState("");

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (res) => {
      setValue(res);
    }
  });

  return (
    <div>
      <div>{value}</div>

      <button onMouseDown={listen} onMouseUp={stop}>🎤</button>

      {listening && <div>음성인식 활성화 중...</div>}
    </div>
  );
}

export default App;