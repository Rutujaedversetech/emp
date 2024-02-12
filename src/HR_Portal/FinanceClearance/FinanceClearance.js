import React from "react";
import { Box, FormLabel } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { TableContainer, Thead, Tr, Th, Tbody, Table, Checkbox, Td } from "@chakra-ui/react";



const FinanceClearance = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Finance Clearance
                    </Text>
                </Flex>
                <Flex mt={'6%'} ml={'-95%'} w={'90%'} h={'26vh'} fontFamily={'Inter'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                    <FormLabel ml={'4%'}>Outstanding Payments</FormLabel>
                    <TableContainer w={'90%'} mt={'3%'} ml={'-25%'} textAlign={'Center'} borderRadius={'18px'}>
                        <Table variant='simple'>
                            <Thead>
                            <Tr margin={'50px'}>
                                <Th>Type</Th>
                                <Th>Amount</Th>
                                <Th>Pending Amount</Th>
                                <Th>Status</Th>
                                <Th><Checkbox ></Checkbox></Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr  borderRadius={'18px'}>
                                <Td>Pay slip</Td>
                                <Td>30,000</Td>
                                <Td>10,000</Td>
                                <Td color={'#FFB800'}>Pending</Td>
                                <Td><Checkbox ></Checkbox></Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>
               
                <Flex mt={'34%'} ml={'-90%'} w={'90%'} h={'26vh'} fontFamily={'Inter'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
                <FormLabel ml={'4%'}>Final Settlement</FormLabel>
                <TableContainer w={'92%'} mt={'3%'} ml={'-20%'} textAlign={'Center'} borderRadius={'18px'}>
                        <Table variant='simple'>
                            <Thead>
                            <Tr margin={'50px'}>
                                <Th>Type</Th>
                                <Th>Amount</Th>
                                <Th>Paid</Th>
                                <Th>Pending Amount</Th>
                                <Th>Status</Th>
                                <Th><Checkbox ></Checkbox></Th>
                            </Tr>
                            </Thead>
                            <Tbody>
                            <Tr  borderRadius={'18px'}>
                                
                                <Td>Pay slip</Td>
                                <Td>30,000</Td>
                                <Td>10,000</Td>
                                <Td>20,000</Td>
                                <Td color={'#FFB800'}>Pending</Td>
                                <Td><Checkbox ></Checkbox></Td>
                            </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Flex>

                
            </Flex>


            <Flex fontFamily="Inter" ml={'64%'} >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/AssetClearance">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/ProjectHandover">Save & Continue</Link>    
                </Button>
            </Flex>
        
        </Box>
        )
    }
    
    
export default FinanceClearance;