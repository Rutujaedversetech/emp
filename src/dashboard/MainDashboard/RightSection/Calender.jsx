import React, { useState } from 'react';
import { Calendar } from "@natscale/react-calendar";
import { Box, Button, ChakraProvider, Heading } from '@chakra-ui/react';
import "@natscale/react-calendar/dist/main.css";
import { useDispatch } from 'react-redux';
import CalenderCale from '../../../calendar/CalenderCale';
//import "../../../calendar/calendar.css"
//import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());

   
  
    return (
<Box>
  <CalenderCale/>
</Box>
      );
    
}

export default Calender