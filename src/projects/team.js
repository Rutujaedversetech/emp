import React from "react";
import { SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex, Avatar, Text } from "@chakra-ui/react";
import { Card, Heading, CardHeader, StackDivider, CardBody, Stack } from "@chakra-ui/react";


const Teams = () => {
    return (
        <>
        <Box mt={'4%'} ml={'26%'} w={'50%'} h={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'} maxHeight={'84%'} overflowY={'scroll'}>
            <SimpleGrid columns={2} spacing={10}>
        
                <Box mt={'10%'} ml={'20%'} w={'74%'} h={'100%'}>
                    <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardHeader background={'#E3DBFA'} borderRadius={'18px'}>
                            <Heading fontSize={'16px'} ml={'10'} fontFamily={'inter'}>Manager</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                    <Flex ml={'4%'} >
                                        <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                        <Box ml='3' mt={'4'}>
                                            <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                Segun Adebayo
                                            </Text>
                                            <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    

                    <Box mt={'5%'} maxHeight={'300px'} overflowY={'scroll'}>
                        <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                            <CardHeader background={'#DFF3FE'} borderRadius={'18px'}>
                                <Heading fontSize={'16px'} ml={'10'} fontFamily={'inter'}>Senior Developers</Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                        <Flex ml={'4%'} >
                                            <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                            <Box ml='3' mt={'4'}>
                                                <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                    Segun Adebayo
                                                </Text>
                                                <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                        <Flex ml={'4%'} >
                                            <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                            <Box ml='3' mt={'4'}>
                                                <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                    Segun Adebayo
                                                </Text>
                                                <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                            </Box>
                                        </Flex>
                                    </Box>

                                    <Box ml={'5%'}  w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                        <Flex ml={'4%'} >
                                            <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                            <Box ml='3' mt={'4'}>
                                                <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                    Segun Adebayo
                                                </Text>
                                                <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>
                </Box>



                <Box mt={'10%'} ml={'10%'} w={'74%'} h={'100%'}>
                    <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                        <CardHeader background={'#ECEFF4'} borderRadius={'18px'}>
                            <Heading size='md' ml={'10'} fontFamily={'inter'}>Designer</Heading>
                        </CardHeader>

                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                    <Flex ml={'4%'} >
                                        <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                        <Box ml='3' mt={'4'}>
                                            <Text fontWeight='bold'>
                                                Segun Adebayo
                                            </Text>
                                            <Text fontSize='sm'>Unity Developer</Text>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                    

                    <Box mt={'5%'}>
                        <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                            <CardHeader background={'#FFE1CC'} borderRadius={'18px'}>
                                <Heading fontSize={'16px'} ml={'10'} fontFamily={'inter'}>User Interface</Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                        <Flex ml={'4%'} >
                                            <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                            <Box ml='3' mt={'4'}>
                                                <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                    Segun Adebayo
                                                </Text>
                                                <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>


                    <Box mt={'5%'}>
                        <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                            <CardHeader background={'#FFD5DD'} borderRadius={'18px'}>
                                <Heading fontSize={'16px'} ml={'10'} fontFamily={'inter'}> Developer</Heading>
                            </CardHeader>

                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
                                    <Box ml={'5%'} w={'90%'} borderRadius={'18px'} height='80px' border={'2px'} borderColor={'#F9BD3B'} variant='outline'>
                                        <Flex ml={'4%'} >
                                            <Avatar src='https://bit.ly/sage-adebayo' mt={'4'}/>
                                            <Box ml='3' mt={'4'}>
                                                <Text fontSize={'16px'} fontFamily={'inter'} fontWeight='bold'>
                                                    Segun Adebayo
                                                </Text>
                                                <Text fontSize={'14px'} fontFamily={'inter'}>Unity Developer</Text>
                                            </Box>
                                        </Flex>
                                    </Box>
                                </Stack>
                            </CardBody>
                        </Card>
                    </Box>
                </Box>
            </SimpleGrid>
        </Box>  
        </>
    )
}
    
export default Teams;











