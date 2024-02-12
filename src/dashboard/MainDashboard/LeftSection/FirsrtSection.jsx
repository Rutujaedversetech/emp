'use client'

import {
  Box,
  chakra,
  SimpleGrid,
  Stat,Text,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'
import { decodeToken } from 'react-jwt';
import { useDispatch, useSelector } from 'react-redux';
import { getempongoingproject, getempongoingproject2 } from '../../../Redux/projects/action';
import { getempongoingTASK } from '../../../Redux/task/action';
import { useEffect } from 'react';


function StatsCard(props) {
  const { title, stat } = props
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'2'}
      bg={''}
      boxShadow='0px 5px 20px 0px #00000026'
      borderRadius={'4px'}
      //shadow={'3xl'}
     // border={'1px solid'}
      //borderColor={useColorModeValue('gray.800', 'gray.500')}
      //rounded={'2xl'}
      >
      <Text fontWeight={'sm'} color={''} isTruncated>
        {title}
      </Text>
      <StatNumber fontSize={'md'} fontWeight={'medium'}>
        {stat=="Emp005"?"Avinash Sharma":stat}
      </StatNumber>
    </Stat>
  )
}

export default function BasicStatistics() {

  const  project90 = useSelector((store) => store.project.data);
  const  data = useSelector((store) => store.auth.data);



console.log('project',project90);
const  data123 = useSelector((store) => store.task.data);
console.log('====================================');
console.log('data123789',data123);
console.log('====================================');
const dispatch=useDispatch()
//console.log('project',project90);
  const myDecodedToken = decodeToken(data.token);

  useEffect(()=>{
      dispatch(getempongoingproject(myDecodedToken.emp_id))
      dispatch(getempongoingproject2(myDecodedToken.emp_id))
      dispatch(getempongoingTASK(myDecodedToken.emp_id))

    },[])


const ongoingProject=project90&&project90.filter((el)=> el.project_status=='in_progress'&&el.emp_id==myDecodedToken.emp_id)
const pastProject=project90&&project90.filter((el)=> el.project_status=='completed'&&el.emp_id==myDecodedToken.emp_id)
const ongoingtask=data123&&data123.filter((el)=> el.task_status=='pending'&&el.emp_id==myDecodedToken.emp_id)








  return (
    <Box maxW="3xl" mx={'auto'} p='4' bg=''>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, lg: 4 }} bg=''>
        <StatsCard title={'check in time'} stat={'9:45 AM'} />
        <StatsCard title={'Attendance Board'} stat={'Total 22 working days'} />
        <StatsCard title={'Working with '} stat={myDecodedToken.current_supervisor} />
        <StatsCard title={'Pending Task'} stat={ongoingtask.length} />
        <StatsCard title={'Ongoling Projects'} stat={ongoingProject.length} />
        <StatsCard title={'Past Project'} stat={pastProject.length} />
      </SimpleGrid>
    </Box>
  )
}