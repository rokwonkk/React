import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import "./Chatbox.css";

const Chatbox = () => {

    const [message, setMessage] = useState("");
    const scrollRef = useRef();

    const sendBtn = () => {
        const rootElement = document.getElementById('chatbox'); // 채팅 div

        let element = document.createElement('div');
        element.setAttribute('align', 'right');

        let element1 = document.createElement('div');
        element1.innerHTML = message;
        element1.setAttribute('class', 'usermsg');

        element.appendChild(element1);                         //우측정렬
        rootElement.appendChild(element);                      //메세지
        rootElement.appendChild(document.createElement('br')); //개행 추가

        //back-end로 메세지 전송
        axios
            .get("http://localhost:9922/chatbot",
                {
                    params:
                    {
                        'msg': message
                    }
                })
            .then((res) => {
                console.log(res.data);

                Chatbotanswer(res.data);

                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            })
            .catch((e) => {
                console.log(e);
            })
    }

    const Chatbotanswer = (res) => {    //챗봇 답변 분류
        if (res.bubbles[0].type === 'text') {             //문자열 <div>
            Chatbottext(res.bubbles[0].data.description);
        } else if (res.bubbles[0].type === 'template') {  //탬플릿

            // image
            if (res.bubbles[0].data.cover.type === 'image') {
                Chatbotimage(res.bubbles[0].data.cover.data.imageUrl); // <= <img>
                //  text
            } else if (res.bubbles[0].data.cover.type === 'text') {
                //Chatbotlink()                                         //<a></a> <LINK>
            }
        }
    }

    const Chatbottext = (str) => {
        const rootElement = document.getElementById('chatbox');
        let div = document.createElement('div');
        div.innerHTML = str;
        div.setAttribute("class", "botmsg");

        rootElement.appendChild(div);
        rootElement.appendChild(document.createElement('br'));
    }

    const Chatbotimage = (url) => {
        const rootElement = document.getElementById('chatbox');
        let img = document.createElement('img');
        img.setAttribute('src', url);
        img.setAttribute('width', '200px');
        img.setAttribute('height', '140px');

        rootElement.appendChild(img);
        rootElement.appendChild(document.createElement('br'));
    }

    const Chatbotlink = (url) => {

    }

    useEffect(() => {
        // scrollRef.current.scrollTop == 현재 스크롤 위치
        // scrollRef.current.scrollHeight == 스크롤의 높이
        
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });

    return (
        <div className='wrapper'>
            <div className='menu'>
                <h3 className='welcome'>welcome</h3>
            </div>

            <div className='chatbox' ref={ scrollRef } id='chatbox'>
                {/* <div align='right'>
                    <div className='usermsg'>하이</div>
                </div>
                <br />

                <div style={{display: 'flex'}}>
                <img src={"https://img.icons8.com/color/40/000000/guest-female.png"}
                        alt='' className='img1' />
                <div className='botmsg'>방가방가 뭐해?</div>
                </div> */}
            </div>

            <div className='myform'>
                <input className='usermsgwrite' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='메세지를 입력하세요' />
                <input type="button" className='submitmsg' value='전송' onClick={sendBtn} />
            </div>
        </div>
    )
}

export default Chatbox;