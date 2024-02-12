import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateCOMPLAINTStatus } from "../../Redux/complaints/action";


const EmployeeWarningSendthree = ({data1}) => {
    console.log('====================================');
    console.log('EmployeeWarningSend',data1);
    console.log('====================================');
    const[product,setProduct]=useState(data1)
const dispatch=useDispatch()
    const[complaint_hrdescription,setcomplaint_hrdescription]=useState('')
    const sendComplaint=()=>{
        dispatch(updateCOMPLAINTStatus(data1.complaint_id,{...data1,
            'hr_description':complaint_hrdescription,
          'rating':"3"
        }))
    }
    return (
        <Box >
        <Flex >
            <Text w={'100%'} mt={'10%'} ml={'10%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                Second Warning
            </Text>

            <Flex ml={'-90%'} mt={'18%'} w={'100%'} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Complaint Id</FormLabel>
                    <Input value={product.complaint_id} readOnly/>
                
                    <FormLabel mt={'0%'}>Warning To</FormLabel>
                    <Input value={product.complaint_to} readOnly/>

                    <FormLabel mt={'0%'}>Description</FormLabel>
                    <Textarea onChange={(e)=>setcomplaint_hrdescription(e.target.value)}/>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'14%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
                Cancel
            </Button>

            <Button ml={'8%'} onClick={sendComplaint} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline'  borderColor={'black'}>
                Send   
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default EmployeeWarningSendthree;