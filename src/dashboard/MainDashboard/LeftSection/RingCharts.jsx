import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

import { Box, Button, Flex,Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { decodeToken } from 'react-jwt';
import { useEffect } from 'react';
import { getempongoingproject, getempongoingproject2 } from '../../../Redux/projects/action';
import { getempongoingTASK } from '../../../Redux/task/action';

const COLORS = ['#0088FE', '#00C49F'];

const DoubleRingChart = () => {


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







    const datanm = [
        { name: 'ongoing Projects', value: ongoingProject.length },
        { name: 'Past Projects', value: pastProject.length },
      ];
      
  return (
    <Box maxW="3xl" mx={'auto'} p='4' bg=''>
<Box
  px={{ base: 4, md: 8 }}
  py={'2'}
  bg={''}
  boxShadow='0px 5px 20px 0px #00000026'
  borderRadius={'4px'}
>
<PieChart width={400} height={200}>
      <Pie
        data={datanm}
        // cx={200}
        // cy={200}
        startAngle={90}
        endAngle={-270}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
        label
      >
        {datanm.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
</Box>
   
    </Box> 

  );
};

export default DoubleRingChart;