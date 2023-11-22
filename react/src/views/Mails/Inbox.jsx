import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { useState } from "react";
import CreateMailModal from './CreateMailModal';
function Inbox({tab}) {
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [button, setButton] = useState(1);
    const [maxShowPerPage, setMaxShowPerPage] = useState(10);
    const [showModal, setShowModal] = useState(false);
    const handlePrePage = () =>{
        if (page > 1)
            setPage(page-1);
        console.log(page);
    }
    const handleNextPage = () =>{
        if (page < maxPage)
            setPage(page+1);
        console.log(page);
    }
    const handleAllMails = () =>{
        setButton(1);
    }
    const handleUnreadMails = () =>{
        setButton(0);
    }
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return ( 
    <>
    <ButtonToolbar
        className="justify-content-between"
        aria-label="Toolbar with Button groups"
      >
        <InputGroup>
          <Button id="btnGroupAddon2">جستجو</Button>
          <Form.Control
            type="text"
            // placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
        {tab != "send" && (
        <ButtonGroup aria-label="First group" className='col-md-5'>
          <Button variant={button ? ("primary") : ("secondary")} onClick={handleAllMails}>همه نامه ها</Button>
          <Button variant={!button ? ("primary") : ("secondary")} onClick={handleUnreadMails}>مشاهده نشده ها</Button>
        </ButtonGroup>
        )}
    </ButtonToolbar>
    <br/>
    <Table responsive className='text-center'>
      <thead>
        <tr className='col-12'>
          <th className='text-center col-3 font-weight-bold'>عنوان</th>
          <th className='text-center col-9 font-weight-bold'>متن پیام</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <div className="col-3 d-flex justify-content-center">
        <Button variant="success" onClick={openModal} active>ایجاد نامه</Button>
        {showModal &&(
            <CreateMailModal
                showModal={showModal} 
                closeModal={closeModal}
            
            />
        )}
    </div>
    <div className="col-12 d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example " style={{marginBottom:"3px"}}>
            <Button variant="secondary" onClick={handleNextPage} active>بعدی</Button>
            <Button variant="secondary" onClick={handlePrePage} active>قبلی</Button>
        </ButtonGroup>
    </div>
    </>
    );
}

export default Inbox;