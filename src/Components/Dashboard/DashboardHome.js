import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom';

import Loans from '../Loans/Index'
import Header from '../Header';
import {
    Box,
    Text,
    Flex,
    Image,
    Container
} from '@chakra-ui/react'
import {useDispatch, useSelector} from 'react-redux';
import UserForm from '../UserForm/UserForm';


export default function DashboardHome() {

    // let navigate = useHistory();
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log(userLogin)
    const userId = localStorage.getItem('userInfo');
    useEffect(() => {
        
        if(!userId){
            
        }
    }, [])
    return (
        <div>
            <Header />
            {/* <NewSidebar /> */}
            {/* <Box alignContent="center" alignItems="center" pl="500px"> 
            <Flex style={{alignContent:"center", alignItems:"center", paddingLeft:"80px"}}> */}
            {/* <Form /> */}
            {/* </Flex> */}
            <UserForm />
            {/* </Box> */}
            
        </div>
    )
}
