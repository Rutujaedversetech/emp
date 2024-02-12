import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { WrapItem, Avatar } from "@chakra-ui/react";
import { IoPencilSharp } from "react-icons/io5";


const JobProfile = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
                
            </Flex>
            <Flex w={'100%'} h={'70vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'70%'} mt={'4%'} ml={'10%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Job Profile
                    </Text>
                </Flex>
                <Flex mt={'12%'} ml={'-95%'} w={'90%'} h={'56vh'}>
                    <Flex mt={'-4%'} ml={'5%'} w={'90%'} h={'20vh'}>
                        <Stack direction={['column', 'row']} spacing='24px' w={'100%'}>
                            <Box w='30%' h='20vh'>
                            <WrapItem>
                                <Avatar mt={'4%'} ml={'16%'} size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                            </WrapItem>
                            </Box>
                            <Box w='30%' h='20vh' mt={'4%'} ml={'12%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Sledge Hammer</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Developer</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Experience</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>4 years</FormLabel>
                            </Box>
                            <Box w='30%' h='20vh' mt={'4%'} ml={'8%'}>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Location</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Pune</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Type</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Full Time</FormLabel>
                            </Box>
                            <Box w='20%' h='20vh' mt={'2%'} ml={'2%'} fontFamily={'Inter'}>
                                <Button leftIcon={<IoPencilSharp color="#FFB800"/>} ml={'16%'} colorScheme='#FFB800' color={'white'} variant='outline'>   
                                </Button>
                            </Box>
                        </Stack>
                    </Flex>
                    <Flex mt={'16%'} ml={'-90%'} w={'90%'} >
                        <FormControl mt={'6%'}  w={'100%'} fontFamily={'Inter'}>
                            <FormLabel mt={'-6%'}>Joining Date</FormLabel>
                            <Input mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel mt={'0%'}>Department</FormLabel>
                            <Input mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel mt={'0%'}>Probation Period</FormLabel>
                            <Input mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                            <FormLabel mt={'0%'}>Hiring Manager</FormLabel>
                            <Input mt={'-1%'} boxShadow='0px 5px 20px 0px #00000026'/>

                        </FormControl>
                    </Flex>
                </Flex>
                
            </Flex>

            <Flex fontFamily="Inter" ml={'58%'} mt={'-5%'}>
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/Onboarding">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/DocumentUpload">Save & Continue</Link>    
                </Button>
            </Flex>

        
        </Box>
        )
    }
    
 
export default JobProfile;