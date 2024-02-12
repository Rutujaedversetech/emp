import React, { useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { ViewIcon } from "@chakra-ui/icons";

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
import EmployeeWarning from "./EmployeeWarning";
import { useDispatch, useSelector } from "react-redux";
import { getempCOMPLAINTrequest } from "../../Redux/complaints/action";
import { useEffect } from "react";



const EmployeeComplaints = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const  complaints = useSelector((store) => store.complaints.data);
    const [product,setProduct]=useState("")
const dispatch=useDispatch()
console.log('====================================');
console.log('complaints',complaints);
console.log('====================================');
    useEffect(()=>{
      dispatch(getempCOMPLAINTrequest())
  },[])


    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>
            <Box bg='' ml={'1%'} mt={'-1%'} alignItems={'center'}>
                <Text fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
                    Employee Complaints
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
                    {/* <Button onClick={onOpen} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} variant='outline' borderColor={'black'} background={'black'}>
                        Send Warning
                    </Button> */}
                    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent >
                    <ModalCloseButton />
                    <ModalBody>
                        <EmployeeWarning data={product}/>
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
                  {/* <Th><Checkbox ></Checkbox></Th> */}
                    {/* <Th>Employee Id</Th> */}
                    <Th>Complaint Id</Th>
                    <Th>Complaint To</Th>
                    <Th>Date</Th>
                    <Th>Description</Th>
                    <Th>Priority</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                {complaints&&complaints.map((el)=>{
                  return                 <Tbody>
                  <Tr>
                    <Td>{el.complaint_id}</Td>
                    <Td>{el.complaint_to}</Td>
                    <Td>{el.complaint_date}</Td>
                    <Td>{el.complaint_description}</Td>
                    <Td color={'red'}>High</Td>
                    <Td color={'green'}>
                    <Button onClick={()=>{
                      onOpen()
                      setProduct(el)
                    }
                    
                    } border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} variant='outline' borderColor={'black'} background={'black'}>
                        Send Warning
                    </Button>
                    </Td>
                  </Tr>
                </Tbody>
                })}

              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default EmployeeComplaints;