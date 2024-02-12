import { Box, Flex, Button,Heading ,Input,InputGroup,InputLeftAddon,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import { FaPen } from "react-icons/fa6";

const ThirdSection = () => {
  return (
    <div>
        <Flex minWidth='max-content' bg='' m='10' borderBottom={'1px solid gray'} justify='space-between' alignItems='' p='10' gap=''>
  <Box p='2' width={'30%'} bg=''>
  <Flex direction={'row'} textAlign={''} justifyContent={''} >
<Box bg='' >
<Heading size={'lg'}>
    Contact Info
        </Heading>

</Box>
       
      </Flex> 
       </Box>

    <Box bg='' width={'60%'}>
<VStack gap={'5'}>
<InputGroup>
    <InputLeftAddon border={'1px solid'}>
      Mobile
    </InputLeftAddon>
    <Input type='tel' placeholder=''border={'1px solid'} />
  </InputGroup> 

  <InputGroup >
    <InputLeftAddon border={'1px solid'}>
      Email id
    </InputLeftAddon>
    <Input type='tel' placeholder='' border={'1px solid'} />
  </InputGroup> 

  <InputGroup>
    <InputLeftAddon border={'1px solid'}>
      Address
    </InputLeftAddon>
    <Input type='tel' placeholder=''border={'1px solid'} />
  </InputGroup> 
</VStack>
   
  </Box>

  <Box p='2'  bg=''>
    <Button>        <FaPen fontSize={'20px'} /></Button>
  </Box>

</Flex>
    </div>
  )
}

export default ThirdSection