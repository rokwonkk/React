import { useState, useEffect } from "react";
//useNavigate = location.href
//Link = tag
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Bbswrite = () => {

    let navigate = useNavigate();

    useEffect(() => {
        //login 확인
        let str = localStorage.getItem("login");
        if(str !== null && str !== ''){ //login 되어있을 경우
            let login = JSON.parse(str);
        } else {
            alert('login 페이지로 이동합니다.');
            localStorage.setItem("before", "/bbswrite");

            navigate("/login");
        }
    });

    return (
        <div>
            <h1>bbswrite</h1>
        </div>
    )
}

export default Bbswrite;