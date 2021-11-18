import {
    LOAN_CREATE_BEGIN,
    LOAN_CREATE_SUCCESS,
    LOAN_CREATE_ERR,
    LOAN_FETCH_BEGIN,
    LOAN_FETCH_SUCCESS,
    LOAN_FETCH_ERR
} from '../constants/loanConstants';

export const loanCreateReducer = (state = {}, action) =>{
    
    switch(action.type){
        case LOAN_CREATE_BEGIN:
            return {
                loading: true,
            };
        case LOAN_CREATE_SUCCESS:
            return {
                loading:false,
                userInfo: action.payload
            };
        case LOAN_CREATE_ERR:
            return {
                
                error:action.payload,
                loading:false,
            };
        default:
            return state;
    }
}

export const loanFetchReducer = (state = {}, action) =>{
    
    switch(action.type){
        case LOAN_FETCH_BEGIN:
            return {
                loading: true,
            };
        case LOAN_FETCH_SUCCESS:
            return {
                loading:false,
                userInfo: action.payload
            };
        case LOAN_FETCH_ERR:
            return {
                
                error:action.payload,
                loading:false,
            };
        default:
            return state;
    }
}