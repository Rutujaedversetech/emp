import React from "react";
import { Box, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa6";
import { CloseIcon } from "@chakra-ui/icons";
import { FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";
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
import PickATime from "./pick_a_time";


const NewMeetCalendar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box  w={'100%'} padding={'2%'} >
            <Flex ml={'5%'} w={'90%'} h={'70vh'}>
               {/* <FaArrowLeft color="#707070"/>*/}
                <Text w={'100%'} mt={'0%'} ml={'4%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                    New Meeting
                </Text>
                
                <FormControl mt={'18%'} ml={'-100%'} fontFamily={'inter'}>
                    <FormLabel>Meeting Title</FormLabel>
                    <Input />

                    <FormLabel mt={'6%'}>Video Conferencing</FormLabel>
                        <Select placeholder='Select category'>
                            <option>xyz</option>
                            <option>pqr</option>
                        </Select>

                    <FormLabel mt={'6%'}>Conference Room</FormLabel>
                    <Input />

                    <FormLabel mt={'6%'}>Add Guest</FormLabel>
                    <Input />

                    <Button onClick={onOpen} mt={'12%'} ml={'64%'} fontFamily={'inter'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                        Pick A Time
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose}>
                      <ModalOverlay />
                      <ModalContent mt={'7%'}>
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody >
                          <PickATime />
                        </ModalBody>
              
                        {/* 
                        <ModalFooter>
                          <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                          </Button>
                          <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                        */}
                      </ModalContent>
                    </Modal>
                </FormControl>
            </Flex>

        
        </Box>
        )
    }
    
export default NewMeetCalendar;