import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, InputGroup, InputRightAddon, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CalendarIcon } from "@chakra-ui/icons";




const ExitInterview = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Exit Interview
                    </Text>
                </Flex>

                <FormControl mt={'6%'} ml={'-95%'} w={'90%'} fontFamily={'Inter'} >
                    <FormLabel>Employee Interview</FormLabel>    
                    <Flex w={'100%'}>
                        <FormLabel fontSize={'14px'} w={'45%'}>Employee Id</FormLabel>
                        <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Employee Name</FormLabel>
                    </Flex>
                    <Flex w={'100%'}>
                        <Input w={'45%'} mt={'-1%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input w={'45%'} mt={'-1%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                    </Flex>


                    <Flex w={'100%'}>
                        <FormLabel fontSize={'14px'} w={'45%'} >Position</FormLabel>
                        <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Last Working Date</FormLabel>
                    </Flex>
                    <Flex w={'100%'}>
                        <Input w={'45%'} mt={'-1%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                        <InputGroup w={'45%'} mt={'-1%'} ml={'10%'} boxShadow={'0px 5px 20px 0px #00000026'}>
                            <Input />
                            <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon>
                        </InputGroup>
                    </Flex>


                    <Flex w={'100%'}>
                        <FormLabel fontSize={'14px'} w={'45%'}>Department</FormLabel>
                        <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Head</FormLabel>
                    </Flex>
                    <Flex w={'100%'}>
                        <Input w={'45%'} mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input w={'45%'} mt={'-1%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                    </Flex>


                    <FormLabel>Exit Interview Details</FormLabel>    
                    <Flex w={'100%'}>
                        <FormLabel fontSize={'14px'} w={'45%'}>Date of Interview</FormLabel>
                        <FormLabel fontSize={'14px'} w={'45%'} ml={'10%'}>Interviewer</FormLabel>
                    </Flex>
                    <Flex w={'100%'}>
                        <InputGroup w={'45%'} mt={'-1%'} boxShadow={'0px 5px 20px 0px #00000026'}>
                            <Input />
                            <InputRightAddon background={'white'}><CalendarIcon color="#FFB800" /></InputRightAddon>
                        </InputGroup>
                        <Input w={'45%'} mt={'-1%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                    </Flex>
                    <FormLabel fontSize={'14px'}>Mode Of Interview</FormLabel>
                    <Select boxShadow='0px 5px 20px 0px #00000026'>
                        <option>Online</option>
                        <option>Offline</option>
                    </Select>

                </FormControl>
            </Flex>

            <Flex fontFamily="Inter" ml={'64%'} >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/ProjectHandover">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/Feedback">Save & Continue</Link>    
                </Button>
            </Flex>
        
        </Box>
        )
    }
    
    
export default ExitInterview;