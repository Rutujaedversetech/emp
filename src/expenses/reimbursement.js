import React, { useEffect } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { Checkbox } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import ReimbursementRequest from "./reimbursement_form";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from "react-jwt";
import { deletereimbursement, getempreimbursment } from "../Redux/reimbursment/action";
import { MdDeleteOutline } from "react-icons/md";


const Reimbursement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const  reimbursement = useSelector((store) => store.reimbursement.data);
  console.log('reimbursement',reimbursement)

  const  data = useSelector((store) => store.auth.data);
  const  data2 = useSelector((store) => store.auth.singleData);

console.log(data,data2)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123 asset',myDecodedToken);
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getempreimbursment(myDecodedToken.emp_id))
},[])

const onHnadleDElete=()=>{
  dispatch(deletereimbursement())
}
    return (
        <>
            <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
          Reimbursement
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            

            <Button  border={'1px'}onClick={onOpen}  borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
          Request for Reimbursement 
            </Button>


            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <ReimbursementRequest onClose={onClose} myDecodedToken={myDecodedToken}/>
          </ModalBody>

        
        </ModalContent>
      </Modal>
            
            </Flex>
            </Box>
          
         
          </Flex>



        <Flex w={'94%'} h={''} fontFamily="Inter" bg=''>
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th> Id</Th>
                    <Th>Description</Th>
                    <Th>Date & Time</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                {reimbursement&&reimbursement.map((el)=>{
                  console.log('====================================');
                  console.log(el);
                  console.log('====================================');
                  return (
                  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.reimbursement_id}</Td>

                    <Td>{el.reimbursement_description}</Td>
                    <Td>{el.reimbursement_date}</Td>
                    <Td>{el.reimbursement_amount}</Td>
                    <Td>{el.reimbursement_status}</Td>

                    <Td><MdDeleteOutline onClick={()=>onHnadleDElete()}/></Td>
                  </Tr>
                </Tbody>)
                })}
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default Reimbursement;