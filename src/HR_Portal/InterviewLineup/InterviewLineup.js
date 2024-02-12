import React, { useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { WrapItem, Avatar } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateAPPLICATIONStatus } from "../../Redux/application/action";


const InterviewLineup = (onclose,data) => {
    const [dateTime, setdateTime] = useState("");
    const [interviewer, setinterviewer] = useState("");
    const [meeting_details, setmeeting_details] = useState("");
    const toast=useToast()
    const dispatch=useDispatch()
    console.log('1',data,onclose);
    const onSubmit=()=>{
        if(dateTime==""||interviewer==""||meeting_details=="")
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
          onclose()
    //       dispatch(updateAPPLICATIONStatus(data.candidate_id,{ 
    //           ...data,
    //          "dateTime_l1": dateTime,
    //         "interviewer_l1": interviewer,
    //          "meeting_details_l1": meeting_details,
    //         "technical_l1_status":"in_review"
        
    //  }));
        }
    }

    return (
        <Box mt={'2%'} w={'100%'} h={''} >
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
             
            </Flex>

            <Flex w={'100%'} bg={''} direction={'column'}>
                <Flex w={'100%'} h={''} fontFamily={'Inter'} >
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Technical Round 1
                    </Text>
                </Flex>
                <Flex bg={''}  w={'100%'} h={''}>
                    <Flex  w={'100%'} h={''}>
                        <Stack direction={['column', 'row']} spacing='24px' w={'100%'}>
                            <Box w='30%' h=''>
                            <WrapItem>
                                <Avatar mt={'4%'} ml={'16%'} size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                            </WrapItem>
                            </Box>
                            <Box w='30%' h='20vh' mt={'6%'} ml={'12%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Name</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>{data.candidate_name}</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Experience</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>{data.candidate_exp_in_years}</FormLabel>
                            </Box>
                            <Box w='30%' h='20vh' mt={'6%'} ml={'8%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Location</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Pune</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Type</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>{data.job_type}</FormLabel>
                            </Box>
                        </Stack>
                    </Flex>
                    
                </Flex>

                <Flex mt={''}  w={'90%'}>
                        <FormControl mt={'6%'}  w={'100%'} fontFamily={'Inter'}>
                            <FormLabel>Interview date & Time</FormLabel>
                            <Input
                            type='datetime-local'
                            onChange={(e) => setdateTime(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel>Interviewer</FormLabel>
                            <Input onChange={(e) => setinterviewer(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel>Interview Details</FormLabel>
                            <Input onChange={(e) => setmeeting_details(e.target.value)} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>



                        </FormControl>
                    </Flex>
                
            </Flex>

            <Flex fontFamily="Inter"  >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/InterviewLineup">Cancel</Link>
                </Button>
                <Button ml={'4%'}
                onClick={onSubmit}
                border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                Interview Schedule
                </Button>
            </Flex>

        
    
        </Box>
        )
    }
    
 
export default InterviewLineup;