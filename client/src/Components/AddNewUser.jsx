import   React, { useState } from 'react'
import { addMyNewUser, getUsers } from '../redux/actions';
import { useDispatch } from "react-redux";
import Modal from "react-modal";

const AddNewUser = () => {
  // const [FullName, setFullName] = useState("");
  // use
  
const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMyNewUser( fullName,email,phone));
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
      <button className="add-user" onClick={openModal}>Add user</button>
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

export default AddNewUser