import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Box, WrapItem, Avatar } from '@chakra-ui/react';
import { FormLabel } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';



const CandidateData = () => {
  return (
    <>
    <Flex mt={'6%'} ml={'5%'} w={'90%'} h={'46vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
    <Flex mt={'0%'} ml={'5%'} w={'90%'} h={'20vh'}>
        <Stack direction={['column', 'row']} spacing='24px' w={'100%'}>
            <Box w='30%' h='20vh'>
                <WrapItem>
                    <Avatar mt={'4%'} ml={'16%'} size='2xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
                </WrapItem>
            </Box>
            <Box w='30%' h='20vh'mt={'2%'} ml={'-8%'}>
                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Sledge Hammer</FormLabel>
                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Developer</FormLabel>

                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Experience</FormLabel>
                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>4 years</FormLabel>
            </Box>
            <Box w='30%' h='20vh' mt={'2%'} ml={'-8%'}>
                <FormLabel fontFamily={'inter'} fontSize={'14px'}>Location</FormLabel>
                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Pune</FormLabel>

                <FormLabel mt={'2%'} fontFamily={'inter'} fontSize={'14px'}>Type</FormLabel>
                <FormLabel mt={'-4%'} fontFamily={'inter'} fontSize={'12px'} color={'#707070'}>Full Time</FormLabel>
            </Box>
            <Box w='20%' h='20vh' mt={'2%'} ml={'10%'} fontFamily={'Inter'}>
                <Button ml={'16%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                    <Link to="/InterviewLineup">Interview Lineup</Link>    
                </Button>
            </Box>

        </Stack>
    </Flex>
</Flex>
    </>
  )
}

export default CandidateData;
