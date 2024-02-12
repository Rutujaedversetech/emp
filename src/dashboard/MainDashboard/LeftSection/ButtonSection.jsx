import { ArrowForwardIcon, ChevronDownIcon, EmailIcon } from '@chakra-ui/icons'
import { Box, ButtonGroup,Button, Text,Flex, Heading, Spacer, Input, useDisclosure, FormControl, FormLabel, Stack, HStack, VStack, Textarea, Select, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineFilter,AiFillCaretDown } from 'react-icons/ai'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { addempLEAVE } from '../../../Redux/leaves/action'
import { decodeToken } from 'react-jwt'
const FiltrButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [type_of_leave, settype_of_leave] = useState('');
    const [leave_date_from, setleave_date_from] = useState('');
    const [leave_date_to, setleave_date_to] = useState('');
    const [leave_duration, setleave_duration] = useState('');
    const [leave_reason, setleave_reason] = useState('');
    const  data = useSelector((store) => store.auth.data);

    const inputDate = new Date(leave_date_to);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    const inputDate1 = new Date(leave_date_from);
    const day1 = inputDate1.getDate().toString().padStart(2, '0');
    const month1 = (inputDate1.getMonth() + 1).toString().padStart(2, '0');
    const year1 = inputDate1.getFullYear();
    
    const formattedDate2 = `${day1}/${month1}/${year1}`;
    
    console.log(formattedDate);
    

    const myDecodedToken = decodeToken(data.token);
    const dispatch=useDispatch()


    function calculateInclusiveDateDifference(startDateStr, endDateStr) {
      // Parse the date strings into Date objects (considering DD/MM/YYYY format)
      const startDateParts = startDateStr.split('/');
      const endDateParts = endDateStr.split('/');
    
      const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
      const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);
    
      // Calculate the difference in milliseconds
      const timeDifference = endDate.getTime() - startDate.getTime();
    
      // Convert the difference to days and add 1 for inclusive count
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    
      return daysDifference;
    }
    
    // Example usage:
    const startDateStr = formattedDate2;
    const endDateStr = formattedDate;
    
    const daysDifference = calculateInclusiveDateDifference(startDateStr, endDateStr);
    
    console.log(`The inclusive difference between ${startDateStr} and ${endDateStr} is ${daysDifference} days.`);
    const toast=useToast()
const onSubmit=()=>{
  if(type_of_leave==""||leave_date_from==""||leave_date_to==""||leave_reason==""){
    toast({
      title: "please fill all the feilds",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    }); 
  }else{
    if(daysDifference<0){
      toast({
        title: "please fill valid leaves dates",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }else{
    onClose()
  dispatch(addempLEAVE({
    "type_of_leave":type_of_leave,
    "leave_date_from":formattedDate2,
    "leave_date_to":formattedDate,
    "leaves_status":'pending',

    "leave_duration":daysDifference,
    "leave_reason":leave_reason,
"emp_id":myDecodedToken.emp_id
  }))}

}
}

  return (
<Box  px={{ base: 4, md: 8 }} bg=''
      py={'2'}>      
        <Flex minWidth='max-content' alignItems='center' gap='2' pt={5} px={{ base: 2, sm: 12, md: 17 }} >
    <ButtonGroup gap='2'>
    <Button  bg='white' colorScheme='' variant='outline' color={'black'}>
    Leave Reports
  </Button>

  
 </ButtonGroup>
  <Spacer />

  <Box p='2'>
  <ButtonGroup gap='2'>

  <Button leftIcon={<ArrowForwardIcon />} colorScheme='' variant='outline'>
    Export CSV
  </Button>
  <Button  bg='black' variant='outline' color={'orange'} onClick={onOpen}>
    Leave Request
  </Button>




      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        size={'xl'}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Leave Request</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Leave Type</FormLabel>
                  {/* <Input type="text" /> */}
                  <Select placeholder='Full Day' onChange={(e)=>settype_of_leave(e.target.value)}>
  <option value='full_day'>Full Time</option>
  <option value='half_day'>part Time</option>
</Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Duration in Days</FormLabel>
                  <Input type="number" value={daysDifference} readOnly
                  // onChange={(e)=>setleave_duration(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
          <Stack>
          <VStack bg='' align={'start'}>
            <Text as={'b'}>Dates</Text>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={'gray'}>From</FormLabel>
                  <Input type="date" 
                  onChange={(e)=>setleave_date_from(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={'gray'}>To</FormLabel>
                  <Input type="date"
                  onChange={(e)=>setleave_date_to(e.target.value)}
                  />
                </FormControl>
              </Box>
            </VStack>
          </Stack>
            <FormControl id="email" isRequired>
              <FormLabel>Reasons</FormLabel>
              <Textarea
              onChange={(e)=>setleave_reason(e.target.value)}
              />
            </FormControl>


            
          </Stack>
          </ModalBody>

          <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
            <Button  bg='black' variant='outline' color={'orange'} onClick={onSubmit}>
    Request Now
  </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>









  </ButtonGroup>
  </Box>
</Flex>
    </Box>
  )
}

export default FiltrButton



