import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PrintableView from './PrintableView';
import { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
function ShowMailModal({
  mailModalData,
  showMailModal,
  closeMailModal,
}){
  const handlePrint = () => {
    let printWindow = window.open('', '_blank');
    // console.log(mailModalData);
    // console.log(mailModalData.created_at);
    //   console.log(mailModalData.id);
    //     console.log(mailModalData.recive_user.name);
    //       console.log(mailModalData.recive_user.role.title);
    //         console.log(mailModalData.title);
    //           console.log(mailModalData.description);
    //             console.log(mailModalData.user.name);
    //               console.log(mailModalData.user.role.title);
    let printableContent = ReactDOMServer.renderToStaticMarkup(
    <PrintableView 
      created_date={mailModalData.created_at}
      mail_id={mailModalData.id}
      recive_name={mailModalData.recive_user.name}
      recive_role={mailModalData.recive_user.role.title}
      mail_title={mailModalData.title}
      mail_description={mailModalData.description}
      sender_name={mailModalData.user.name}
      sender_role={mailModalData.user.role.title}
     />
    );
    printWindow.document.write(printableContent);
    printWindow.document.close();
    // printWindow.print();
  }
    return ( 
        <div>
      <Modal show={showMailModal} onHide={closeMailModal} size="lg">
        <Modal.Header closeButton >
          {/* <Modal.Title >ویرایش نقش</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              عنوان
              <div className="p-3 border">{mailModalData.title}</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              متن
              <div className="p-2 border">{mailModalData.description}</div>
            </Form.Group>
              
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={handlePrint} className=" mt-1 d-block mx-auto">
            چاپ
        </Button>
          <Button variant="secondary" onClick={closeMailModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

     );
}

export default ShowMailModal;