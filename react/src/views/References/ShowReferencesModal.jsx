import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import PrintableView from './PrintableView';
import Select from 'react-select';
import { useState, useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
function ShowReferencesModal({
  mailModalData,
  setMailModalData,
  showMailModal,
  closeMailModal,
  allowedPersons,
  handleRefrence
}){
  const [refrenceField, setRefrenceField] = useState(false);
  const options = allowedPersons.map(item => ({
    value: item.id,
    label: `${item.first_name} ${item.last_name} - ${item.role_id}`
  }));
  const handlePrint = () => {
    let printWindow = window.open('', '_blank');
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
  }
    // printWindow.print();
    const handleRefrenceDescription = (e) => {
      const { name, value } = e.target;
      setMailModalData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    const handleSelectChange = (selected) => {
      console.log(selected);
      setMailModalData((prevData) => ({
        ...prevData,
        ['refrence_id']: selected.value,
      }));
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
              
          {refrenceField ? (
            <>
            ارجاع به
          <Select
            onChange={handleSelectChange}
            options={options}
            isSearchable={true}
            placeholder="سرچ کنید"
          />
          <Form.Group className=" mt-2 mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label> متن ارجاع</Form.Label>
              <Form.Control 
                as="textarea" 
                name="refrence_description"
                rows={3}
                onChange={handleRefrenceDescription}
                />
            </Form.Group>
            <Button variant="danger" onClick={()=>setRefrenceField(!refrenceField)} className=" mt-1 d-block">
              بستن          
            </Button>
            <Button variant="success" onClick={handleRefrence} className=" mt-1 d-block mx-auto">
            تایید        
           </Button>
            </>
        ):(
          <Button variant="success" onClick={()=>setRefrenceField(!refrenceField)} className=" mt-1 d-block">
          ارجاع 
          </Button>
        )}
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

export default ShowReferencesModal;