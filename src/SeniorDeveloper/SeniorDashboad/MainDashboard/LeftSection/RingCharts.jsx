import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { Box } from '@chakra-ui/react'


const COLORS = ['#0088FE', '#00C49F'];
const DoubleRingChart = () => {
    const data = [
        { name: 'Ring 1', value: 40 },
        { name: 'Ring 2', value: 60 },
      ];
      
  return (
    <Box maxW="3xl" mx={'auto'} p='4' bg='' rounded={'3xl'}  shadow={'2xl'} ml={'5%'} mt={'-1%'} w={'84%'}>

    <PieChart width={400} height={200} >
      <Pie
        data={data}
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
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </Box> 

  );
};

export default DoubleRingChart;