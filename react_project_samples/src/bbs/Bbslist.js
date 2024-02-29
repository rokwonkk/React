import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from 'react-js-pagination'; //npm i react-js-pagination
import axios from 'axios';

import arrow from '../asset/arrow1.png';
import "./Bbslist.css";
import "./page.css";

const Bbslist = () => {

    const [bbslist, setBbslist] = useState([]);

    // 검색
    const [choice, setChoice] = useState("");
    const [search, setSearch] = useState("");

    // 페이징
    const [page, setPage] = useState(1);
    const [totalCnt, setTotalCnt] = useState(0);

    const getBbslist = (c, s, pn) => {

        axios.get("http://localhost:9922/bbslist",
            {
                //서버단 매개변수이름이랑 동일해야함.
                params: {
                    "choice": c,
                    "search": s,
                    "pageNumber": pn
                }
            })
            .then((res) => {  //success
                console.log(res.data.list);
                setBbslist(res.data.list);
                setTotalCnt(res.data.cnt); //글의 총수
            })
            .catch((e) => {   //error
                console.log(e);
            })
    }

    //랜더링될때 한번 실행해줌.
    useEffect(() => {
        getBbslist('', '', 0);
    }, []);
    //랜더링될때마다 실행해줌
    //}, []);
    //변하는 값이 감지되면 실행해줌
    //}, [bbslist]);

    const searchBtn = () => {
        //  choice, search 검사
        if (choice === "") {
            alert("카테고리를 선택해주십시오");
            return;
        }

        getBbslist(choice, search, 0);
    }

    //페이징
    const handlePageChange = (page) => {
        setPage(page);
        getBbslist(choice, search, page - 1);
    }

    return (
        <div>
            <table style={{ marginLeft: "auto", marginRight: 'auto', marginTop: "3px", marginBottom: "3px" }}>
                <tbody>
                    <tr>
                        <td style={{ paddingLeft: "3px"}}>
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
                    <col width='70' />
                    <col width='500' />
                    <col width='100' />
                    <col width='150' />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>조회수</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bbslist.map((bbs, index) => {
                            return (
                                <TableRow bbs={bbs} rownum={index + 1} key={index} />
                            )
                        })
                    }
                </tbody>
            </table>

            <br />
            {/* https://mui.com/material-ui/react-pagination/ */}
            {/* 첫번째와 두번쨰의 경우 */}
            {/* 
            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={totalCnt}
                pageRangeDisplayed={10}
                prevPageText={"이전"}
                nextPageText={"다음"}
                onChange={ handlePageChange } />
            */}
            {/* 세번째의 경우 */}
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
                <Link className='btn btn-info' to="/bbswrite">글쓰기</Link>
            </div>

            <br /><br /><br /><br />
        </div>
    );
}

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.rownum}</td>
            {DelBbsRow(props)}
            <td>{props.bbs.readcount}</td>
            <td>{props.bbs.id}</td>
        </tr>
    )
}

//삭제된 글의 처리
const DelBbsRow = (props) => {
    if (props.bbs.del === 0) {
        return (
            <td className='underline'>
                {getArrow(props.bbs.depth)}
                <Link to={`/bbsDetail/${props.bbs.seq}`}>{props.bbs.title}</Link>
            </td>
        )
    }
    return <td>- 이글은 작성자의 의해서 삭제 되었습니다 -</td>
}

const getArrow = (depth) => {
    let nbsp = "&nbsp;&nbsp;&nbsp;&nbsp;";

    let ts = "";
    for (let i = 0; i < depth; i++) {
        ts += nbsp;
    }

    // String -> html
    let space = <span dangerouslySetInnerHTML={{ __html: ts }}></span>
    if (depth === 0) {
        return "";
    }
    return (
        <>
            {space}<img src={arrow} alt='no' width='20px' height='20px' />&nbsp;
        </>
    )
}

export default Bbslist;