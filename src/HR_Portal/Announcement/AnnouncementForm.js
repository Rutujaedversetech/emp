import React, { useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box, InputGroup, Input, FormControl, FormLabel, InputRightAddon, Button, Link } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addempANNOUCEMENT } from "../../Redux/announcement/action";

const AnnouncementForm = ({onClose}) => {
    const[anno_date_from,setanno_date_from]=useState('')
    const[anno_date_to,setanno_date_to]=useState('')
    const[events,setevents]=useState('')
    const[anno_title,setanno_title]=useState('')

    const[anno_category,setanno_category]=useState('')
    const[anno_description,setanno_description]=useState('')

   

const dispatch=useDispatch()

const toast=useToast()

const inputDate = new Date(anno_date_to);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    const inputDate1 = new Date(anno_date_from);
    const day1 = inputDate1.getDate().toString().padStart(2, '0');
    const month1 = (inputDate1.getMonth() + 1).toString().padStart(2, '0');
    const year1 = inputDate1.getFullYear();
    
    const formattedDate2 = `${day1}/${month1}/${year1}`;
    
    console.log(formattedDate);
    

    

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

console.log('====================================');
console.log(anno_title);
console.log('====================================');




    const onSubmitAnnounce=()=>{
        if(anno_date_from==""|| events==''||anno_description==""||anno_date_to==""||anno_title==""||anno_category==""){
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
                title: "please fill valid announcement dates",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top",
              });
            }else{
            onClose()
            dispatch(addempANNOUCEMENT({
                'anno_date_to':formattedDate,
                'anno_description':anno_description,
                'anno_date_from':formattedDate2,
                'anno_title':anno_title,
                'anno_category':anno_category,
                 'events':events
        
        
        
            }))
        
        }
        
        }
    
    }

    return (
        <>
                <Box mt={'5%'} ml={''} w={'100%'} h={''} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                <Flex w={'92%'} h={640} borderRadius={'28px'}>
                    <Text w={'100%'} mt={'8%'} ml={45} fontFamily="Inter" fontSize="36px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                      General Announcement
                    </Text>
        
                    <Flex ml={'-92%'} mt={'16%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                        <FormControl>
                            <FormLabel fontSize={'18px'}>Title</FormLabel>
                            <Input boxShadow='0px 5px 20px 0px #00000026'
                          onChange={(e)=>setanno_title(e.target.value)}

                            />

<FormLabel mt={'4%'} fontSize={'18px'}>Events</FormLabel>
                            <Select placeholder='Select category' 
                            onChange={(e)=>setevents(e.target.value)}

                            boxShadow='0px 5px 20px 0px #00000026'>
                                <option value={'holidays'}>Holiday</option>
                                <option value={'announcement'}>Announcement</option>

                            </Select>


                            <FormLabel mt={'4%'} fontSize={'18px'}>Announcement Type</FormLabel>
                            <Select placeholder='Select category' 
                            onChange={(e)=>setanno_category(e.target.value)}

                            boxShadow='0px 5px 20px 0px #00000026'>
                                <option value={'holidays'}>Holiday</option>
                                <option value={'events'}>Events</option>
                                <option>xyz</option>
                            </Select>

                            <FormLabel fontSize={'18px'}>Description</FormLabel>
                            <Input boxShadow='0px 5px 20px 0px #00000026'
                          onChange={(e)=>setanno_description(e.target.value)}

                            />

                            <Flex w={'100%'}>
                                <FormLabel mt={'4%'} w={'45%'} fontSize={'18px'}>Start Date</FormLabel>
                                
                                <FormLabel mt={'4%'} w={'45%'} ml={'10%'} fontSize={'18px'}>End Date</FormLabel>
                            </Flex>
                        
                            <Flex w={'100%'} >
                                <InputGroup boxShadow={'0px 5px 20px 0px #00000026'} w={'45%'} >
                                    <Input type="date" 
                                    onChange={(e)=>setanno_date_from(e.target.value)}/>
                                </InputGroup>
                                <InputGroup boxShadow={'0px 5px 20px 0px #00000026'} ml={'10%'} w={'45%'}>
                                <Input type="date"
                                    onChange={(e)=>setanno_date_to(e.target.value)}/>
                                    </InputGroup>
                            </Flex>
                        </FormControl>
                    </Flex>
                </Flex>
        
                <Flex ml={'58%'} mt={'-5%'}  fontFamily="Inter">
                    <Button mt={'-32%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#DADADA'} variant='outline' borderColor={'#DADADA'}>
                    <Link to="/Announcement">Cancel</Link>
                    </Button>
                    <Button ml={'8%'} mt={'-32%'}
                    onClick={onSubmitAnnounce}
                    border={'1px'} borderRadius={'10px'} colorScheme='black' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
                    Save & Continue 
                    </Button>
                </Flex>
                </Box>
 
        </>
        )
    }
    
export default AnnouncementForm;