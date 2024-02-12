import { Box, Flex, Button,Heading ,Input,InputGroup,InputLeftAddon,Text, VStack} from '@chakra-ui/react'
import React from 'react'
import { FaPen } from "react-icons/fa6";

const SecondSection = () => {
  return (
    <div>
        <Flex minWidth='max-content' bg='' m='10' borderBottom={'1px solid gray'} justify='space-between' alignItems='' p='10' gap=''>
  <Box p='2' width={'30%'} bg=''>
  <Flex direction={'row'} textAlign={''} justifyContent={''} >
<Box bg='' >
<Heading size={'lg'}>
          Personal Info
        </Heading>
<Text  fontSize={'md'}>
          This will be display on your profile
        </Text>
</Box>
       
      </Flex> 
       </Box>

    <Box bg='' width={'60%'}>
<VStack gap={'5'}>
<InputGroup>
    <InputLeftAddon border={'1px solid'}>
      Name
    </InputLeftAddon>
    <Input type='tel' placeholder=''border={'1px solid'} />
  </InputGroup> 

  <InputGroup >
    <InputLeftAddon border={'1px solid'}>
      position
    </InputLeftAddon>
    <Input type='tel' placeholder='' border={'1px solid'} />
  </InputGroup> 

  <InputGroup>
    <InputLeftAddon border={'1px solid'}>
      Department
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

export default SecondSection