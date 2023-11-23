import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
function ShowMailModal({
  mailModalData,
  showMailModal,
  closeMailModal,
}){
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
          <Button variant="secondary" onClick={closeMailModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

     );
}

export default ShowMailModal;