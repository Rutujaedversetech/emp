import { Avatar, Box, Flex, Text, Stack, Heading } from '@chakra-ui/react'
import React from 'react'
import Announcements from '../../../calendar/Announcements'
import { useSelector } from 'react-redux';

const FirstSectionRight = () => {
  const  announcement = useSelector((store) => store.announce.data);
  const  calender3 = useSelector((store) => store.announce.AllProducts.message);

  return (
//
<Box>
  <Announcements data={announcement}message={calender3}/>
</Box>
  )
}

export default FirstSectionRight