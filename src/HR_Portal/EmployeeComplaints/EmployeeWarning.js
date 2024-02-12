import React, { useState } from "react";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { Card, CardBody } from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
import { CheckCircleIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
import EmployeeWarningSend from "./EmployeeWarningSend";
import EmployeeWarningSendtwo from "./EmployeeWarningSend2";
import EmployeeWarningSendthree from "./EmployeeWarningSend3";



const EmployeeWarning = ({data}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
const [product,setProduct]=useState('')
    return (
        <Box > 
            <Text w={'100%'} mt={'6%'} ml={'4%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                Warnings
            </Text>

            <Card mt={'4%'} h={'20vh'}>
                <CardBody background={'#0F61AC1A'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#0F61AC'}/> 
                    <SmallCloseIcon ml={'96%'} mt={'-10%'}/>
                    <Flex color={'#0F61AC'} mt={'-11%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#0F61AC'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button 
                    	                     onClick={()=>{onOpen() 
                                                setProduct(data)    
                                                }} 
                    ml={'74%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#0F61AC'} colorScheme='#0F61AC' color={'white'} background={'#0F61AC'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                        Send
                    </Button>

                    <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <EmployeeWarningSend data1={product}/>
                    </ModalBody>
        
                    <ModalFooter>
                    </ModalFooter>
                    </ModalContent>
                    </Modal>

                </CardBody>
            </Card>

             <Card mt={'2%'} h={'20vh'}>
                <CardBody background={'#F0FFEF'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#027243'}/> 
                    <SmallCloseIcon ml={'96%'} mt={'-10%'}/>
                    <Flex color={'#027243'} mt={'-11%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#027243'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button onClick={()=>{
                        onOpenModal2()
                        setProduct(data)
                    }} ml={'74%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#027243'} colorScheme='#027243' color={'white'} background={'#027243'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                        Send
                    </Button>

                    <Modal isOpen={isOpenModal2} onClose={onCloseModal2} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <EmployeeWarningSendtwo data1={product}/>
                    </ModalBody>
        
                    <ModalFooter>
                    </ModalFooter>
                    </ModalContent>
                    </Modal>

                </CardBody>
            </Card>

            <Card mt={'2%'} h={'20vh'}>
                <CardBody background={'#FFEFEF'} borderRadius={'6px'} border={'1px'} borderColor={'#DDE2E4'}>
                    <CheckCircleIcon color={'#AC2734'}/> 
                    <SmallCloseIcon ml={'96%'} mt={'-10%'}/>
                    <Flex color={'#AC2734'} mt={'-11%'} ml={'5%'} fontFamily={'inter'}  lineHeight={'21.78px'} fontWeight={700}>
                        <h1 fontSize={'18px'}>Alert</h1>
                    </Flex>
                    <Text ml={'5%'} fontFamily={'inter'} fontSize={'14px'} fontWeight={500} lineHeight={'16.94px'} color={'#AC2734'}>Alert informs users about important changes or conditions in the interface. Use this component if you need to communicate to users in a prominent way.</Text>
                    <Button onClick={()=>{
                        onOpenModal3()
                        setProduct(data)
                    }} ml={'74%'} fontFamily={'Inter'} border={'4px'} borderRadius={'10px'} borderColor={'#027243'} colorScheme='#027243' color={'white'} background={'#027243'} variant='outline' padding={'8px, 24px, 8px, 24px'}>
                        Send
                    </Button>

                    <Modal isOpen={isOpenModal3} onClose={onCloseModal3} size={'lg'}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                      <EmployeeWarningSendthree data1={product} />
                    </ModalBody>
        
                    <ModalFooter>
                    </ModalFooter>
                    </ModalContent>
                    </Modal>
                </CardBody>
            </Card> 
        </Box>
        )
    }
    
export default EmployeeWarning;

