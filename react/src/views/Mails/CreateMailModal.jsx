import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import { useState, useEffect } from "react";
function CreateMailModal({
    showCreateModal,
    closeCreateModal,
    data,
    sendMail,
    setCreateModalData,
}){
  const options = data.map(item => ({
    value: item.id,
    label: `${item.name} - ${item.role.title}`
  }));
  const handleFromChange = (e) => {
    const { name, value } = e.target;
    setCreateModalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  const handleSelectChange = (selected) => {
    setCreateModalData((prevData) => ({
      ...prevData,
      ['receiv_id']: selected.value,
    }));
  };
  
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
                onChange={handleFromChange}
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
                onChange={handleFromChange}
                />
            </Form.Group>
          </Form>
          ارسال به 
          <Select
            onChange={handleSelectChange}
            options={options}
            isSearchable={true}
            placeholder="سرچ کنید"
          />
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={sendMail} className=" mt-1 d-block mx-auto">
            ارسال
          </Button>
          <Button variant="secondary" onClick={closeCreateModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

     );
}

export default CreateMailModal;