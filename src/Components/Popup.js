import React,  { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Mapalt from "./Mapalt"
export default function Popup(props) {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(props)
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {props.data.facility_name}
      </Button>

      <Modal show={show} onHide={handleClose} 
        dialogClassName="modal-90w">
        <Modal.Header closeButton>
          <Modal.Title>{props.data.facility_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Mapalt longitude={props.data.longitude} latitude={props.data.latitude}></Mapalt>
            {props.data.street_address}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
