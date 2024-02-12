import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { Card, CardBody } from "@chakra-ui/react";
import { Stack, Box } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Table, Tbody, TableContainer, Thead, Tr, Th, Checkbox, Td } from "@chakra-ui/react";



const EmployeeMonitoring = () => {
    return (
        <>
        <Box ml={'2%'} w={'96%'} h={'84vh'}>
            <Flex mt={'-2%'} w={'100%'} h={'14vh'} borderRadius={'28px'} fontFamily="Inter">
                <Text mt={'4%'} ml={'2%'} w={200} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                    Employee Monitor
                </Text>

                <Button leftIcon={<SearchIcon color="#FFB800" />} mt={'4%'} ml={'40%'} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
                    Search By Employee Id
                </Button>

                <Button leftIcon={<FaFilter color="#FFB800" />} mt={'4%'} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DADADA'}>
                    Filter
                </Button>

                <Button mt={'4%'} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                    Monitor
                </Button>
            </Flex>


            <Flex mt={'0%'} w={'96%'} h={'40vh'} ml={'2%'} fontFamily="Inter">
                <Stack direction={['column', 'row']} w={'100%'}>
                    <Box w='330px' h='24vh'>
                        <Card h={'8vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                            <CardBody>
                                <FormLabel mt={'-6%'} textAlign={'center'} fontFamily={'inter'} fontSize={'18px'}>Employee Id</FormLabel>
                                <FormLabel textAlign={'center'} mt={'-4%'} fontFamily={'inter'} fontSize={'14px'} color={'#707070'}>Emp013</FormLabel>
                            </CardBody>
                        </Card>

                        <Card mt={'6%'} h={'8vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                            <CardBody>
                                <FormLabel mt={'-6%'} textAlign={'center'} fontFamily={'inter'} fontSize={'18px'}>Login Time</FormLabel>
                                <FormLabel textAlign={'center'} mt={'-4%'} fontFamily={'inter'} fontSize={'14px'} color={'#707070'}>10:00 AM</FormLabel>
                            </CardBody>
                        </Card>
            
                    </Box>
                    <Box w='330px' h='24vh' ml={'7%'} >
                        <Card  h={'8vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                            <CardBody>
                                <FormLabel mt={'-6%'} textAlign={'center'} fontFamily={'inter'} fontSize={'18px'}>Employee Name</FormLabel>
                                <FormLabel textAlign={'center'} mt={'-4%'} fontFamily={'inter'} fontSize={'14px'} color={'#707070'}>B.A. Baracus</FormLabel>
                            </CardBody>
                        </Card>

                        <Card mt={'6%'} h={'8vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                                <CardBody>
                                    <FormLabel mt={'-6%'} textAlign={'center'} fontFamily={'inter'} fontSize={'18px'}>Logout Time</FormLabel>
                                    <FormLabel textAlign={'center'} mt={'-4%'} fontFamily={'inter'} fontSize={'14px'} color={'#707070'}>07:00 PM</FormLabel>
                                </CardBody>
                        </Card>
                    </Box>
                    <Box w='330px' h='24vh' ml={'7%'} mr={'-16%'}>
                        <Card h={'8vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                                <CardBody>
                                    <FormLabel mt={'-6%'} textAlign={'center'} fontFamily={'inter'} fontSize={'18px'}>Date</FormLabel>
                                    <FormLabel textAlign={'center'} mt={'-4%'} fontFamily={'inter'} fontSize={'14px'} color={'#707070'}>20 Jan 2024</FormLabel>
                                </CardBody>
                        </Card>
                    </Box>
                </Stack>
            </Flex>

            <Flex mt={'-14%'} ml={'2%'} w={'96%'}>
                <Flex  w={'100%'}>
                    <Text mt={'2%'} ml={'0%'} w={'100%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
                        Tracking
                    </Text>
                </Flex>

                <Flex mt={'5%'} ml={'-100%'} w={'100%'}>
                <TableContainer  w={'900%'} mt={'0%'}  textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                    <Table variant='simple'>
                        <Thead>
                        <Tr>
                        <Th><Checkbox ></Checkbox></Th>
                            <Th>Application Name</Th>
                            <Th>Use Time</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                        <Th><Checkbox ></Checkbox></Th>
                            <Td>Figma</Td>
                            <Td>2 Hours</Td>
                        </Tr>
                        <Tr>
                        <Th><Checkbox ></Checkbox></Th>
                            <Td>Unity</Td>
                            <Td>2 Hours</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                </Flex>
 
            </Flex>

            <Flex ml={'72%'} mt={'18%'}  fontFamily="Inter">
                <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                Download Sheet
                </Button>

                <Button mt={'-26%'} ml={'6%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                Download Video
                </Button>
               
            </Flex>
        </Box>
        </>
        )
    }
    
export default EmployeeMonitoring;