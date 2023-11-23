import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";
import CreateMailModal from './CreateMailModal';
import ShowMailModal from './ShowMailModal';
import axiosClient from "../../axios";

function Inbox({
    tab,
    data,
    page,
    setPage,
    maxPage,
    setMaxPage,
    fetchData
}) {
    
    const [allOrNotseen, setAllOrNotseen] = useState(1);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showMailModal, setShowMailModal] = useState(false);
    const handlePrePage = () =>{
        console.log(data);
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
        setAllOrNotseen(1);
    }
    const handleUnreadMails = () =>{
        setAllOrNotseen(0);
    }
    const openMailModal = () => {
        setShowMailModal(true);
    };
    const closeMailModal = () => {
        setShowMailModal(false);
    };
    const openCreateModal = () => {
        setShowCreateModal(true);
    };
    const closeCreateModal = () => {
        setShowCreateModal(false);
    };
    const handleTitleClick = (id, tab) => {

        if(tab == 'recive'){
            axiosClient.post('/mail/updateStatusMail/'+ id).then(res => {
                fetchData()
            })
            .catch((error) => {
                console.log(error.response);
                });  
        }
    }
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
          <Button variant={allOrNotseen ? ("primary") : ("secondary")} onClick={handleAllMails}>همه نامه ها</Button>
          <Button variant={!allOrNotseen ? ("primary") : ("secondary")} onClick={handleUnreadMails}>مشاهده نشده ها</Button>
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
      {data && (data.map((node) => (
        allOrNotseen ? (
            <tr key={node.id} className={(node.status &&  tab === 'recive') || tab === 'send'? 'table-secondary' : ''}>
                <td onClick={() => handleTitleClick(node.id, tab)}><a href="#" className="link-dark">{node.title}</a></td>
                <td>{node.description.substring(0, Math.min(10, node.title.length))}</td>
            </tr>
        ) : (
        node.status === 0 && (
            <tr key={node.id}>
                <td>{node.title}</td>
                <td>{node.description.substring(0, Math.min(10, node.title.length))}</td>
            </tr>
        )
        )
        )))}
        {showMailModal &&(
            <ShowMailModal
                openMailModal={showMailModal} 
                closeMailModal={closeMailModal}
            />
        )}
      </tbody>
    </Table>
    <div className="col-3 d-flex justify-content-center">
        <Button variant="success" onClick={openCreateModal} active>ایجاد نامه</Button>
        {showCreateModal &&(
            <CreateMailModal
                showCreateModal={showCreateModal} 
                closeCreateModal={closeCreateModal}
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