import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import { Box, ButtonGroup } from '@chakra-ui/react'
import ThirdSection from './LeftSection/ThirdSection'
import ButtonSection from './LeftSection/ButtonSection'

const MainDashboard = () => {
  return (
    <Box>
      <Box display={'flex'} flexDirection={''}  bg=''  width={'100%'}>
    <LeftSection/>
        <RightSection/>
    </Box>
    <Box>
       <ButtonSection/> 
      <ThirdSection/>
    </Box>
    </Box>
    
    
  )
}

export default MainDashboard