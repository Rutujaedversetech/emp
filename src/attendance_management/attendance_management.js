import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { VStack, Box, Stack } from "@chakra-ui/react";
import { WrapItem, Avatar } from "@chakra-ui/react";
import { Divider, Progress } from '@chakra-ui/react'

const AttendanceManagement = () => {
    return (
        <Box bg='' p='5'>

        <Flex bg='' w='100%' margin={'auto'} justify={'center'} alignContent={'end'} justifyItems={'left'} alignItems={'start'}>
             <Flex bg={''} justify={'left'} p='2' justifyItems={'left'} alignItems={'start'} margin={''}> 
             <Text fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000B2" letterSpacing="-0.154px">
             Attendance Management

        </Text>
             </Flex> 

        </Flex>
        <Flex  bg='' w={'100%'} justifyContent={'center'} margin={'auto'} borderRadius={'18px'} fontFamily="Inter">
            <VStack  w={'100%'} 
                spacing={4}
                align='stretch'
                >
                  
                <Box  w={'100%'} p='' >
                    <Flex w={'100%'} bg='' borderRadius={'18px'} fontFamily="Inter">
                        <Flex justifyContent={'space-between'} margin={'auto'}
                         borderRadius={'18px'} boxShadow='0px 5px 20px 0px #00000026' bg='white' p='10' spacing='' w={'100%'}>
                            <Box w='' bg='' >
                                <WrapItem>
                                    <Avatar 
                                    ml={'12%'}
                                    size='lg'
                                    name='Prosper Otemuyiwa'
                                    src='https://bit.ly/prosper-baba'
                                    />{' '}
                                </WrapItem>

                                <Text  fontFamily="Inter" fontSize="18px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                                    Sam Wheeler
                                </Text>
                                <Text  fontFamily="Inter" fontSize="10px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
                                    Software Engineer
                                </Text>

                                {/* <Stack  direction='row' bg='green' h='100px' color={'#CCCCCC'} >
                                    <Divider color={'#CCCCCC'} orientation='vertical' />
                                </Stack> */}

                            </Box>

                            <Box w='' bg='' h=''>
                                <Text  fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
                                    Your Total Days
                                </Text>
                                <Text  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                                    256
                                </Text>
                                <Progress   colorScheme="yellow"
                                    borderColor="#F9BD3B"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                    w={'50%'}
                                    />

                            </Box>
                            <Box w='' h='' bg='' >
                                <Text  fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
                                    Your Total Working Hours
                                </Text>
                                <Text  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                                    12,345
                                </Text>
                                <Progress   colorScheme="purple"
                                    borderColor="#A87BFF"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                    w={'50%'}
                                />
                            </Box>
                            <Box w='' h=''>
                                <Text  fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
                                    Overtime Working Hours
                                </Text>
                                <Text  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                                    12,345
                                </Text>
                                <Progress   colorScheme="red"
                                    borderColor="red"
                                    borderRadius={'18px'}
                                    size='sm'
                                    value={60}
                                    w={'50%'}
                                />
                            </Box>


                        </Flex>
                    </Flex>
                </Box>
            </VStack>
        </Flex>
        <Flex bg='' w='70%' margin={'auto'} justify={'center'} alignContent={'end'} justifyItems={'left'} alignItems={'start'}>
             <Flex bg={''} justify={'left'} p='2' justifyItems={'left'} alignItems={'start'} margin={''}> 
            <Text  bg=''  textAlign={'start'}  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000B2" letterSpacing="-0.154px">
            Today
        </Text>
             </Flex> 

        </Flex>


        <Flex  w={'100%'}  borderRadius={'18px'} bg='' fontFamily="Inter" align={'center'}>
            <VStack  w={'100%'} 
                spacing={4}
                bg=''
                align='stretch'
                //bg=''
                >
                <Stack align={'center'} w={'100%'}  >
                    <Flex w={'100%'} borderRadius={'18px'} fontFamily="Inter" justify={'center'} alignItems={'center'} align={'center'} bg=''>
                        <Stack direction={['column', 'row']} align={'center'} spacing='24px' w={'100%'} bg=''>
                        <Flex justifyContent={'space-between'} margin={'auto'} borderRadius={'18px'} boxShadow='0px 5px 20px 0px #00000026' bg='white' p='10' spacing='' w={'100%'}>
                            <Box  w='100%' bg=''>

<Text mt={'2'} ml={'16%'} fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
    Date
</Text>
<Text mt={'4'} ml={'0%'} fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
    15-01-2024 (Monday)
</Text>

</Box>
<Box  w='100%' bg=''>
<Text mt={'2'} ml={'8%'} fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
    Login Time
</Text>
<Text mt={'4'} ml={'10%'} fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
    10:30 AM
</Text>

</Box>
<Box  w='100%' bg=''>
<Text mt={'2'} ml={'8%'} fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
    Logout Time
</Text>
<Text mt={'4'} ml={'12%'} fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
    08:00 PM
</Text>
</Box>
<Box  w='100%' bg=''>
<Text mt={'2'} ml={'8%'} fontFamily="Inter" fontSize="16px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
    Total Hours
</Text>
<Text mt={'4'} ml={'16%'} fontFamily="Inter" fontSize="14px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#707070" letterSpacing="-0.154px">
    9 Hr
</Text>
</Box>
                            </Flex>

                        </Stack>
                    </Flex>
                </Stack>


               
            
            </VStack>
        </Flex>

         
        </Box>
        )
    }
    
export default AttendanceManagement;