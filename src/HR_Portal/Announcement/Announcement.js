import React, { useEffect } from "react";
import { Box, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { FaFilter } from "react-icons/fa";
import { Checkbox } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
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
import AnnouncementForm from "./AnnouncementForm";
import { useDispatch, useSelector } from "react-redux";
import { getempANNOUNCEMENT } from "../../Redux/announcement/action";
const Announcement = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const  announce = useSelector((store) => store.announce.data);
console.log('announce',announce);
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getempANNOUNCEMENT())
},[])
  //announce
  const filterAnnouncement=announce&&announce.filter((el)=> el.events=='announcement')
  console.log('====================================');
  console.log('filterAnnouncement',filterAnnouncement);
  console.log('====================================');
    return (
        <Box bg=''>
        <Flex w={'100%'} bg={''} p='5' borderRadius={'4px'} fontFamily="Inter" justify={'space-between'}>
            <Text  fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
            Announcement List
            </Text>

           <Flex justify={'space-between'} gap={'10'}>
           <Input placeholder="Search By Employee Id"/>

            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                Filter
            </Button>

            <Button onClick={onOpen}  border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='black' color={'#FFB800'} background={'black'} variant='outline' borderColor={'black'}>
              Create
            </Button>
           </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AnnouncementForm onClose={onClose} />
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


          <Flex w={'100%'} fontFamily="Inter" bg='' margin={'auto'}>
            <TableContainer w={'90%'} bg='' margin={'auto'} textAlign={'Center'} borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={''}>
                    <Th>Title</Th>
                    <Th>Description</Th>
                    <Th>Start Date</Th>
                    <Th>End Date</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                {filterAnnouncement&&filterAnnouncement.map((el)=>{
                  return <Tbody>
                  <Tr  borderRadius={'18px'}>
                    <Td>{el.anno_title}</Td>
                    <Td>{el.anno_description}</Td>
                    <Td>{el.anno_date_from}</Td>
                    <Td>{el.anno_date_to}</Td>
                    <Td>Upcoming</Td>
                  </Tr>
 
                </Tbody>
                })}
                
              </Table>
          </TableContainer>

        </Flex>

        </Box>
        )
    }
    
export default Announcement;


{/* <Tr  borderRadius={'18px'}>
                    <Td>{el.anno_title}</Td>
                    <Td>{el.anno_description}</Td>
                    <Td>{el.anno_date_from}</Td>
                    <Td>{el.anno_date_to}</Td>
                    <Td>Upcoming</Td>
                  </Tr> */}