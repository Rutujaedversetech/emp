import React, { useEffect } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Checkbox } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import CreateReferral from "./create_referral";
import { useDispatch, useSelector } from "react-redux";
import { addempREFERAL, deleteREFERRAl, getempReferal } from "../Redux/referral/action";
import { decodeToken } from "react-jwt";
import { MdDeleteOutline } from "react-icons/md";


const Referral = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
const dispatch=useDispatch()
const  data = useSelector((store) => store.auth.data);
//const  data2 = useSelector((store) => store.auth.singleData);
const  referral = useSelector((store) => store.referral.data);

console.log('referral',referral)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123 asset',myDecodedToken);

  useEffect(()=>{
dispatch(getempReferal(myDecodedToken.emp_id))
  },[])

  const onHnadleDElete=()=>{
    dispatch(deleteREFERRAl())
  }
  
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Referral
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
<Button  border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            <Link to="">Create Portal</Link>    
            </Button>
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            <Button onClick={onOpen} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            Create
            </Button>
          

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <CreateReferral onClose={onClose} myDecodedToken={myDecodedToken}/>
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


        <Flex w={'94%'} h={''} fontFamily="Inter">
            <TableContainer w={'100%'} ml={24} textAlign={'Center'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Candidate's Name</Th>
                    <Th>Contact</Th>
                    <Th>Applying Position</Th>
                    <Th>Status</Th>
                    <Th>Resume</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                {referral&&referral.map((el)=>{
                  console.log('====================================');
                  console.log(el);
                  console.log('====================================');
                  return (
                  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.referred_to}</Td>
                    <Td>{el.contact}</Td>
                    

                    <Td>{el.job_id}</Td>
                    <Td>{el.referral_status}</Td>
                    <Td>{el.upload_files}</Td>

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
    
export default Referral;