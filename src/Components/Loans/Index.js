import Card from '../Card/Index'
import React,{useEffect, useState} from 'react'
import {SimpleGrid, Container,Text} from '@chakra-ui/react'
import Header from '../Header';
import {useDispatch, useSelector} from 'react-redux';
import { loanFetch } from '../../actions/loanActions';

export default function Index() {
  const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    console.log("userInfo", userInfo.toString())
    const user = userInfo.toString();
    const user_id = localStorage.getItem('userInfo');
    const isLoggedin = user_id || userInfo;

 const loanGet = useSelector(state=>state.loanGet)
 console.log("loanGet",loanGet)

 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(loanFetch(user))

 }, [dispatch])
 const [data, setData] = useState([]);
 useEffect(() => {
   if(loanGet){
     setData(loanGet.userInfo);
   }
 }, [loanGet])
 
    return (
        <>
        <Header />
        <Container maxW="80rem" centerContent>
        <SimpleGrid columns={[1, 2, 1, 2]}>
          {data ? data.map((item)=> {
            const { _id,loanAmount,name,scheme,emi,enddate} = item;
            return (
              <Card
                key={_id}
                product={loanAmount}
                summary={name}
                longLine={scheme}
                emi={emi}
                enddate={enddate}
              />
            );
          }): <Text style={{marginTop:'100px'}}>You don't have Any loans</Text> }
        </SimpleGrid>
      </Container>
      </>
    )
}
