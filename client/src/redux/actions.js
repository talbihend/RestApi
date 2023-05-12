import axios from 'axios'
import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_ONE_USER, GET_USERS, GET_USERS_BY_ID } from './actiontypes'

export const getUsers = () => async(dispatch) =>{
    try {
        const res = await axios.get("/get")
        // console.log(res)
        dispatch({
            type: GET_USERS,
            payload: res.data,
        })
    } catch (error) {
        // alert('get error')
        console.log(error)

    }
}

export const addMyNewUser = (fullName,email,phone) => async (dispatch) => {
  const MyNewUser = { fullName,email,phone};
  try {
    const res = await axios.post("/add", MyNewUser);
    dispatch({
      type: ADD_USERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const editUsers = (MyUser) => async (dispatch) => {
  
  try {
    const res = await axios.put(`/update/${MyUser._id}`,MyUser);
    dispatch({
      type: EDIT_USERS,
      payload: res.data,
    });
  } catch (error) {
    alert("there is an error");
    console.log(error)

  }
};


export const deleteUser = (_id) => async (dispatch) => {
    try {
      const res = await axios.delete(`/delete/${_id}`);
      dispatch({
        type: DELETE_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };


  export const getUsersById = (_id) => async(dispatch) =>{
    try {
        const res = await axios.get(`/get/${_id}`)
        console.log(res)
        dispatch({
            type: GET_USERS_BY_ID,
            payload: res.data,
        })
    } catch (error) {
        // alert('get error')
        console.log(error);


    }
  
  };
  
  // export const geOnetUser = () => async(dispatch) =>{
  //   try {
  //       const res = await axios.get("/get")
  //       console.log(res)
  //       dispatch({
  //           type: GET_ONE_USER,
  //           payload: res.data,
  //       })
  //   } catch (error) {
  //       alert('get error');
  //   }}