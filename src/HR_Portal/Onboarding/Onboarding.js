import React from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { FaFilter } from "react-icons/fa";
import { Checkbox } from '@chakra-ui/react'
import { FaEye } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";



const Onboarding = () => {
    return (
        <>
        <Flex w={'100%'} h={'90vh'} borderRadius={'18px'} fontFamily="Inter">
            <Text mt={25} ml={'5%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              Onboarding
            </Text>

            <Button leftIcon={<SearchIcon color="#FFB800" />} mt={5} ml={'58%'} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
                Search By Employee Id
            </Button>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={'2%'} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                Filter
            </Button>

          </Flex>


          <Flex w={'100%'} fontFamily="Inter">
            <TableContainer w={'90%'} mt={'-38%'} ml={'5%'} mr={26} textAlign={'Center'} borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Candidate Id</Th>
                    <Th>Job Position</Th>
                    <Th>Department</Th>
                    <Th>Location</Th>
                    <Th>Joining Date</Th>
                    <Th>Uploaded Documents</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr  borderRadius={'18px'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td><Link to='/JobProfile'>132546</Link></Td>
                    <Td>Developer</Td>
                    <Td>Development</Td>
                    <Td>Pune</Td>
                    <Td>24 Jan 2024</Td>
                    <Td><FaEye color="#FFB800" /></Td>
                    <Td>Pending</Td>
                  </Tr>
 
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default Onboarding;