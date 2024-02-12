import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, InputGroup, InputRightAddon } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";




const ProjectHandover = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Project Handover
                    </Text>
                </Flex>

                <FormControl mt={'6%'} ml={'-95%'} w={'90%'} fontFamily={'Inter'}>
                    <FormLabel>Project Name</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Handover To</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel mt={5}>Handover Date</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}>
                        <Input />
                        <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon>
                    </InputGroup>

                    <FormLabel>Description</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Status</FormLabel>
                    <Input boxShadow='0px 5px 20px 0px #00000026' />
                </FormControl>
            </Flex>

            <Flex fontFamily="Inter" ml={'64%'} >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/FinanceClearance">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/ExitInterview">Save & Continue</Link>    
                </Button>
            </Flex>
        
        </Box>
        )
    }
    
    
export default ProjectHandover;