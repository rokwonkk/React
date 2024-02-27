import { useContext } from "react";
import { TextContext } from "./First";

const  Third = () => {

    //const msg = useContext(TextContext);

    const json = useContext(TextContext);

    return (
        <div>
            <h4>Third</h4>
            <h2>전달된 아이디 : {json.id} </h2>
            <h2>전달된 비밀번호 : {json.pw} </h2>
            <h2>전달된 메세지 : {json.msg} </h2>
        </div>
    )
}

export default Third;