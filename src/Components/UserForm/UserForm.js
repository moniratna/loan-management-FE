import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Stack,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  
} from 'react-icons/md';
import {BiRupee} from 'react-icons/bi'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import React,{useState} from 'react';
import DatePicker from "react-datepicker";
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux';
import { loanCreate } from '../../actions/loanActions';
import "react-datepicker/dist/react-datepicker.css";

export default function UserForm() {

  const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    const user = userInfo.toString();
    const user_id = localStorage.getItem('userInfo');
    const isLoggedin = user_id || userInfo.user.id;
    


  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  // const [address2,setAddress2] = useState('');
  const [contact,setContact] = useState('');
  const [email, setEmail] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [emi, setEmi] = useState();
  const [fixed,setFixed] = useState('');
 

  const [emailError, setEmailError] = useState('')

  const dispatch = useDispatch()

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email ')
      setEmail(email)

    } else {
      setEmailError('Enter valid Email!')
    }
  }
  const diff_months=(dt2, dt1)=> {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
   diff /= (60 * 60 * 24 * 7 * 4);
  return Math.abs(Math.round(diff));
  
 }

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(name,address,contact,email,loanAmount,startdate,enddate,emi,fixed )
    dispatch(loanCreate(name, address,contact, email, loanAmount,startdate, enddate, emi,fixed, user))

  } 
  const calculateValue = (e)=>{
    // var dt1 = startdate;
    // var dt2 = enddate;
    const months = diff_months(startdate,enddate);
    // var cal = (loanAmount * 11 *(1+11)**months)
    const interest = (loanAmount * (11 * 0.01)) / months;
      
    // Calculating total payment
    const total = ((loanAmount / months) + interest).toFixed(2);
    console.log(total)
    setEmi(total);
    // console.log("Sometext", emi)
  }
  console.log(emi)
  return (
    <Container bg="#9DC4FB" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          bg="white"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
            
          <Box p={[4,4,4]}>
          <Text color="black" 
          fontWeight="bold" 
          alignContent="center" 
          textAlign="center">Apply For Loan</Text>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={(e)=>setName(e.currentTarget.value)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="mail">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={(e)=>validateEmail(e)} />
                        </InputGroup>
                        <p>{emailError}</p>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Address</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Address"
                          onChange={(e)=>setAddress(e.currentTarget.value)}
                        />
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Start Date</FormLabel>
                        <DatePicker selected={startdate} onChange={(date) =>   
        setStartdate(date)} />  
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>End Date</FormLabel>
                        <DatePicker selected={enddate} onChange={(date) =>   
        setEnddate(date)} />  
                      </FormControl>
                     
                  
                    </VStack>
                  </Box>
                </Box>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Contact Number</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" onChange={(e)=>setContact(e.currentTarget.value)} />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Loan Amount</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiRupee color="gray.800" />}
                          />
                          <Input type="number" size="md" onChange={(e)=>setLoanAmount(e.currentTarget.value)} />
                        </InputGroup>
                      </FormControl>
                      
                      <FormControl id="name">
                        <FormLabel>EMI</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BiRupee color="gray.800" />}
                          />
                          <Input type="number" size="md" value={emi} isRequired />
                        </InputGroup>
                      </FormControl>
                      <Button size="xs" onClick={calculateValue}>Calculate</Button>
                      <Stack spacing={10} direction="row">
                        <CheckboxGroup>
                        <Checkbox value="Fixed" onChange={(e)=>setFixed(e.currentTarget.value)}>Fixed</Checkbox>
                        <Checkbox value="Floating" onChange={(e)=>setFixed(e.currentTarget.value)} >
                          Floating
                        </Checkbox>
                        </CheckboxGroup>
                      </Stack>
                      
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                          onClick={handleSubmit}
                          >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}