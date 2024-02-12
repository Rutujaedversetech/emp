import { Avatar, Box, Flex, Text, Stack, Heading, Card, CardBody, Spinner } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getempANNOUNCEMENT } from '../Redux/announcement/action'
import { BsDot } from "react-icons/bs";

const FirstSectionRight = ({data,message}) => {
  console.log('====================================');
  console.log('message',data);
  console.log('====================================');
//const dispatch=useDispatch()
// useEffect(()=>{
// dispatch(getempANNOUNCEMENT())
// },[])
const filterAnnouncement=data&&data.filter((el)=>el.events=='announcement')
console.log('====================================');
  console.log('filterAnnouncement89',filterAnnouncement);
  console.log('====================================');
  return (
    <div>
            <Box  bg=''  w={'100%'} p={''} borderRadius={'18px'}>
                    <Heading  fontSize={'24px'} fontFamily={'inter'} padding={''}>Announcement and Events
                    </Heading>
                    {message=='loading'?(<Stack>
            <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
        </Stack>):
data.length==0?
                     <Flex w={'100%'} fontFamily="Inter"red bg=''  >
                     <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'5px'} >
                         <CardBody>

                             <Text ml={''} fontSize={'16px'} fontStyle={'italic'}>No Announcements for this date </Text>
                         </CardBody>
                     </Card>
                    </Flex>
                    :
    filterAnnouncement&&filterAnnouncement.map((el)=>{
return(
    <Flex p='1'justifyContent={'space-between'} bg=''boxShadow='0px 5px 20px 0px #00000026'>
    <Box>
    <Stack margin={'auto'} direction={'row'} spacing={''} align={'center'}>
              <Avatar src={'https://avatars0.githubusercontent.com/u/1164541?v=4'} />
    
            </Stack>
    </Box>
    <Box>
    <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='3'>
                <Text fontWeight={600}>{el.anno_description}</Text>
                <Text color={'orange'}>{el.anno_category}</Text>

              </Stack>
     </Box> 
    <Box> 
    <Stack direction={'column'} spacing={0} fontSize={'sm'} mt='' bg={''}>
                <Text color={'green'}>{el.anno_date_from}</Text>
                <Text color={'green'}>{el.anno_date_to}</Text>
                <Text as={'b'} color={''}>12 PM</Text>

              </Stack>
               </Box> 
    
      </Flex>
)
    })}



  

  </Box>
 
        {/* </Box> */}
    </div>
  )
}

export default FirstSectionRight