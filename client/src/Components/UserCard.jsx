import React from 'react'
import EditUser from './EditUser'
import { deleteUser, getUsers, getUsersById } from '../redux/actions';
import {useDispatch} from 'react-redux';
import {SiGmail} from "react-icons/si";
import {BsFillTelephoneOutboundFill} from "react-icons/bs";
import {CgNametag} from "react-icons/cg";
import { Link } from 'react-router-dom';


const UserCard = ({user}) => {
  const dispatch = useDispatch();

  return (
    <div className="user-form">
        <h3><CgNametag className="full-name-form"/>{user.fullName}</h3>
        <h3><SiGmail className="email-form"/>{user.email}</h3>
        <h3><BsFillTelephoneOutboundFill className="phone-form"/>{user.phone}</h3>
        <div className='div-button'>
        
        <button className='button-form' onClick={()=>{dispatch(deleteUser(user._id)) ; dispatch(getUsers())}}  >Delete</button>
        <EditUser user={user}/>
        <Link to={`/get/${user.id}`}>
        <button className='button-fbyID-form' onClick={()=>{dispatch(getUsersById(user._id)) }}  >Get user by ID</button>
        </Link>
          
        </div>
    </div>
  )
}

export default UserCard