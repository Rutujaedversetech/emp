import React from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
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
import AssetRequest from "../asset_request/asset_request";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getempasset } from "../Redux/asset/action";
import { decodeToken } from 'react-jwt';

const Assets = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const  asset1 = useSelector((store) => store.asset.data);
  console.log('asset123',asset1)
  const  data = useSelector((store) => store.auth.data);
  const  data2 = useSelector((store) => store.auth.singleData);

console.log(data,data2)

const myDecodedToken = decodeToken(data.token);
console.log('myDecodedToken123 asset',myDecodedToken);

const asset=asset1&&asset1.filter((el)=>el.asset_allocated_to==myDecodedToken.emp_id)




    const dispatch = useDispatch();
  
    useEffect(()=>{
      dispatch(getempasset(myDecodedToken.emp_id))
   
  
    },[])
  
    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Asset
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

            <Button  border={'1px'} onClick={onOpen} borderRadius={'10px'} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            Asset Request
            </Button>
            

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AssetRequest onClose={onClose} myDecodedToken={myDecodedToken}/>
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



        <Flex w={'100%'}  fontFamily="Inter">
            <TableContainer w={'100%'}  ml={20} textAlign={'Center'} fontFamily="Inter" borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Asset Id</Th>
                    <Th>Catergory</Th>
                    <Th>Assign Time</Th>
                    <Th>Submitted Time</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                {asset&&asset.map((el)=>{
                  return  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.asset_id}</Td>
                    <Td>{el.asset_category}</Td>
                    <Td>{el.asset_assigned_time}</Td>
                    <Td>{el.asset_submitted_time}</Td>
                    <Td color={'red'}>pending</Td>
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
    
export default Assets;