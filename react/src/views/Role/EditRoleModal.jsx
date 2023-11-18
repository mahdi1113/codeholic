import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const EditRoleModal = ({data, showModal, closeModal, handleDelete}) => {
  return (
    <div>
      <Modal show={showModal} onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title >ویرایش نقش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>title : </p>
          <h4>{data.title}</h4>
          <p>description : </p>
          <h5>{data.description}</h5>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleDelete} className=" mt-1 d-block mx-auto">
            حذف
          </Button>
        <Button variant="success" onClick={closeModal} className=" mt-1 d-block mx-auto">
            تایید
          </Button>
          <Button variant="secondary" onClick={closeModal} className=" mt-1 d-block mx-auto">
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditRoleModal;
