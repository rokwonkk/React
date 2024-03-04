import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

const Pdsdetail = () => {
    let params = useParams();
    let navigate = useNavigate();

    const [pds, setPds] = useState();

    // 받을 데이터를 읽어 들이는 처리가 끝났는지 확인
    const [loading, setLoading] = useState(false); 

    async function getPds(seq){
        await axios.get("http://localhost:9922/pdsdetail", { params:{"seq":seq} })
            .then(function(resp){
                console.log(resp.data);
                setPds(resp.data);

                setLoading(true);
            })
            .catch(function(err){
                alert('error');
            })
    }

    const download = async(seq) => {
        let url = "http://localhost:9922/filedownload?seq=" + seq;
        
        window.location.href = url;
      }

    useEffect(function(){
        // login이 되어 있는지?
        let login = localStorage.getItem('login');
        if(login !== null){
            getPds(params.seq);
        }else{
            alert('login해 주십시오');

            // login 후에 bbsdetail로 이동하기 위한 처리
            localStorage.setItem("before", "/Pdsdetail/" + params.seq);
            
            // login으로 이동 -> useNavigate
            navigate('/login');
        }        

    }, [navigate, params.seq]);

    if(loading === false){
        return <div>loading...</div>;
    }

    return (
        <div>
            <table className="table table-bordered">
            <colgroup>
                <col style={{ width:'150px' }}/>
                <col style={{ width:'500px' }}/>
            </colgroup>
            <tbody>
            <tr>
                <th>작성자</th>
                <td>{pds.id}</td>
            </tr>
            <tr>
                <th>작성일</th>
                <td>{pds.regdate}</td>
            </tr>
            <tr>
                <th>조회수</th>
                <td>{pds.readcount}</td>
            </tr>
            <tr>
                <th>다운수</th>
                <td>{pds.downcount}</td>
            </tr>
            <tr>
                <th>다운로드</th>
                <td>{pds.filename}&nbsp;&nbsp;<button onClick={()=>download(pds.seq)} className="btn btn-primary">다운로드</button></td>
            </tr>
            <tr>                
                <td colSpan={2} style={{ fontSize:'22px', fontWeight:"bold", lineHeight:"28px" }}>{pds.title}</td>
            </tr>
            <tr>                
                <td colSpan={2} style={{ height:"300px", fontSize:"120%" }}>                
                    <textarea rows="12" style={{ backgroundColor:"#fff", fontSize:"20px", border:"none" }}                    
                        cols="15" className="form-control" value={pds.content} readOnly></textarea>
                </td>
            </tr>
            </tbody>
            </table>

        </div>
    )
}

export default Pdsdetail;