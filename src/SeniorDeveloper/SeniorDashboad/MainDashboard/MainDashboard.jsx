import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import { Box } from '@chakra-ui/react'

const MainDashboard = () => {
  return (
    <Box display={'flex'} flexDirection={''}  bg=''  width={'100%'}>
      <LeftSection/>
      <RightSection/>
    </Box>
    
  )
}

export default MainDashboard