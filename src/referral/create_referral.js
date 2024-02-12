import React from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { InputGroup } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addempREFERAL } from "../Redux/referral/action";

const CreateReferral = ({onClose,myDecodedToken}) => {
    const[job_id,setTJob_id]=useState('')
    const[emp_id,setEmp_id]=useState('')
    const[referred_to,setReferred_to]=useState('')
    const[upload_files,setUpload_files]=useState('')
    const[referral_note,setReferral_note]=useState('')
    const[referral_email,setReferral_email]=useState('')

    const[contact,setContact]=useState('')
    const dispatch=useDispatch()
const toast=useToast()
    const onSubmit=()=>{
        if(job_id==''||referred_to==''||upload_files==''||referral_note==''||contact==''){
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
            dispatch(addempREFERAL({
                "job_id":job_id,
                "emp_id":myDecodedToken.emp_id,
                "referred_to":referred_to,
                "upload_files":upload_files,
                "referral_contact":contact,
                "referral_email":referral_email,

                "referral_note":referral_note,
                "referral_status":"under_review",
            
                
            }))
        }

    }

    return (
        <Box mt={'5%'}  w={'100%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'92%'} h={640} borderRadius={'28px'}>
            <Text w={'100%'} mt={34} ml={45} fontFamily="Inter" fontSize="36px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create A Referral Form
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>

                    <FormLabel mt={5}>Candidate's Name</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}>
                        <Input 
                                            onChange={(e)=>setReferred_to(e.target.value)}

                        />
                    </InputGroup>
                  
                    <FormLabel mt={5}>Contact Information</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} 
                    onChange={(e)=>setContact(e.target.value)}
                    />
                                        <FormLabel mt={5}>Contact Information</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} 
                    onChange={(e)=>setReferral_email(e.target.value)}
                    />

                    <FormLabel mt={5}>Position Applying For</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} 
                                        onChange={(e)=>setTJob_id(e.target.value)}

                    />

                    <FormLabel mt={5}>Brief Recommendation or Note</FormLabel>
                    <Input boxShadow={'0px 5px 20px 0px #00000026'} 
              onChange={(e)=>setReferral_note(e.target.value)}

                    />

                    <FormLabel mt={4}>Resume Upload</FormLabel><DownloadIcon color="#FFB800" ml={28} mt={-16}/>
                    <Input mt={-32} boxShadow={'0px 5px 20px 0px #00000026'} 
                   onChange={(e)=>setUpload_files(e.target.value)}

                    />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-5%'}  fontFamily="Inter">
            <Button mt={'-22%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#DADADA'} variant='outline' borderColor={'#DADADA'}>
            <Link to="/Referral">Cancel</Link>
            </Button>
            <Button ml={'8%'} mt={'-22%'} border={'1px'}
            onClick={onSubmit}
            borderRadius={'10px'} colorScheme='black' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            Submit
            </Button>
        </Flex>
        
        </Box>
        )
    }
    
export default CreateReferral;