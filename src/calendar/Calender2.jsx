import {  Flex } from '@chakra-ui/react'
//import Calendar from 'react-calendar'
import CalendarHoliday from './calendar_holiday'
import FirstSectionRight from '../dashboard/MainDashboard/RightSection/FirstSectionRight'
//import Calender from '../dashboard/MainDashboard/RightSection/Calender'
import CalendarTask from './calendar_task'
import ThirdSection from '../dashboard/MainDashboard/LeftSection/ThirdSection'
import CalenderCale from './CalenderCale'
import { useSelector } from 'react-redux'
import Announcements from './Announcements'
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
//import CalendarHoliday from './calendar_holiday';



// import Calendar from 'react-calendar'

const Calender2 = () => {
  const  calender = useSelector((store) => store.calender.data);
  const  calender2 = useSelector((store) => store.calender.AllProducts.message);
  const  calender3 = useSelector((store) => store.announce.AllProducts.message);

  const  announcement = useSelector((store) => store.announce.data);
  const filterAnnouncement=announcement&&announcement.filter((el)=>el.events=='announcement')

  console.log('calender2',calender)
console.log('====================================');
console.log('filterAnnouncement',filterAnnouncement);
console.log('====================================');
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
        // <CalendarHoliday data={'sunday'} message={'nothin'}/>
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
  
  const currentDate = new Date(date);

  const selectedDateTime = {
      day: currentDate.getDate(),
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
  };
  
  function parseDate(dateString) {
      if (!dateString) {
          return null; // Handle undefined or empty date string
      }
  
      const dateParts = dateString.split('/');
      if (dateParts.length !== 3) {
          return null; // Handle invalid date string format
      }
  
      const [day, month, year] = dateParts;
      return {
          day: parseInt(day, 10),
          month: parseInt(month, 10) - 1, // Months are zero-based in JavaScript (0-11)
          year: parseInt(year, 10),
      };
  }
  
  const filteredData = filterAnnouncement.filter(event => {
      const startDate = parseDate(event.anno_date_from);
      const endDate = parseDate(event.anno_date_to);
  
      if (!startDate || !endDate) {
          return false; // Skip events with invalid date format
      }
  
      return (
          selectedDateTime.year >= startDate.year &&
          selectedDateTime.year <= endDate.year &&
          selectedDateTime.month >= startDate.month &&
          selectedDateTime.month <= endDate.month &&
          selectedDateTime.day >= startDate.day &&
          selectedDateTime.day <= endDate.day
      );
  });
  console.log('====================================');
  console.log('filteredData',filteredData);
  console.log('====================================');
  return (
    <div>
        <Flex direction={'column'}justify={'space-between'}>
    <Flex bg='' justify={'space-between'} gap={'10px'}>
        <Box w='50%' bg=''>
          {/* <CalenderCale/> */}
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
          </Box>
        <Box w='100%' bg=''>
          {isSunday(inputDate)?(<CalendarHoliday data={'sunday'} message={'nothin'}/>):
          <CalendarHoliday data={calender} message={calender2}/>}</Box>
        <Box w='100%'><Announcements data={filteredData} message={calender3}/></Box>

    </Flex>



    <Flex bg='' direction={''} justify={'space-between'}>
        <Box w='50%' bg=''><CalendarTask/></Box>
        <Box w='50%' bg=''><ThirdSection/></Box>

    </Flex>
        </Flex>
    </div>
  )
}


export default Calender2