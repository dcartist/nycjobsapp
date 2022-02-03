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
        dialogClassName="modal-90w" size="lg">
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <Mapalt longitude={props.data.longitude} latitude={props.data.latitude}></Mapalt>
            <Modal.Title>{props.data.facility_name}</Modal.Title>
            <p>{props.data.street_address}</p>
            <p>{props.data.city} {props.data.zip}</p>
            <p>{props.data.phone_number_s}</p>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
