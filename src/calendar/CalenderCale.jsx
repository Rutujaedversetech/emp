import React, { useEffect, useState } from 'react';
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import "./calendar.css";
import { Box, Button, ChakraProvider, Heading } from '@chakra-ui/react';
import 'react-calendar/dist/Calendar.css';

//import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { addempcalender, getempcalender } from '../Redux/calender/action';
import { getempANNOUNCEMENT } from '../Redux/announcement/action';
import { getSingleleave } from '../Redux/leaves/action';
import CalendarHoliday from './calendar_holiday';

const Calender = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
      setDate(newDate);
    };

    const originalDate = new Date(date);

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const formattedDate = originalDate.toLocaleDateString('en-IN', options);
    
    const dispatch=useDispatch()
    console.log('formattedDate',formattedDate);
    useEffect(()=>{
      if (isSunday(inputDate)) {
        console.log(`${inputDate} falls on a Sunday.`);
        <CalendarHoliday data={'sunday'} message={'nothin'}/>
      } else {
        console.log(`${inputDate} does not fall on a Sunday.`);
        dispatch(getempcalender(formattedDate))

      }
    //  dispatch(getempcalender(formattedDate))
     dispatch(getempANNOUNCEMENT(formattedDate))
     dispatch(getSingleleave())
    },[formattedDate])

  console.log('====================================');
  console.log(date);
  console.log('====================================');

  function isSunday(dateString) {
    // Parse the date string into a Date object
    const dateParts = dateString.split('/');
    const formattedDate = `${dateParts[1]}/${dateParts[0]}/${dateParts[2]}`;
    const date = new Date(formattedDate);
  
    // Check if the day of the week is Sunday (0)
    return date.getDay() === 0;
  }
  
  // Example usage:
  const inputDate = formattedDate; // Replace this with your date string
  // if (isSunday(inputDate)) {
  //   console.log(`${inputDate} falls on a Sunday.`);
  // } else {
  //   console.log(`${inputDate} does not fall on a Sunday.`);
  // }
  
  
    return (
        <Box  p={''} bg='' margin={'auto'}>
                              <Heading  fontSize={'24px'} fontFamily={'inter'} padding={'1'}>Calender
                    </Heading>
                    <Box className="calendar" bg='' boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                    <Calendar
            onChange={onChange}
            value={date}
            className="arc"
          />
                    </Box>
         
                {/* <Calendar  /> */}

        </Box>
      );
    
}

export default Calender