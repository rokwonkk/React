import { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {

  /**
   * 비동기 처리를 동기화 를 해주어서 처리 해준다는 느낌.
   * axios는 async (비동기라고 명시해주고)와 await를 해줘서 데이터를 받을 때 까지 기다리게 함
   */
  /* 화살표 함수 사용했을 때
    const fetchData = async () => {
                              //보낼곳           , 보내고싶은 데이터
      const res = await axios.get("http://localhost:9922/", {});
      console.log(res.data);
    }
  */

  /*
    // 일반 함수로 만들었을 때
    async function fetchData(){
      const res = await axios.get("http://localhost:9922/idcheck", 
              { params: { id: "abc" }});
  
      console.log(res.data);
    }
  */

  const fetchData = async () => {

    await axios.post("http://localhost:9922/getlist", null,
      {
        params: {
          "id": "aaa",
          "name": "홍길동",
          "height": 167.6
        }
      })
      .then((res) => {
        //성공 success
        console.log(res.data);
        let list = res.data;
        console.log(list[0].name);
        console.log(list[1].name);
        console.log(list[2].name);
      })
      .catch(() => {
        alert('error');
        //실패 error
      })
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;