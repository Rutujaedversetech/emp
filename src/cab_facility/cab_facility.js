import React, { useEffect } from "react";
import { Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { Checkbox } from "@chakra-ui/react";
import { TbGps } from "react-icons/tb";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import BookACab from "./book_a_cab";
import { useDispatch, useSelector } from "react-redux";
import { decodeToken } from 'react-jwt';
import { getempcabrequest } from "../Redux/cab/action";

const CabFacility = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const  data = useSelector((store) => store.auth.data);
  const  data2 = useSelector((store) => store.auth.singleData);
  const  cab = useSelector((store) => store.cab.data);
  console.log('cab',cab)
const dispatch=useDispatch()
console.log(data,data2)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123 asset',myDecodedToken);

useEffect(()=>{
  dispatch(getempcabrequest(myDecodedToken.emp_id))
},[])


    return (
        <>
        <Flex w={'100%'} h={100} borderRadius={'28px'} fontFamily="Inter">
            <Text w={'100%'} mt={25} ml={54} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              Cab Facility
            </Text>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={-400} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} paddingLeft={6} paddingRight={4} colorScheme='#DDE2E4' variant='outline'>
                Filter
            </Button>

            <Button mt={5} onClick={onOpen} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={30} paddingRight={6} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
           Book Your Cab
            </Button>



            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <BookACab onClose={onClose} myDecodedToken={myDecodedToken}/>
          </ModalBody>

          <ModalFooter>
           

            {/* <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>


        </Flex>


        <Flex w={'94%'} fontFamily="Inter">
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Booking Id</Th>
                    <Th>Date & Time</Th>
                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Track</Th>
                  </Tr>
                </Thead>
                {cab&&cab.map((el)=>{
                  return  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>2348543</Td>
                    <Td>{el.cab_date}</Td>
                    <Td>{el.cab_from}</Td>
                    <Td>{el.cab_to}</Td>
                    <Td color={'orange'}><TbGps /></Td>
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
    
export default CabFacility;