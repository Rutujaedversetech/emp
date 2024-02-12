import React from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { Card, CardBody, Text, Box, Heading, Button } from "@chakra-ui/react";
import { CiCirclePlus } from "react-icons/ci";
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
import NewMeetCalendar from "./new_meeting";
const CalendarTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box >
                <Box>
                    <Heading ml={'4%'} fontSize={'24px'} fontFamily={'inter'}>
                     Today's Tasks
                     <Flex ml={'86%'} mt={'-6%'} w={'10%'} bg={''}>
                     <CiCirclePlus color="#F9BD3B" onClick={onOpen}/>
                     </Flex> 
                        <Modal isOpen={isOpen} size={'lg'} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader></ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                        <NewMeetCalendar />
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
                    </Heading>
                </Box>
                <Flex w={'100%'}  p='1' fontFamily="Inter" bg='' mt={'-4%'}>
                    <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>10:00 AM </Text>
                            <Text mt={'-10%'} ml={'46%'} color={'red'} fontSize={'10px'}>Meeting with John </Text>
                            <Box mt={'-12%'} ml={'25%'} w="70%" h="1px" bg="red" my={4} />
                        </CardBody>
                    </Card>
                </Flex>
                <Flex w={'100%'}p='1' fontFamily="Inter" >
                <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>11:00 AM </Text>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex w={'100%'} fontFamily="Inter" p='1' >
                <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>12:00 PM </Text>
                            <Card ml={'26%'} mt={'-8%'} w={'70%'} h={'6vh'} background={'#D4EEF6'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                                <CardBody>
                                    <Text mt={'-5%'}>Afternoon Meet</Text>
                                </CardBody>
                            </Card>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex w={'100%'} fontFamily="Inter" p='1' >
                <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>01:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex w={'100%'} fontFamily="Inter" p='1'>
                <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>02:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>
                <Flex w={'100%'} fontFamily="Inter" p='1' >
                <Card w={'100%'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'} mt={'4%'}>
                        <CardBody>
                            <Text>03:00 PM </Text>
                        </CardBody>
                    </Card>
                </Flex>
            </Box>
        </>
        )
    }
    
export default CalendarTask;
