import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import PrintableView from './PrintableView';
import { useState, useEffect } from "react";
function CreateMailModal({
    showCreateModal,
    closeCreateModal,
    allowedPersons,
    sendMail,
    setCreateModalData,
    createModalData,
}){
  const options = allowedPersons.map(item => ({
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
      ['recive_id']: selected.value,
    }));
  };
  // const handlePrint = () => {
  //   let printWindow = window.open('', '_blank');
  //   console.log(createModalData);
  //   let printableContent = ReactDOMServer.renderToStaticMarkup(
  //     <PrintableView 
  //     created_date={createModalData.created_at}
  //     mail_id={createModalData.id}
  //     recive_name={createModalData.recive_user.name}
  //     recive_role={createModalData.recive_user.role.title}
  //     mail_title={createModalData.title}
  //     mail_description={createModalData.description}
  //     sender_name={createModalData.user.name}
  //     sender_role={createModalData.user.role.title}
  //    />
  //   );
  //   printWindow.document.write(printableContent);
  //   printWindow.document.close();
  //   printWindow.print();
  // }
    return ( 
        <div>
      <Modal show={showCreateModal} onHide={closeCreateModal} size="lg">
        <Modal.Header closeButton >
          {/* <Modal.Title >ویرایش نقش</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="ControlInput1">
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
              controlId="ControlTextarea1"
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
        {/* <Button variant="primary" onClick={handlePrint} className=" mt-1 d-block mx-auto">
            چاپ
        </Button> */}
          <Button variant="secondary" onClick={closeCreateModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

     );
}

export default CreateMailModal;