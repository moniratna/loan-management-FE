import Signuptemplate from '../Signuptemplate/Signuptemplate'
import React ,{useState,useEffect}from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {login } from '../../actions/userActions'
import GoogleLogin from 'react-google-login'
import Button from '../Button/buttons'
import Header from '../Header';
import './AuthLogin.css'
import {
    Box,
    Text,
    Flex,
    Image,
    Container
} from '@chakra-ui/react'
import axios from 'axios'

function Index() {
    // const router  = useRouter();
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log("userInfo", userInfo)

const responseGoogle = (response) => {
    console.log(response)
    const Obj = response.profileObj
    const data = { name: Obj.name, id: Obj.googleId, image: Obj.imageUrl, email: Obj.email }
    localStorage.setItem('Image', data.image)
    localStorage.setItem('Id', data.id)
    localStorage.setItem('Email', data.email)
    localStorage.setItem('Name', data.name)
    if(response){
        dispatch(login(response.tokenId))
    }
}
    return (
        <>
        <Box>
            <Signuptemplate
             title="Apply For Personal Loan"
             subtitle="Loans to Salaried Customers not maintaining Salary Account with us"
            />
            <Container>
            <Flex
             alignItems={["center","flex-start","flex-start"]}
             flexDirection="column"
             marginTop={["10px","-120px","-130px","-160px"]} 
             zIndex={99}
             marginLeft={["0","100px","70px"]}
             marginTop={"100px"}>
                <GoogleLogin
                    clientId="117146700284-7h2s05jo0sveqph0vjuodhukbgofqmq1.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        >
                            <div className="btn_loginss d-flex align-items-center">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1024px-Google_%22G%22_Logo.svg.png"
                                    className="logo_login"
                                />
                                <p>Continue with Google</p>
                            </div>
                        </button>
                    )}
                    cookiePolicy={'single_host_origin'}
                />
                {/* <Button /> */}
            </Flex>
            </Container>
       </Box>
       </>
    )
}

export default Index
