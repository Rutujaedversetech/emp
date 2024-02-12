import React, { useState } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addempReimbursment } from "../Redux/reimbursment/action";

const ReimbursementRequest = ({onClose,myDecodedToken}) => {
    const[reimbursement_date,setreimbursement_date]=useState('')
    //const[reimbursement_time,setreimbursement_time]=useState('')
    const[reimbursement_amount,setreimbursement_amount]=useState('')
    const[reimbursement_description,setreimbursement_description]=useState('')
   // const[referral_note,setReferral_note]=useState('')
    // const[referral_status,setReferral_status]=useState('')
const dispatch=useDispatch()
const toast=useToast()
const onSubmit=()=>{
    if(reimbursement_date==''||reimbursement_amount==''||reimbursement_description==''){
        toast({
            title: "please fill all the feild",
            status: "info",
            duration: 2000,
            isClosable: true,
            position: "top",
          }); 
    }
    else{
        onClose()
        dispatch(addempReimbursment({
            "reimbursement_date":reimbursement_date,
            "reimbursement_amount":reimbursement_amount,
            "reimbursement_description":reimbursement_description,
            "reimbursement_status":'pending',
            "emp_id":myDecodedToken.emp_id,
        
        
        }))
    }

}

    return (
        <Box mt={'4%'}  w={'100%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Reimbursement Form
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Employee Id</FormLabel>
                    <Input value={myDecodedToken&&myDecodedToken.emp_id} readonly />

                    <FormLabel mt={'2%'}>Description</FormLabel>
                    <Input 
                    onChange={(e)=>setreimbursement_description(e.target.value)}
                    />

                    <FormLabel>Date & Time</FormLabel>
                    <Input 
                    type="datetime-local"
            onChange={(e)=>setreimbursement_date(e.target.value)}

                    />

                    <FormLabel>Amount</FormLabel>
                    <Input 
                    type='number'
                                onChange={(e)=>setreimbursement_amount(e.target.value)}

                    />

                    {/* <FormLabel mt={'2%'}>Status</FormLabel>
                    <Input/> */}

                    {/* <FormLabel mt={'2%'}>Upload Receipt</FormLabel>
                    <Input
                    set
                    /> */}

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            <Link to="/Reimbursement">Cancel</Link>
            </Button>

            <Button ml={'8%'} mt={'-22%'}
            onClick={onSubmit}
            border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            Submit
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default ReimbursementRequest;