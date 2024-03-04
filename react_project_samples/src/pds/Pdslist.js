import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from 'react-js-pagination'; //npm i react-js-pagination

import "./Pdsupload.css"

const Pdslist = () => {
    const [pdslist, setPdslist] = useState([]);

    // 검색
    const [choice, setChoice] = useState("");
    const [search, setSearch] = useState("");

    // 페이징
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    const getPbslist = (c, s, pn) => {
        axios
            .get("http://localhost:9922/pdslist",
                {
                    //서버단 매개변수이름이랑 동일해야함.
                    params: {
                        "choice": c,
                        "search": s,
                        "pageNumber": pn
                    }
                })
            .then((res) => {  // success:function                
                setPdslist(res.data.list);
                setTotalCnt(res.data.cnt); //글의 총수
            })
            .catch((e) => {     // error:function
                alert('e');
            })
    }

    useEffect(() => {
        getPbslist('', '', 0);
    }, []);

    const searchBtn = () => {
        //  choice, search 검사
        if (choice === "") {
            alert("카테고리를 선택해주십시오");
            return;
        }

        getPbslist(choice, search, 0);
    }

    //페이징
    const handlePageChange = (page) => {
        setPage(page);
        getPbslist(choice, search, page - 1);
    }

    const sumbnail = (i) => {

        let filenamelength = pdslist[i].newfilename.length;

        let dot = pdslist[i].newfilename.lastIndexOf('.');
        let ext = pdslist[i].newfilename.substring(dot, filenamelength);

        let imgurl = "http://localhost:9922/upload/s_" + pdslist[i].newfilename;

        if (ext === '.jpg' || ext === '.png' || ext === '.bmp' || ext === '.gif') {
            return <img alt='미리보기없음' style={{ width: 80, height: 80 }} src={imgurl} />
        } else {
            return <img alt="미리보기없음" style={{ width: 80, height: 80 }} src='http://localhost:9922/upload/none.png' />
        }
    }

    return (
        <div>
            <div align="center">
                <table style={{ marginLeft: "auto", marginRight: 'auto', marginTop: "3px", marginBottom: "3px" }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: "3px" }}>
                                <select className='custom-select' value={choice}
                                    onChange={(e) => { setChoice(e.target.value) }}>
                                    <option value="">검색</option>
                                    <option value="title">제목</option>
                                    <option value="content">내용</option>
                                    <option value="writer">작성자</option>
                                </select>
                            </td>
                            <td style={{ paddingLeft: "5px" }} className='align-middle'>
                                <input className="form-control" placeholder='검색어' value={search}
                                    onChange={(e) => { setSearch(e.target.value) }} />
                            </td>
                            <td style={{ paddingLeft: "5px" }}>
                                <button className='btn btn-info'
                                    onClick={() => searchBtn()}>검색</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br />

                <table className='table table-hover'>
                    <colgroup>
                        <col width="70" /><col width="50" /><col width="500" /><col width="100" /><col width="150" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>번호</th><th>미리보기</th><th>제목</th><th>조회수</th><th>작성자</th>
                        </tr>
                    </thead>

                    <tbody className="tbody">
                        {
                            pdslist.map(function (pds, i) {
                                return (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{sumbnail(i)}</td>
                                        <td style={{textAlign: "left"}}><Link to={`/pdsdetail/${pds.seq}`}>{pds.title}</Link></td>
                                        <td>{pds.readcount}</td>
                                        <td>{pds.id}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

                <br />

                <Pagination
                    itemClass='page-item'
                    linkClass='page-link'
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={totalCnt}
                    pageRangeDisplayed={10}
                    prevPageText={"prev"}
                    nextPageText={"next"}
                    onChange={handlePageChange}
                />

                <div className='my-5 d-flex justify-content-center'>
                    <Link className='btn btn-info' to="/pdsupload">자료올리기</Link>
                </div>

            </div>
        </div>
    )
}

export default Pdslist;