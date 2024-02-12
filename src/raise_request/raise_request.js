import React, { useState } from "react";
import { Box, Flex, Textarea, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Editable, EditableTextarea, EditablePreview, } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addempticket } from "../Redux/ticket/action";

const RaiseRequest = ({onClose,myDecodedToken}) => {
    const[ticket_id,setTicket_id]=useState('')
    const[ticket_category,setTicket_category]=useState('')
    const[ticket_description,setTicket_Description]=useState('')
    const[ticket_priority,setTicket_Priority]=useState('')
    const[ticket_status,setTicket_Status]=useState('')
    const[ticket_generation_time,setTicket_generation_time]=useState('')
const dispatch=useDispatch()
const toast=useToast()
const onSubmit=()=>{
    if(ticket_id==''||ticket_category==''||ticket_description==''||ticket_priority==''){
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
dispatch(addempticket({
    "ticket_id":ticket_id,
    "ticket_category":ticket_category,
    "ticket_description":ticket_description,
    "ticket_priority":ticket_priority,
    "ticket_status":"pending",
    "ticket_generation_time":"25",
    "emp_id":myDecodedToken.emp_id
}

))}

//return ()=>onClose
}
    return (
        <Box mt={'4%'}  bg=''w={'100%'}  >
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create Ticket 
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Ticket Id</FormLabel>
                    <Input placeholder='Ticket Id' 
                    onChange={(e)=>setTicket_id(e.target.value)}
                    />

                    <FormLabel mt={'2%'}>Category</FormLabel>
                        <Select placeholder='Select category'
                        onChange={(e)=>setTicket_category(e.target.value)}
>
                            <option value='IT Support'>IT Support</option>
                            <option value='HR Support'>HR Support</option>
                            <option value='Resignation'>Resignation</option>

                        </Select>

                    <FormLabel mt={'2%'}>Description</FormLabel>
                     <Textarea 
         onChange={(e)=>setTicket_Description(e.target.value)}

                     />

                    <FormLabel mt={'2%'}>Priority</FormLabel>
                    <Select placeholder='Select Priority'
                onChange={(e)=>setTicket_Priority(e.target.value)}

                    >
                       <option value={'urgent'}>Urgent</option>
                        <option value={'high'}>High</option>
                        <option value={'moderate'}>Moderate</option>
                        <option value={'low'}>Low</option>
                    </Select>

                    {/* <FormLabel mt={'2%'}>Status</FormLabel>
                    <Input/> */}
                    <Box marginTop={12}>
<Button m='23' onClick={''} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>
            <Button onClick={onSubmit} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={''} borderColor={'black'}>
            Submit
            </Button>
</Box>

                </FormControl>
            </Flex>
        </Flex>


        
        </Box>
        )
    }
    
export default RaiseRequest;