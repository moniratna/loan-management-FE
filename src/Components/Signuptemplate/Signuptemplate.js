import React from 'react'
import {
    Box,
    Text,
    Flex,
    Image,
    Container,
    Spacer
} from "@chakra-ui/react"

function Signuptemplate({title,subtitle}) {
    return (
        <>    
         
            <Box >
                <Flex
                mt={[6,3,3]}
                alignItems="center" 
                justifyContent="center" 
                flexDirection="column"
                height={["50px","60px","60px"]}
                width="100%"
                bgColor="#F45B69">
                    <Text
                    textAlign="center"
                    fontFamily="Abril Fatface"
                    fontWeight="400"
                    color="#fff"
                    fontSize={["13px","21px","21px"]}
                    >
                        Loan Management 
                    </Text>
                </Flex>
                <Container>
                    <Flex
                     width="100%"
                     justifyContent="space-between"
                     mt={["10px","30px","100px"]}
                     alignItems={["center","flex-start","flex-start"]}
                     flexDirection={["column","row","row"]}
                    >
                        <Box width="100%" mt={[0,0,0,8]}>
                            <Text
                             fontFamily="Abril Fatface"
                             fontWeight="400"
                             fontSize={["22px","35px","35px","48px"]}
                             lineHeight={["30px","40px","40px","67.2px"]}
                             textAlign={["center","start","start"]}
                            
                            >{title}</Text>
                            <Text
                             fontFamily="Inter"
                             fontSize={["13px","15px","15px","18px"]}
                             fontWeight="400"
                             mt={["10px","20px","20px"]}
                             textAlign={["center","start","start"]}
                            >{subtitle}</Text>
                        </Box>
                        
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Signuptemplate
