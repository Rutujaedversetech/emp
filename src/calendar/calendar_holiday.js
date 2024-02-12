import React from "react";
import { Flex, Spinner, Stack } from "@chakra-ui/react";
import { Card, CardBody, Text, Box, Heading, Button } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
const CalendarHoliday = ({data,message}) => {
    console.log('dataholi',data,message);
    // if(data.length==0){
    //     return <Text>Office is Open</Text>
    // }
//     if(message=='loading'){
//         console.log('====================================');
//         console.log("loading/....");
//         console.log('====================================');
//         return <Stack>
//             <Spinner
//   thickness='4px'
//   speed='0.65s'
//   emptyColor='gray.200'
//   color='blue.500'
//   size='xl'
// />
//         </Stack>
//     }
    return (
        <>
            <Box  bg=''  w={'100%'} p={''} borderRadius={'18px'}>
                <Box>
                    <Heading  fontSize={'24px'} fontFamily={'inter'} padding={''}>Holidays
                    </Heading>
                    {message=='loading'?(<Stack>
            <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>
        </Stack>):
                   data.length==0?
                     <Flex w={'100%'} fontFamily="Inter"red bg=''  >
                     <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} >
                         <CardBody>
                             {/* <BsDot fontSize={'32px'} color="#FFB800"/> */}
                             {/* <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today {el.holiday_date_from} </Text> */}
                             <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>Office is open No Holiday </Text>
                             {/* <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text> */}
                         </CardBody>
                     </Card>
                    </Flex>
                    :
                    data=='sunday'?
                        <Flex   >
                        <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={''} >
                            <CardBody>
                                {/* <BsDot fontSize={'32px'} color="#FFB800"/> */}
                                {/* <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today {el.holiday_date_from} </Text> */}
                                <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>Its Sunday Office remains closed</Text>
                                {/* <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text> */}
                            </CardBody>
                        </Card>
                       </Flex>
                       :(
                        data&&data.map((el)=>{
                            return(
         <Flex w={'100%'} fontFamily="Inter"red bg=''  >
         <Card w={'100%'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} >
             <CardBody>
                 <BsDot fontSize={'32px'} color="#FFB800"/>
                 <Text mt={'-4%'} ml={'8%'} fontSize={'16px'} color={'#707070'}>Today {el.holiday_date_from} </Text>
                 <Text ml={'8%'} fontSize={'18px'} fontStyle={'italic'}>New Year </Text>
                 <Text ml={'8%'} color={'#707070'} fontSize={'10px'}>Edverse Technology will be closed from 10:00AM to 7:00PM </Text>
             </CardBody>
         </Card>
        </Flex>)
                        })
                       )
                    }
                </Box>
               
          
                
            </Box>
        </>
        )
    }
    
export default CalendarHoliday;
