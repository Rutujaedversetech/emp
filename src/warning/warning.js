import React, { useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Card, CardBody } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getempCOMPLAINTrequest } from "../Redux/complaints/action";
import { decodeToken } from "react-jwt";


const Warning = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const  complaints = useSelector((store) => store.complaints.data);
    const [product,setProduct]=useState("")
const dispatch=useDispatch()
console.log('====================================');
console.log('complaints',complaints);
console.log('====================================');
const  data = useSelector((store) => store.auth.data);

console.log(data)

const myDecodedToken = decodeToken(data&&data.token);
const myComplaints=complaints&&complaints.filter((el)=>el.rating&&el.complaint_to==myDecodedToken.emp_id)
console.log('====================================');
console.log('myComplaints',myComplaints);
console.log('====================================');
    useEffect(()=>{
      dispatch(getempCOMPLAINTrequest())
  },[])
    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'80%'} borderRadius={'28px'}>
            {myComplaints&&myComplaints.map((el)=>{
                var color=''
                if(el.rating=='1'){
                    color='#2B2B2B'
                }
                else if(el.rating=='2'){
                    color='#0F61AC'
                }
                else if(el.rating=='3'){
                    color='red'
                }
                return <Card bg='' margin={4}>
                <CardBody background={'#2B2B2B1A'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon /> 
                    <SmallCloseIcon ml={'92%'}/>
                    <Flex color={color} mt={'-3%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'}>{el.hr_description}</Text>
                    <Button ml={'80%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={color} colorScheme={color} color={'white'} background={color} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                    Accepted
                    </Button>
                </CardBody>
            </Card>
            })}
            

            {/* <Card mt={4}>
                <CardBody background={'#0F61AC1A'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#0F61AC'}/> 
                    <SmallCloseIcon ml={'92%'}/>
                    <Flex color={'#0F61AC'} mt={'-3%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#0F61AC'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button ml={'80%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#0F61AC'} colorScheme='#0F61AC' color={'white'} background={'#0F61AC'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                    Accepted
                    </Button>
                </CardBody>
            </Card>

            <Card mt={4}>
                <CardBody background={'#F0FFEF'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#027243'}/> 
                    <SmallCloseIcon ml={'92%'}/>
                    <Flex color={'#027243'} mt={'-3%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#027243'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button ml={'80%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#027243'} colorScheme='#027243' color={'white'} background={'#027243'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                    Accepted
                    </Button>
                </CardBody>
            </Card>

            <Card mt={4}>
                <CardBody background={'#FFEFEF'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#AC2734'}/> 
                    <SmallCloseIcon ml={'92%'}/>
                    <Flex color={'#AC2734'} mt={'-3%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#AC2734'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button ml={'80%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#AC2734'} colorScheme='#AC2734' color={'white'} background={'#AC2734'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                    Accepted
                    </Button>
                </CardBody>
             </Card> */}

        </Box>
        )
    }
    
export default Warning;

