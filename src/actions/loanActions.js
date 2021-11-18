import axios from 'axios';
import swal from 'sweetalert';

import {
    LOAN_CREATE_BEGIN,
    LOAN_CREATE_SUCCESS,
    LOAN_CREATE_ERR,
    LOAN_FETCH_BEGIN,
    LOAN_FETCH_SUCCESS,
    LOAN_FETCH_ERR,
    
} from '../constants/loanConstants';

export const loanCreate = (name, address1,contact, email, loanAmount, startdate, enddate,emi, scheme, id) => async (dispatch) =>{
    try {
        dispatch({
            type: LOAN_CREATE_BEGIN
        })
        const {data} = await axios.post(
            'http://localhost:5000/api/loans/create',
            {name, address1, contact, email, loanAmount, startdate, enddate,emi, scheme, id}
        )
        dispatch({
            type:LOAN_CREATE_SUCCESS,
            payload:data,
        })
        swal("Good job!", "Loan Creation Successful", "success");
        // document.location.href = '/dash'

        // localStorage.setItem('userInfo', JSON.stringify(data.user._id))
    } catch (error) {
        dispatch({
            type: LOAN_CREATE_ERR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}

export const loanFetch = (id) => async (dispatch) =>{
    console.log(id)
    try {
        dispatch({
            type: LOAN_FETCH_BEGIN
        })
        
        const {data} = await axios.post(
            'http://localhost:5000/api/loans',
            {id}
        )
        console.log(data)
        dispatch({
            type:LOAN_FETCH_SUCCESS,
            payload:data,
        })
        // document.location.href = '/dash'

        // localStorage.setItem('userInfo', JSON.stringify(data.user._id))
    } catch (error) {
        dispatch({
            type: LOAN_FETCH_ERR,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        })
    }

}