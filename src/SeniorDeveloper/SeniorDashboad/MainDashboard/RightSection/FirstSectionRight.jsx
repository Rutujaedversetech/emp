import { Avatar, Box, Flex, Text, Stack, Heading } from '@chakra-ui/react'
import React from 'react'

const FirstSectionRight = () => {
  return (
    <div>
      <Box ml={'-6%'}>
        <Heading  fontSize={'24px'} mt={'-4%'} fontFamily={'inter'} padding={'3'}>Announcement and Events
        </Heading>
      </Box>

      <Box ml={'-6%'} w={'94%'} bg='' mt={'-1%'} rounded={'3xl'} p={7}  boxShadow='0px 5px 20px 0px #00000026'
        // border={'1px solid'}
          //borderColor={'gray.800'}
      >
        <Box  bg='' borderRadius={'15px'}>
          <Flex justifyContent={'space-between'} bg=''>
            <Box>
              <Stack mt={3}  direction={'row'} spacing={4} align={'center'}>
                        <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
              </Stack>
            </Box>
            <Box>
            <Stack direction={'column'} spacing={0} fontSize={'sm'} fontFamily={'Inter'} mt='3'>
                        <Text fontWeight={600}>Developing planning</Text>
                        <Text color={'orange'}>w3 technology</Text>
                      </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} fontFamily={'Inter'} mt='3'>
                <Text as={'b'} color={''}>12:02 PM</Text>
              </Stack>
            </Box>
          </Flex>


          <Flex justifyContent={'space-between'} bg='' fontFamily={'Inter'} >
            <Box>
              <Stack mt={3} direction={'row'} spacing={4} align={'center'}>
                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text fontWeight={600}>Developing planning</Text>
                <Text color={'orange'}>w3 technology</Text>
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text as={'b'} color={''}>12:02 PM</Text>
              </Stack>
            </Box>

          </Flex>

          <Flex justifyContent={'space-between'} bg='' fontFamily={'Inter'}>
            <Box>
              <Stack mt={3} direction={'row'} spacing={4} align={'center'}>
                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text fontWeight={600}>Developing planning</Text>
                <Text color={'orange'}>w3 technology</Text>
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text as={'b'} color={''}>12:02 PM</Text>
              </Stack>
            </Box>
          </Flex>


          <Flex justifyContent={'space-between'} bg='' fontFamily={'Inter'}>
            <Box>
              <Stack mt={3} direction={'row'} spacing={4} align={'center'}>
                <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text fontWeight={600}>Developing planning</Text>
                <Text color={'orange'}>w3 technology</Text>
              </Stack>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text as={'b'} color={''}>12:02 PM</Text>
              </Stack>
            </Box>
          </Flex>

        </Box>
 
      </Box>
    </div>
  )
}

export default FirstSectionRight