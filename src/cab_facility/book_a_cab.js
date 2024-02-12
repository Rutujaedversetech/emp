import React, { useState } from "react";
import { Box, Flex, InputRightAddon, Spacer, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";
import { InputGroup } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addempcabrequest } from "../Redux/cab/action";



const BookACab = ({onClose,myDecodedToken}) => {
    const dispatch = useDispatch();

    const [cab_from, setFrom] = useState('');
    const [cab_to, setToperson] = useState('');

    const [cab_date, setSelectedDateTime] = useState('');

const toast=useToast()
const onSubmit=()=>{
    console.log('====================================');
    console.log(cab_from,cab_to,cab_date);
    console.log('====================================');
    if(cab_from==""||cab_to==""||cab_date=="")
    {
      toast({
        title: "please fill all the feilds",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      }); 
    }
else{
    dispatch(addempcabrequest({ 
            
        "cab_from": cab_from,
        "cab_to": cab_to,
        // "asset_status": asset_status,
        "cab_date": cab_date,
        "emp_id": myDecodedToken.emp_id
    
 }));  
}
    
}
    return (
        <Box mt={'5%'}  w={'100%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'98%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={39} ml={45} fontFamily="Inter" fontSize="36px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Book Your Cab
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>

                    <FormLabel fontSize={'28px'}>Destination</FormLabel>
                    <FormLabel mt={5}>Date & Time</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}>
                        <Input type="datetime-local" onChange={(e)=>setSelectedDateTime(e.target.value)}/>
                        {/* <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon> */}
                    </InputGroup>
                  
                    <FormLabel mt={5}>From</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} 
                    onChange={(e)=>setFrom(e.target.value)}
                    />

                    <FormLabel mt={5}>To</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'}  
                    onChange={(e)=>setToperson(e.target.value)}
                    />
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
    
export default BookACab;