import React, { useState } from "react";
import { Box, Input, useToast } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { VStack, Stack } from "@chakra-ui/react";
import { Avatar, WrapItem } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { authRegister } from "../../Redux/auth/action";


const EmployeeProfileGeneration = () => {
    const[emp_id,setemp_id]=useState('')
    const[emp_name,setemp_name]=useState('')
    const[emp_email,setemp_email]=useState('')
    const[emp_password,setemp_password]=useState('')
    const[emp_contact,setemp_contact]=useState("")
    const[emp_dept,setemp_dept]=useState("")
    const[emp_address,setemp_address]=useState("")
    const[emp_position,setemp_position]=useState("")
    const[emp_level,setemp_level]=useState("")
    const[emp_reg_status,setemp_reg_status]=useState("successful")
const toast=useToast()
const dispatch=useDispatch()

    const onSubmit=()=>{
        if(emp_dept==""||emp_contact==""||emp_password==""||emp_reg_status==""||
        emp_address==""||emp_position==""||emp_level==""||
        emp_email==""||emp_name==""||emp_id==""){
            toast({
              title: "please fill all the feilds",
              status: "info",
              duration: 2000,
              isClosable: true,
              position: "top",
            }); 
          }else{
           
            dispatch(authRegister({
                "org_id": "Ed001",
                'emp_dept':emp_dept,
                'emp_contact':emp_contact,
                'emp_name':emp_dept,
                'emp_password':emp_password,
                'emp_reg_status':'successfull',
                'emp_address':emp_address,
                'emp_position':emp_position,
                'emp_level':emp_level,
                'emp_email':emp_email,
                'emp_id':emp_id,
        
        
        
            }))
        
        }
        
        
    
    
    
    
    
    
    
    
    
    }
    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
        
            </Flex>
            <Flex w={'100%'} h={'70vh'} >
                <Flex w={'90%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'90%'} mt={'6%'} ml={'6%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Employee Profile Generation
                    </Text>
                </Flex>
    
                <Flex mt={'7%'} ml={'-5%'} w={'90%'} h={'50vh'} variant='outline'>
                    <VStack
                   
                    >
                        <Box h='30vh' ml={'-90%'} w={'200%'}>
                            <Stack direction={['column', 'row']} spacing='24px'>
                                <Box ml={'4%'} w='38%' h={'20vh'}>
                                    <WrapItem>
                                        <Avatar mt={'4%'} ml={'8%'} size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                                    </WrapItem>
                                </Box>
                                <Box w='68%' ml={'-20%'}>
                                    <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Employee Id</FormLabel>
                                    <Input mt={'-1%'} 
                                    onChange={(e)=>setemp_id(e.target.value)}
                                    boxShadow='0px 5px 20px 0px #00000026'/>

                                    <FormLabel mt={'1%'} fontFamily={'inter'} fontSize={'14px'}>Employee Name</FormLabel>
                                    <Input mt={'-1%'} 
                                                                        onChange={(e)=>setemp_name(e.target.value)}

                                    boxShadow='0px 5px 20px 0px #00000026'/>
                                </Box>
                              
                            </Stack>
                        </Box>
                        <Box ml={'-68%'} h='40vh' w={'190%'} fontFamily={'Inter'}>
                            <Flex w={'90%'}>
                                <FormLabel fontSize={'14px'} w={'45%'}>Conatct</FormLabel>
                                <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Email</FormLabel>
                            </Flex>
                            <Flex w={'90%'}>
                                <Input w={'45%'} mt={'-1%'} 
                                    onChange={(e)=>setemp_contact(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                                <Input w={'45%'} mt={'-1%'} ml={'10%'} 
                                  onChange={(e)=>setemp_email(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                            </Flex>

                            <Flex w={'90%'}>
                                <FormLabel fontSize={'14px'} w={'45%'}>Department</FormLabel>
                                <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Position</FormLabel>
                            </Flex>
                            <Flex w={'90%'}>
                                <Input w={'45%'} 
                                 onChange={(e)=>setemp_dept(e.target.value)}

                                mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>
                                <Input w={'45%'} mt={'-1%'} ml={'10%'}  
                            onChange={(e)=>setemp_position(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                            </Flex>

                            <Flex w={'90%'}>
                                <FormLabel fontSize={'14px'} w={'45%'}>Address</FormLabel>
                                <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Registration Status</FormLabel>
                            </Flex>
                            <Flex w={'90%'}>
                                <Input w={'45%'} mt={'-1%'}
                             onChange={(e)=>setemp_address(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                                <Input w={'45%'} mt={'-1%'} ml={'10%'}
                             onChange={(e)=>setemp_reg_status(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                            </Flex>

                            <Flex w={'90%'}>
                                <FormLabel fontSize={'14px'} w={'45%'}>Password</FormLabel>
                                <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Employee Level</FormLabel>
                            </Flex>
                            <Flex w={'90%'}>
                                <Input w={'45%'} mt={'-1%'}
                               onChange={(e)=>setemp_password(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                                <Input w={'45%'} mt={'-1%'} ml={'10%'} 
                                    onChange={(e)=>setemp_level(e.target.value)}

                                boxShadow='0px 5px 20px 0px #00000026'/>
                            </Flex>
                        </Box>
                     
                    </VStack>
                </Flex>
            </Flex>

            <Flex fontFamily="Inter" ml={'64%'} mt={'-6%'}>
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                    <Link to="/BackgroundVerification">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                    <Link to="/OnboardingAsset">Save & Continue</Link>    
                </Button>
            </Flex>

        </Box>
        )
    }
    
 
export default EmployeeProfileGeneration;