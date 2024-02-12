import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import RaiseRequest from "../raise_request/raise_request";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getempTicket } from "../Redux/ticket/action";
import { decodeToken } from "react-jwt";

const Ticket = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const  data = useSelector((store) => store.auth.data);
  const  data2 = useSelector((store) => store.auth.singleData);
  const  ticket2 = useSelector((store) => store.ticket);

  const  ticket1 = useSelector((store) => store.ticket.data);
  console.log('ticket',ticket2)
console.log(data,data2)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123 asset',myDecodedToken);


const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getempTicket(myDecodedToken.emp_id))
  },[])
const ticket=ticket1&&ticket1.filter((el)=>el.emp_id==myDecodedToken.emp_id)
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Ticket
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            <Button leftIcon={<ArrowUpIcon color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={12} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
            Export
            </Button>

            <Button  border={'1px'} borderRadius={'10px'} 
            colorScheme='#FFB800' background={'black'} onClick={onOpen}
            color={'#FFB800'} variant='outline' borderColor={'black'}>
            Raise Request
            </Button>
            
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <RaiseRequest onClose={onClose} myDecodedToken={myDecodedToken}/>
          </ModalBody>

          {/* <ModalFooter>
           

            <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>




            </Flex>
            </Box>
          
         
          </Flex>


          <Flex w={'100%'} fontFamily="Inter">
            <TableContainer w={'90%'} ml={20} mr={26} textAlign={'Center'} borderRadius={'18px'} >
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Ticket Id</Th>
                    <Th>Description</Th>
                    <Th>Catergory</Th>
                    <Th>Generation Time</Th>
                    <Th>Last Update</Th>
                    <Th>Resolve Time</Th>
                    <Th>Status</Th>
                    <Th>Priority</Th>
                  </Tr>
                </Thead>
                {ticket&&ticket.map((el)=>{
                  return  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.ticket_id}</Td>
                    <Td>{el.ticket_description}</Td>

                    <Td>{el.ticket_category}</Td>
                    <Td>{el.ticket_generation_time}</Td>
                    <Td>11pm</Td>
                    <Td>1pm</Td>

                    <Td>{el.ticket_status}</Td>

                    <Td>{el.ticket_priority}</Td>
                    {/* <Td>{el.ticket_priority}</Td> */}

                    {/* <Td color={'orange'}><TbGps /></Td> */}
                    {/* <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td> */}
                  </Tr>
                </Tbody>
                })}
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default Ticket;