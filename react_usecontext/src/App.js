//import { createContext, userContext } from 'react'
import First from './First';

// useContext를 사용하지 않고 값을 전달하는 경우
/*
const App = () => {

  const [message] = useState("나는 반드시 성공한다");

  return (
    <div >
        <First message={message} />
    </div>
  );
}

const First = (props) => {
  return (
    <dir>
      <h3>First</h3>
      <Second message={ props.message } />
    </dir>
  )
}

const Second = (props) => {
  return (
    <dir>
      <h3>Second</h3>
      <h1>{props.message}</h1>
    </dir>
  )
}
*/
/*
//useContext 를 사용한 (간단한) 예
const ContextObj = createContext();
const UserComp = () => {
  const msg = userContext((ContextObj));
  return (
    <div>
      <h3>UserComp</h3>
      <h2>전달된 메시지 : { msg }</h2>
    </div>
  )
}

const App = () => {

  const message = "I can do it";

  //Provider -> 제공자
  return (
    <div>
      <ContextObj.Provider value={message}>
        <UserComp />
      </ContextObj.Provider>
    </div>
  )
}
*/

//userContext에서 복잡한 예 app -> first -> second -> third
const App = () => {

  return (
    <div>
      <First/>
    </div>
  )
}

export default App;