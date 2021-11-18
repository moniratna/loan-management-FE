import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userReducer
} from './reducers/userReducer';
import { loanCreateReducer, loanFetchReducer } from './reducers/loanReducer';
const reducer = combineReducers({
    userLogin : userReducer,
    loanCreate : loanCreateReducer,
    loanGet : loanFetchReducer
})
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage}
}
const middleware = [thunk]


const store = createStore(
    reducer,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;