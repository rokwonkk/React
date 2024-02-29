import React, { useState } from 'react';

// 참조 사이트
// https://react-bootstrap.netlify.app/docs/getting-started/introduction

import Modal from 'react-bootstrap/Modal'; // npm install react-bootstrap bootstrap

function MyModal() {
    const [show, setShow] = useState(false);

    const handleClose = () =>{
          setShow(false);
    }
    const handleShow = () => {
         setShow(true);
    }

    return(
        <div>
            <button className="btn btn-primary" variant="outline-primary" onClick={handleShow}>outline-primary</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>버튼</Modal.Title>
                </Modal.Header>
                <Modal.Body>데이터</Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" variant="secondary" onClick={handleClose}>
                        닫기
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default MyModal;