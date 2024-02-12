import React, { useEffect } from "react";
import { Flex, Input } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { ArrowUpIcon, AddIcon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { Stack, Box } from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";
import { Card, CardBody, FormLabel } from "@chakra-ui/react";
import { GoTriangleRight } from "react-icons/go";
import { IoPencilSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllusers } from "../../Redux/auth/action";
import { getempLEAVE } from "../../Redux/leaves/action";


const EmployeeManagement = () => {

    const  data1 = useSelector((store) => store.auth.Alluser);
const dispatch=useDispatch()
console.log('====================================');
console.log('data1',data1);
console.log('====================================');
const  leave = useSelector((store) => store.leave.data);


useEffect(()=>{
dispatch(getAllusers())
dispatch(getempLEAVE())

},[])


const leavepending=leave&&leave.filter((el)=>el.leaves_status =='pending')
console.log('====================================');
console.log('leavepending',leavepending);
console.log('====================================');
const data = [
    {
        "events": "announcement",
        "anno_date_from": "04/02/2024",
        "anno_date_to": "15/02/2024",
        "anno_description": "Announcement for XYZ Event",
        "anno_category": "Technical Event",
    },
    {
        "events": "announcement",
        "anno_date_from": "06/02/2024",
        "anno_date_to": "07/02/2024",
        "anno_description": "Announcement for XYZ Event",
        "anno_category": "Technical Event",
    }
];

// Get the current date
const currentDate = new Date();

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

const filteredData = leave.filter(event => {
    const startDate = parseDate(event.leave_date_from);
    const endDate = parseDate(event.leave_date_to);

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
const onLeave=filteredData&&filteredData.filter((el)=>el.leaves_status=='approved')
const onhalfLeave=filteredData&&filteredData.filter((el)=>el.leaves_status=='approved'&&el.type_of_leave=='half_day')
const active=Number(data1.length)
const active2=Number(onLeave.length)

console.log('active',active-active2);

    return (
        <>
        <Text w={'50%'} ml={'6%'} mt={'2%'} fontFamily="Inter" fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
            Manage Employees
        </Text>

        <Text w={'50%'} ml={'48%'} mt={'-1%'} fontFamily="Inter" fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
            Pending Approval
        </Text>

        <Flex w={'100%'} p={'5'} borderRadius={'28px'} bg={''} margin={'auto'}>
           
            <Stack direction={['column', 'row']} spacing='24px'bg='' p='' ml={'2%'} w={'96%'}>
                <Box w='22%' h='' fontFamily={'inter'} bg=''>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h=''>
                            <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4'}>
                                <CardBody>
                                <FormLabel textAlign={'center'} fontSize={'18px'}>Total Employee</FormLabel>
                                <FormLabel textAlign={'center'} fontSize={'18px'}>{data1.length}</FormLabel>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box h=''>
                            <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'}>
                                <CardBody>
                                <FormLabel textAlign={'center'} fontSize={'18px'}>On Leave</FormLabel>
                                <FormLabel textAlign={'center'} fontSize={'18px'} color={'red'}>{onLeave&&onLeave.length}</FormLabel>
                                </CardBody>
                            </Card>
                        </Box>
                    </VStack>
                </Box>

                <Box w='22%' h='' fontFamily={'inter'}>
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'
                    >
                        <Box h=''>
                            <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'}>
                                <CardBody>
                                <FormLabel textAlign={'center'} fontSize={'18px'}>Active</FormLabel>
                                <FormLabel textAlign={'center'} fontSize={'18px'} color={'green'}>{active-active2}</FormLabel>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box h='14vh'>
                            <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'}>
                                <CardBody>
                                <FormLabel textAlign={'center'} fontSize={'18px'}>Half-Day</FormLabel>
                                <FormLabel textAlign={'center'} fontSize={'18px'} color={'#FFB800'}>{onhalfLeave&&onhalfLeave.length}</FormLabel>
                                </CardBody>
                            </Card>
                        </Box>
                    </VStack>
                </Box>

                <Box w='54%' h='32vh'>
                    <Card boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} fontFamily={'inter'}>
                        <CardBody>
                            <TableContainer w={'90%'} h={''} ml={'5%'} textAlign={'Center'} borderRadius={'18px'}>
                                <Table variant='simple'>
                                <Thead>
                                    <Tr margin={'50px'}>
                                        <Th>Employee Id</Th>
                                        <Th>Reason</Th>
                                        <Th>Requests</Th>
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                {leavepending&&leavepending.map((el)=>{
                                    return <Tbody>
                                    <Tr  borderRadius={'4px'}>
                                        <Td>{el.emp_id}</Td>
                                        <Td>{el.leave_reason}</Td>
                                        <Td color={'red'}>{el.leaves_status}</Td>
                                        <Td><Link to='/LeaveReports'><GoTriangleRight /></Link></Td>
                                    </Tr>

                                </Tbody>
                                })}
                                
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
                </Box>
            </Stack>
        </Flex>

        <Flex w={'90%'} margin={'auto'} borderRadius={'18px'} fontFamily="Inter" justify={'space-between'}>
            <Text  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              Employee List
            </Text>

<Flex justify={'space-between'} gap={'10'} >
            {/* <Button leftIcon={<SearchIcon color="#FFB800" />} mt={'1%'}  border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
                Search By Employee Id
            </Button> */}
            <Input type="text" placeholder="Search By Employee Id"/>

            <Button leftIcon={<ArrowUpIcon color="#FFB800" />} 
             border={'1px'} borderRadius={'4px'} size={'lg'}
              colorScheme='#DDE2E4' variant='outline' color={'#707070'} borderColor={'#DDE2E4'}>
                Export
            </Button>

            <Button 
             border={'1px'} borderRadius={'10px'} colorScheme='black' size={'lg'} p='7'  
                        color={'#FFB800'} background={'black'} variant='outline' borderColor={'black'}>
                Add Employee
            </Button>
            </Flex>
        </Flex>


          <Flex w={'100%'} fontFamily="Inter" margin={'auto'}>
            <TableContainer w={'90%'} margin={'auto'} textAlign={'Center'} borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Employee Id</Th>
                    <Th>Name</Th>
                    <Th>Job Title</Th>
                    <Th>Department</Th>
                    <Th>Status</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                {data1&&data1.map((el)=>{
                    return  <Tbody>
                    <Tr  borderRadius={'18px'}>
                      <Td><Checkbox ></Checkbox></Td>
                      <Td>{el.emp_id}</Td>
                      <Td>{el.emp_name}</Td>
                      <Td>{el.emp_position}</Td>
                      <Td>{el.emp_dept}</Td>
                      <Td>Active</Td>
                      <Td><IoPencilSharp color="#FFB800" /></Td>
                    </Tr>
   
                  </Tbody>
                })}
               
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default EmployeeManagement;