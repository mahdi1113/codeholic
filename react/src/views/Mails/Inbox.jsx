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
import Swal from 'sweetalert2';
import { useSelector } from "react-redux";
import moment from 'jalali-moment';
function Inbox({
    tab,
    data,
    page,
    setPage,
    maxPage,
    setMaxPage,
    fetchData,
    allOrNotseen,
    setAllOrNotseen,
    loading,
    setLoading
}) {

    const user = useSelector((state) => state.user);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showMailModal, setShowMailModal] = useState(false);
    const [mailModalData, setMailModalData] = useState({
        title: '',
        description: '',
      });
    const [createModalData, setCreateModalData] = useState({
        'user_id':user.id
    });
    const [allowedPersons, setAllowedPersons] = useState([]);
    const [refrence, setRefrence] = useState(null);
    const handlePrePage = () =>{
        console.log(data);
        if (page > 1)
            setPage(page-1);
    }
    const handleNextPage = () =>{
        if (page < maxPage)
            setPage(page+1);
    }
    const handleAllMails = () =>{
        if(!allOrNotseen){
            setLoading(true);
            setAllOrNotseen(1);
        }

    }
    const handleUnreadMails = () =>{
        if(allOrNotseen){
            setLoading(true);
            setAllOrNotseen(0);
        }
    }
    const openMailModal = () => {
        axiosClient.post('/mail/allowedPersons/'+ user.id).then(res => {
            // console.log(user.id);
            // console.log(res.data);
            setAllowedPersons(res.data);
            setShowMailModal(true);
            
        })
        .catch((error) => {
            console.log(error.response);
            });
        
    };
    const closeMailModal = () => {
        setShowMailModal(false);
    };
    // useEffect(() => {
    //     console.log('user.role_id :: ',user);
    //     console.log('allowedPersons :: ',allowedPersons);
    // },[allowedPersons])
    const openCreateModal = () => {
        axiosClient.post('/mail/allowedPersons/'+ user.id).then(res => {
            // console.log(user.id);
            // console.log(res.data);
            setAllowedPersons(res.data);
            setShowCreateModal(true);
            
        })
        .catch((error) => {
            console.log(error.response);
            });


    };
    const closeCreateModal = () => {
        setShowCreateModal(false);
        setCreateModalData({'user_id':user.id});
    };
    const handleTitleClick = (node, tab) => {
        // console.log(node);
        setMailModalData(node)
        openMailModal()
        if(tab == 'recive'){
            axiosClient.post('/mail/updateStatusMail/'+ node.id).then(res => {
                fetchData()
            })
            .catch((error) => {
                console.log(error.response);
                });
        }
    }
    const sendMail = () => {

        axiosClient.post('mail/store/'+ user.id, createModalData).then(res => {
            fetchData();
            Swal.fire({
                icon: 'success',
                title: 'success',
                text: res.data.msg,
              }).then(() => closeCreateModal());
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.message,
              });
            });

    }
    const handleRefrence = () => {
        console.log(mailModalData);
        if((mailModalData.refrence_id && mailModalData.refrence_description)){
        let parameters = {
            url: 'reference/store/'+user.id,
            data: {
                recive_id: mailModalData.refrence_id,
                mail_id: mailModalData.id,
                description: mailModalData.refrence_description,
            },
            };
            console.log(parameters);
        axiosClient.post(parameters.url, parameters.data).then(res => {
            console.log(res);
            if (res.data == "خطا")
            {
                Swal.fire({
                    icon: 'error',
                    title: 'error',
                    text: "نامه قبلا ارجاع داده شده",
                  }).then(() => closeMailModal());
            }
            else{
            Swal.fire({
                icon: 'success',
                title: 'success',
                text: res.data.msg,
              }).then(() => closeMailModal());
            }
        })
        .catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.message,
              });
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "فیلد های ارجاع اجباری هستند",
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
          <Button id="btnGroupAddonuser_id">جستجو</Button>
          <Form.Control
            type="text"
            // placeholder="Input group example"
            aria-label="Input group example"
            aria-describedby="btnGroupAddonuser_id"
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
        <tr className='col-1user_id'>
          <th className='text-center col-4 font-weight-bold'>عنوان</th>
          <th className='text-center col-4 font-weight-bold'>تاریخ</th>
          {tab == "recive" ?(
          <th className='text-center col-4 font-weight-bold'>فرستنده</th>
            ):(
                <th className='text-center col-4 font-weight-bold'>گیرنده</th>

            )
        }
        </tr>
      </thead>
      <tbody>
      {data && (data.map((node) => (
        allOrNotseen || tab === 'send' ? (
            <tr key={node.id} className={(node.status &&  tab === 'recive' || tab === 'send')? 'table-secondary' : ''}>
                <td onClick={() => handleTitleClick(node, tab)}><a href="#" className="link-dark">{node.title}</a></td>
                {/* <td>{node.description.substring(0, Math.min(20, node.description.length))}</td> */}
                <td>{moment(node.created_at, 'YYYY-MM-DD HH:mm:ss').locale('fa').format('jYYYY/jMM/jDD HH:mm:ss')}</td>
                {tab === 'recive' ?(
                <td>{node.user.name+' - '+node.user.role.title}</td>):
                (<td>{node.recive_user.name+' - '+node.recive_user.role.title}</td>)}
            </tr>
        ) : (
        node.status === 0 && (
            <tr key={node.id} className={tab === 'send' ? 'table-secondary' : ''}>
                <td onClick={() => handleTitleClick(node, tab)}><a href="#" className="link-dark">{node.title}</a></td>
                {/* <td>{node.description.substring(0, Math.min(20, node.description.length))}</td> */}
                <td>{moment(node.created_at, 'YYYY-MM-DD HH:mm:ss').locale('fa').format('jYYYY/jMM/jDD HH:mm:ss')}</td>
                {tab === 'recive' ?(
                <td>{node.user.name+' - '+node.user.role.title}</td>):
                (<td>{node.recive_user.name+' - '+node.recive_user.role.title}</td>)}
            </tr>
        )
        )
        )))}

      </tbody>
    </Table>
    <div className="col-3 d-flex justify-content-center">
        <Button variant="success" onClick={openCreateModal} active>ایجاد نامه</Button>
        {showCreateModal &&(
            <CreateMailModal
                showCreateModal={showCreateModal}
                closeCreateModal={closeCreateModal}
                allowedPersons={allowedPersons}
                sendMail={sendMail}
                setCreateModalData={setCreateModalData}
                createModalData={createModalData}
            />
        )}
        {showMailModal &&(
            <ShowMailModal
            mailModalData={mailModalData}
            setMailModalData={setMailModalData}
            showMailModal={showMailModal}
            closeMailModal={closeMailModal}
            allowedPersons={allowedPersons}
            handleRefrence={handleRefrence}
            />
        )}
    </div>
    <div className="col-1user_id d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example " style={{marginBottom:"3px"}}>
            <Button variant="secondary" onClick={handleNextPage} active>بعدی</Button>
            <Button variant="secondary" active>{page}</Button>
            <Button variant="secondary" onClick={handlePrePage} active>قبلی</Button>
        </ButtonGroup>
    </div>

    </>
    );
}

export default Inbox;
