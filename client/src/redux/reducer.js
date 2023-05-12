import { ADD_USERS, DELETE_USERS, EDIT_USERS, GET_ONE_USER, GET_USERS, GET_USERS_BY_ID } from "./actiontypes";


const init= {
    loading:true,
    users:null,
    user:null
}

const reducer = (state=init,{type,payload}) => {
    switch (type) {
        case GET_USERS:
            return{
                ...state, loading:false, users:payload,
            };

            case ADD_USERS:
                return {
                  ...state,
                  users: [...state.users, payload],
                };

            case EDIT_USERS:
                return {
                  ...state,
                  users: state.users.map((el) => el._id === payload._id ? {...el,...payload} : el),
                };


            case DELETE_USERS :
                return {
                  ...state,
                  users: state.users.filter((el) => el._id !== payload),
                };
          

                case GET_USERS_BY_ID :
                return {
                  ...state,
                  user: state.user=payload,
                };

                // case GET_ONE_USER:
                //     return{
                //         ...state, loading:false, users:payload._id,
                //     };
          
        default: 
        return state;
    }
};
export default reducer;