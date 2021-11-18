import {
    USER_DATA_BEGIN,
    USER_DATA_SUCCESS,
    USER_DATA_ERR,
    USER_LOGOUT
} from '../constants/userConstants';

export const userReducer = (state = {}, action) =>{
    
    switch(action.type){
        case USER_DATA_BEGIN:
            return {
                loading: true,
            };
        case USER_DATA_SUCCESS:
            return {
                loading:false,
                userInfo: action.payload
            };
        case USER_DATA_ERR:
            return {
                
                error:action.payload,
                loading:false,
            };
        case USER_LOGOUT:
            return {}
        default:
            return state;
    }
}
