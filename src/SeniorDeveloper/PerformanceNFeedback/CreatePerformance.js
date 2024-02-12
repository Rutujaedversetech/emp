import React from "react";
import { Box, Flex, Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { VStack, StackDivider, Stack, Button, Link, WrapItem, Avatar } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";



const CreatePerformance = () => {
    return (
        <Box mt={'2.5%'} w={'100%'} h={'90%'}>
        <Flex w={'100%'} h={'90vh'} borderRadius={'28px'}>
            
            
            <Flex mt={'14%'} w={'100%'}>
            <Text w={'100%'} h={'10vh'} mt={'-8%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"} >
              Performance 
            </Text>
                <VStack w={'580px'} mt={'2%'} ml={'-46%'}
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                    >
                    <Box h='100px' >
                        <Stack direction={['column', 'row']} spacing='24px'>
                            <Box ml={'5%'} w='40%' h='80px' >
                                <WrapItem>
                                        <Avatar 
                                        ml={'12%'}
                                        size='lg'
                                        name='Prosper Otemuyiwa'
                                        src='https://bit.ly/prosper-baba'
                                        />{' '}
                                </WrapItem>

                                <Text mt={'2'} ml={'8%'} fontFamily="Inter" fontSize="18px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                                    Sam Wheeler
                                </Text>
                                <Text mt={'1'} ml={'12%'} fontFamily="Inter" fontSize="10px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
                                    Software Engineer
                                </Text>

                            </Box>
                            <Box mt={'2%'} ml={'5%'} w='350px' h='80px'>
                                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Employee Id</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Emp013</FormLabel>

                                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Email Id</FormLabel>
                                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Baracus @gmail.com</FormLabel>

                            </Box>
                        </Stack>
                    </Box>

                    <Box h='220px'>
                        <Stack direction={['column', 'row']} spacing='24px'>
                            <Box ml={'5%'} w='350px' h='220px' mt={'-2%'}>
                                <Text fontFamily={'inter'} fontSize={'26px'}>Performance</Text>
                                <Text fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Attendance</Text>
                                <FaStar color="#FFB800"/>
                                <Text mt={'2%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Delivery Speed</Text>
                                <FaStar color="#FFB800"/>
                                <Text mt={'2%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Productivity</Text>
                                <FaStar color="#FFB800"/>
                                <Text mt={'2%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Punctuality</Text>
                                <FaStar color="#FFB800"/>

                            </Box>
                            <Box ml={'2%'} w='40%' h='240px'>

                                <Flex ml={'90%'}>
                                    <MdModeEdit color="#FFB800" fontSize={'24px'}/>
                                </Flex>
                                <Text mt={'4%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Team Work</Text>
                                <FaStar color="#FFB800"/>
                                <Text mt={'2%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Delivery Quality</Text>
                                <FaStar color="#FFB800"/>
                                <Text mt={'2%'} fontFamily={'inter'} fontSize={'18px'} color={'#000000B2'}>Technical Skills</Text>
                                <FaStar color="#FFB800"/>
                            </Box>
                        </Stack>
                    </Box>
                    <Box h='60px' mt={'-2%'} ml={'5%'}>
                        <Text fontFamily={'inter'} fontSize={'26px'}>Feedback</Text>
                        <Flex ml={'96%'} mt={'-6%'}>
                            <MdModeEdit color="#FFB800" fontSize={'24px'}/>
                        </Flex>
                        <Textarea mt={'2%'}/>
                    </Box>
                </VStack>
            </Flex>
            
            <Flex mt={'130%'} ml={'-40%'} fontFamily="Inter">
               
                <Button border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
                <Link to="/PerformanceTable">Cancel</Link>
                </Button>
            
                <Button ml={'10%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' borderColor={'black'}>
                <Link to='/PerformanceTable'>Submit</Link>
                </Button>
                
            </Flex>

        </Flex>
        </Box>
        )
    }
    
export default CreatePerformance;