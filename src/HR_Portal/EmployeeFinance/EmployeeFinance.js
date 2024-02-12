import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { ViewIcon } from "@chakra-ui/icons";
import { IoPencilSharp } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import CreateFinance from "./CreateFinance";


const EmployeeFinance = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>
            <Box bg='' ml={'1%'} mt={'-1%'} alignItems={'center'}>
                <Text fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
                    Finance
                </Text>
            </Box>

            <Box bg=''>
                <Flex bg='' ml={'-2%'} mt={'-5%'} width={'100%'} gap='4' justify={'space-between'} >
                    <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                        Filter
                    </Button>
                    <Button leftIcon={<ArrowUpIcon color="#FFB800" />}  border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                        Export
                    </Button>
                    <Button onClick={onOpen} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} variant='outline' borderColor={'black'} background={'black'}>
                        Create
                    </Button>
                    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent mt={'2%'} h={'92vh'}>
                    <ModalCloseButton />
                    <ModalBody>
                      <CreateFinance />
                    </ModalBody>
        
                    <ModalFooter>
                    </ModalFooter>
                    </ModalContent>
                    </Modal>
                    
                </Flex>
            </Box>
        </Flex>


        <Flex w={'92%'} ml={'4%'} fontFamily="Inter" bg={''} boxShadow='0px 5px 20px 0px #00000016' borderRadius={'18px'}>
            <TableContainer w={'100%'} textAlign={'Center'} fontFamily="Inter" borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'} boxShadow='0px 5px 20px 0px #00000008'>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Employee Id</Th>
                    <Th>Employee Name</Th>
                    <Th>Designation</Th>
                    <Th>Month</Th>
                    <Th>Salary Slip</Th>
                    <Th>Edit</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Td><Checkbox ></Checkbox></Td>
                    <Td>Emp001</Td>
                    <Td>XYZ</Td>
                    <Td>Designer</Td>
                    <Td>Jan 2024 to Feb 2024</Td>
                    <Td><ViewIcon  color="#FFB800"/></Td>
                    <Td><IoPencilSharp  color="#FFB800" /></Td>
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default EmployeeFinance;