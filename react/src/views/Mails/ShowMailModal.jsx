import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
function ShowMailModal({
    showCreateModal,
    closeCreateModal,
}){
    return ( 
        <div>
      <Modal show={showCreateModal} onHide={closeCreateModal} size="lg">
        <Modal.Header closeButton >
          {/* <Modal.Title >ویرایش نقش</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>عنوان</Form.Label>
              <Form.Control
                type="text"
                name="title"
                // onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label> متن</Form.Label>
              <Form.Control 
                as="textarea" 
                name="description"
                rows={3}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeCreateModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

     );
}

export default ShowMailModal;