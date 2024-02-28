import { useState, useEffect } from 'react'
import axios from 'axios';

const Pds = () => {
    const [pdslist, setPdslist] = useState([]);

    const fetchData = async () => {

        await axios.get("http://localhost:9922/pdslist",
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

                setPdslist(res.data.list);
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
            <h3>자료실 목록</h3>

            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>썸네일</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>다운수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pdslist.map(function (pds, i) {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{pds.id}</td>
                                    <td>{pds.newfilename}</td>
                                    <td>{pds.title}</td>
                                    <td>{pds.readcount}</td>
                                    <td>{pds.downcount}</td>
                                    <td>{pds.regdate}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Pds;