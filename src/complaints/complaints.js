import React, { useEffect, useState } from "react";
import { Box, Flex, Textarea, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Editable, EditablePreview, EditableTextarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputGroup, InputRightAddon } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addempCOMPLAINTrequest, getempCOMPLAINTrequest } from "../Redux/complaints/action";


const Complaints = () => {
    const [complaint_date, setSelectedDateTime] = useState('');
    const [complaint_id, setComplaintId] = useState('');
    const [complaint_to, setComplaintTo] = useState('');
    const [complaint_description, setDscription] = useState('')
    const  complaint = useSelector((store) => store.complaints.data);
console.log("complaint",complaint)
const dispatch=useDispatch()
const toast=useToast()
const inputDate = new Date();
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
    console.log('====================================');
    console.log('formattedDate',formattedDate);
    console.log('====================================');
const onsubmit=()=>{
if(complaint_to==''||complaint_description==''){
    toast({
        title: "please fill all the feild",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      }); 
}
    else{
        dispatch(addempCOMPLAINTrequest({
            "complaint_date":formattedDate,
            "complaint_id":complaint_id,
            "complaint_to":complaint_to,
            "complaint_description":complaint_description,
        
        }))
    }


}

useEffect(()=>{
    dispatch(getempCOMPLAINTrequest())
},[])

    return (
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex mt={'10%'} w={'92%'} h={600} borderRadius={'28px'}>
            <Text w={'100%'} mt={34} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
            Complaint Form
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'10px'}  fontFamily="Inter">
                <FormControl>
                    {/* <FormLabel>Complaint Id</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'} 
                    value={complaint_id}
                    onChange={(e)=>setComplaintId(e.target.value)}
                    /> */}

                    <FormLabel mt={5}>Complaint to</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'}
                    value={complaint_to}
                                        onChange={(e)=>setComplaintTo(e.target.value)}

                    />

                    <FormLabel mt={5}>Description</FormLabel>
                    {/* <Editable h={10} boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'} color={'#DADADA'} placeholder="Write your description here."> */}
                        {/* <EditablePreview /> */}
                        <Textarea 
                  onChange={(e)=>setDscription(e.target.value)}
value={complaint_description}
                        />
                    {/* </Editable> */}

                    <FormLabel mt={5}>Date</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'10px'}>
                        <Input 
                        //type="date"
                        value={formattedDate}
                        readOnly
                                         // onChange={(e)=>setSelectedDateTime(e.target.value)}

                        />
                        {/* <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon> */}
                    </InputGroup>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-2%'}  fontFamily="Inter">
            <Button mt={'-36%'} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            <Link to="/">Cancel</Link>
            </Button>
            <Button ml={'8%'} mt={'-36%'} 
            onClick={onsubmit}
            border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            Submit   
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default Complaints;