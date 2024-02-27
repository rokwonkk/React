import {createContext, useState} from "react"
import Second from "./Second"

export const TextContext = createContext();

const First = () => {

    //json 형식으로도 잘 넘어가네 ㅋ
    const [json] = useState(
        {
            "id" : "abc",
            "pw" : "123",
            "msg" : "안녕하세요 반갑읍니다"
        }
    )
    //const message = "안녕하세요 반갑읍니다";

    return (
        <div>
            <h3>First</h3>
            <TextContext.Provider value={json}>
            <Second/>
            </TextContext.Provider>
        </div>
    )
}

export default First;