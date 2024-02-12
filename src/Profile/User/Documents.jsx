



import { Box, Button, Flex, Heading, Input,Text, Textarea, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaPen } from "react-icons/fa6";

const Documents = () => {
  return (
    <Box p='10' align={'center'}>
        <Flex bg='' p='10' justify={'space-between'}>
            
        <Box bg='' >
<Heading size={'lg'}>
          Upload Documents
        </Heading>
<Text  fontSize={'md'}>
          Add Your all Documents
        </Text>
</Box>
<Button  bg='black' variant='outline' color={'orange'} >
View Uploaded Documents
</Button>

        </Flex>
        
        {/* <Button  bg='black' variant='outline' color={'orange'} >
Add Skills
</Button> */}
<Box p={10} align="start" bg='' shadow={'4xl'} border={''} w={'50%'}  boxShadow={'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'}>
     
      <VStack align="center" spacing={4}>
        <Input type="file" width={'50%'} />
          {/* <Text>
            Selected File: selectedFile.name
          </Text> */}
        
        <Button colorScheme="blue" >
          Upload
        </Button>
      </VStack>
    </Box>




    </Box>
  )
}

export default Documents