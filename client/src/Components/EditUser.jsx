import React, { useState } from 'react'
import { editUsers, getUsers } from '../redux/actions';
import { useDispatch } from "react-redux";
import Modal from "react-modal";



const EditUser = ({user}) => {

const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedOne = {
      _id: user._id,
      fullName,
      email,
      phone
    };
    dispatch(editUsers(editedOne));
    dispatch(getUsers());
    closeModal();
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button className='button-form' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <input className='inputs-form'
            type="text"
            placeholder="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input className='inputs-form'
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className='inputs-form'
            type="text"
            placeholder="phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div>
            <button className='btn-inter-add-ok' type="submit">ok</button>
            <button className='btn-inter-add-cancel' onClick={() => closeModal()}>Cancel</button>
          </div>
        </form>
      </Modal>


    </div>
  )
}

export default EditUser