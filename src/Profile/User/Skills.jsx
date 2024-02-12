import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { FaPen } from "react-icons/fa6";

const Skills = () => {
  return (
    <Box p='10' align={'center'}>
        <Flex bg='' p='10'>
            
        <Input variant='flushed' placeholder='Skills' borderBottom={'1px solid black'}/>
<Button>
<FaPen fontSize={'20px'} />

</Button>

        </Flex>
        
        <Button  bg='black' variant='outline' color={'orange'} >
Add Skills
</Button>

    </Box>
  )
}

export default Skills