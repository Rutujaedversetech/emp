import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import FirstSectionRight from './RightSection/FirstSectionRight'
import Calender from './RightSection/Calender'
import { Avatar, Flex, Text, Stack, Heading, Card, CardBody, Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
//import { getempANNOUNCEMENT } from '../Redux/announcement/action'
import { BsDot } from "react-icons/bs";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { getempANNOUNCEMENT } from '../../Redux/announcement/action'
import Announcements from '../../calendar/Announcements'
const RightSection = () => {
  const  announcement = useSelector((store) => store.announce.data);
  const  calender3 = useSelector((store) => store.announce.AllProducts.message);
  
  
  const [date, setDate] = useState(new Date());
  const filterAnnouncement=announcement&&announcement.filter((el)=>el.events=='announcement')
console.log('====================================');
console.log('filterAnnouncement543',announcement,filterAnnouncement);
console.log('====================================');
  const onChange = (newDate) => {
    setDate(newDate);
  };
  const originalDate = new Date(date);
const dispatch=useDispatch()
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString('en-IN', options);
useEffect(()=>{
  dispatch(getempANNOUNCEMENT())
},[])
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

//   const filterAnnouncement=filteredData&&filteredData.filter((el)=>el.events=='announcement')
// console.log('====================================');
// console.log('filterAnnouncement789',filterAnnouncement);
// console.log('====================================');




  return (

<Flex direction={'column'}>
<Box w='100%'><Announcements data={filteredData} message={calender3}/></Box>

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
</Box>


</Flex>
        )
}

export default RightSection