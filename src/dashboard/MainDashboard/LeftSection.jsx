import { Box } from '@chakra-ui/react'
import React from 'react'
import FirsrtSection from './LeftSection/FirsrtSection'
import ThirdSection from './LeftSection/ThirdSection'
import ButtonSection from './LeftSection/ButtonSection'
import RingCharts from './LeftSection/RingCharts'

const LeftSection = () => {







  
  return (
    <Box width={'70%'}>
        <FirsrtSection/>
        <RingCharts/>
        {/* <ButtonSection/> */}
         {/* <ThirdSection/>  */}
    </Box>
  )
}

export default LeftSection