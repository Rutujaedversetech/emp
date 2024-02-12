import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { Checkbox } from "@chakra-ui/react";
import { MdModeEdit } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import CreatePerformance from "./CreatePerformance";


const PerformanceTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Flex w={'96%'} h={100} borderRadius={'28px'} fontFamily="Inter">
            <Text mt={'2%'} ml={'4%'} w={'100%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
            Performance & Feedback
            </Text>

            <Button leftIcon={<SearchIcon color="#FFB800" />} mt={'2%'} ml={'2%'} border={'1px'} paddingLeft={'4%'} paddingRight={'4%'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
            Search By Employee Id
            </Button>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={'2%'} ml={'1%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DADADA'}>
            Filter
            </Button>

            <Button onClick={onOpen} mt={'2%'} ml={'1%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
            Create  
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent mt={'2%'}>
            <ModalCloseButton />
            <ModalBody>
              <CreatePerformance/>
            </ModalBody>
            </ModalContent>
            </Modal>
        
        </Flex>


        <Flex w={'94%'} ml={'3%'} h={'70vh'} fontFamily="Inter" boxShadow='0px 5px 20px 0px #00000016' borderRadius={'18px'}>
            <TableContainer w={'100%'} textAlign={'Center'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'} boxShadow='0px 5px 20px 0px #00000008'>
                  <Th><Checkbox ></Checkbox></Th>
                    <Th>Employee Id</Th>
                    <Th>Employee Name</Th>
                    <Th>Role</Th>
                    <Th>View</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>Emp001</Td>
                    <Td>B.A.Baracus</Td>
                    <Td>Developer</Td>
                    <Td><ViewIcon ml={2} color={'#FFB800'}/></Td>
                    <Td><MdModeEdit ml={4} color={'#FFB800'} /></Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                    
                  </Tr>

                  <Tr>
                  <Th><Checkbox ></Checkbox></Th>
                    <Td>Emp001</Td>
                    <Td>B.A.Baracus</Td>
                    <Td>Developer</Td>
                    <Td><ViewIcon ml={2} color={'#FFB800'}/></Td>
                    <Td><MdModeEdit ml={4} color={'#FFB800'} /></Td>
                    <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td>
                    
                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default PerformanceTable;