import { useState, useEffect } from 'react'
import axios from 'axios';

const Bbs = () => {

    const [bbslist, setBbslist] = useState([]);

    const fetchData = async () => {
  
      await axios.get("http://localhost:9922/bbslist",
        {
          params: {
            "choice": "",
            "search": "",
            "pageNumber": 0
          }
        })
        .then((res) => {
          //성공 success
          //console.log(res.data.list);
  
          setBbslist(res.data.list);
        })
        .catch((e) => {
          alert(e);
          //실패 error
        })
    }
  
    useEffect(() => {
      fetchData();
    }, []);
  
    return (
      <div>
        <h3>게시판 목록</h3>
  
        <table border="1">
          <thead>
            <tr>
              <th>번호</th><th>제목</th><th>조회수</th><th>작성자</th>
            </tr>
          </thead>
          <tbody>
          {
            bbslist.map(function(bbs, i){
              return (
                <tr key={i}>
                  <td>{ i + 1 }</td>
                  <td>{ bbs.title }</td>
                  <td>{ bbs.readcount }</td>
                  <td>{ bbs.id }</td>
                </tr>
              );
            })
          }
          </tbody>
        </table>
  
      </div>
    );
  }


export default Bbs;