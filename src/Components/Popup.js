import React,  { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import Mapalt from "./Mapalt"
export default function Popup(props) {
const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <Mapalt {...props.data} longitude={props.data.longitude} latitude={props.data.latitude}></Mapalt>
            <Modal.Title>{props.data.facility_name}</Modal.Title>
            <hr></hr>
            <p>{props.data.street_address}</p>
            <p>{props.data.city} {props.data.zip}</p>
            <p>{props.data.phone_number_s}</p>
            <p>{props.data.nta}</p>
            </Modal.Body>
        <Modal.Footer>
      
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
