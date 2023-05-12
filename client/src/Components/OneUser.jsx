import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersById } from "../redux/actions";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { CgNametag } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";

const OneUser = () => {
  const { _id } = useParams();
  console.log(_id);
  const { user } = useSelector((state) => state);
  //const theUser = users.find((el) => el._id == id);
console.log(user)
  const dispatch = useDispatch();

  useEffect(() => { dispatch(getUsersById( _id));
    
  }, [])
  

  return (
    user && 
    <div className="user-form">
      {
        user && 
        <>
      <h3><CgNametag className="full-name-form"/>{user.fullName}</h3>
        <h3><SiGmail className="email-form"/>{user.email}</h3>
        <h3><BsFillTelephoneOutboundFill className="phone-form"/>{user.phone}</h3>
        <Link to="/">
          <button>Back to home</button>
        </Link>
        </>
}
    </div>
  );
};

export default OneUser;
