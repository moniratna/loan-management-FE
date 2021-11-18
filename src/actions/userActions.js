import axios from 'axios';
import {
    USER_DATA_BEGIN,
    USER_DATA_SUCCESS,
    USER_DATA_ERR,
    USER_LOGOUT
} from '../constants/userConstants';

export const login = (tokenId) => async (dispatch) =>{
    try {
        dispatch({
            type: USER_DATA_BEGIN
        })
        const {data} = await axios.post(
            'https://loan-management-backend.herokuapp.com/api/users',
            {tokenId}
        )
        dispatch({
            type:USER_DATA_SUCCESS,
            payload:data,
        })
        document.location.href = '/dash'
console.log(data)
        localStorage.setItem('userInfo', JSON.stringify(data.user._id))
    } catch (error) {
        dispatch({
            type: USER_DATA_ERR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('Image')
    localStorage.removeItem('Id')
    localStorage.removeItem('Email')
    localStorage.removeItem('Name')

    dispatch({ type: USER_LOGOUT })

    document.location.href = '/'
  }