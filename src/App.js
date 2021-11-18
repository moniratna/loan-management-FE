import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import Header from "./Components/Header";
import Signup from './Components/Signup/Index'
import {BrowserRouter as Router,Routes, useNavigate,Redirect, Route, Link} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Index';
import Loans from './Components/Loans/Index'
import {useDispatch, useSelector} from 'react-redux';
import ProtectedRoute from "./protectedRoute";
import UserForm from "./Components/UserForm/UserForm";

function App() {
  const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log("userinfo",userInfo)
    const user_id = localStorage.getItem('userInfo');
    const isLoggedin = user_id || userInfo;
    // let navigate = useNavigate();
    console.log("status",isLoggedin)
  return (
    <>
    <Router>
      <ChakraProvider>
      
        
        <Route exact path="/" component={Signup} />
        {/* <Route exact path="/dash" element={<Dashboard />} /> */}
        {!isLoggedin ?<Redirect to='/' /> : <Route path="/dash" component={Dashboard} /> }
        
        <Route exact path='/userform' component={UserForm} />
        {/* </Routes> */}
      </ChakraProvider>
  </Router>
  </>
  );
}

export default App;
