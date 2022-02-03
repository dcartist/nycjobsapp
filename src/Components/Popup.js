import React,  { useState } from 'react';
import { Dialog } from '@headlessui/react'

export default function Popup(props) {
  let [isOpen, setIsOpen] = useState(false)
  return    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
  <Dialog.Overlay />

  <Dialog.Title>Deactivate account</Dialog.Title>
  <Dialog.Description>
    This will permanently deactivate your account
  </Dialog.Description>

  <p>
  {/* {props.data.facility_name} {props.data.street_address} */}
  </p>

  <button onClick={() => setIsOpen(false)}>Deactivate</button>
  <button onClick={() => setIsOpen(false)}>Cancel</button>
</Dialog>;
}
