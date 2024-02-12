'use client'

import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber
} from '@chakra-ui/react'


function StatsCard(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'2'}
      bg={''}
      boxShadow='0px 5px 20px 0px #00000026'
      fontFamily={'Inter'}
      borderRadius={'10px'}
      //shadow={'3xl'}
     // border={'1px solid'}
      //borderColor={useColorModeValue('gray.800', 'gray.500')}
      //rounded={'2xl'}
      >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'lg'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {
  return (
    <Box maxW="3xl" mx={'auto'} p='4' bg='' ml={'3%'} mt={'-2%'}>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, lg: 4 }} bg=''>
        <StatsCard title={'We serve'} stat={'50,000 people'} />
        <StatsCard title={'In'} stat={'30 different countries'} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} />
        <StatsCard title={'We serve'} stat={'50,000 people'} />
        <StatsCard title={'In'} stat={'30 different countries'} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} />
      </SimpleGrid>
    </Box>
  )
}