import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Progress } from '@chakra-ui/react';
import { FaFileUpload } from "react-icons/fa";
import { FormControl, FormLabel } from "@chakra-ui/react";


const DocumentUpload = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
            
            </Flex>

            <Flex w={'100%'} h={'70vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'70%'} mt={'4%'} ml={'6%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Upload Documents
                    </Text>
                </Flex>
                <Flex mt={'8%'} ml={'-95%'} w={'90%'} h={'30vh'} border={'1px'} borderColor={'#DDE2E4'} variant='outline'>
                    <Box mt={'12%'} ml={'46%'} >
                        <FaCloudUploadAlt fontSize={'42px'} color="#FFB800" />
                        <FormLabel ml={'-40%'} mt={'6%'} fontSize={'12px'} color={'#707070'}>Click to upload drag and drop SVG,PNG,JPG(Max 800 x 400px)</FormLabel>
                    </Box>
                </Flex>
                <Flex mt={'36%'} ml={'-90%'} w={'90%'} h={'30vh'} variant='outline'>
                    <Flex mt={'10%'} ml={'6%'} w={'90%'} h={'5vh'} variant='outline'>
                        <FormControl >
                            <FormLabel mt={'-4%'} ml={'-6%'} fontSize={'12px'} color={'#707070'}>Pancard.pdf</FormLabel>
                        </FormControl>
                        <FaFileUpload color="#FFB800"/>
                        <Progress value={80} w={'98%'} mt={'0%'} ml={'-108%'} borderRadius={'28px'} colorScheme={'yellow'}/>
                    </Flex>
                </Flex>
                
            </Flex>

            <Flex fontFamily="Inter" ml={'64%'} mt={'-8%'}>
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/JobProfile">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/BackgroundVerification">Save & Continue</Link>    
                </Button>
            </Flex>

        </Box>
        )
    }
    
 
export default DocumentUpload;