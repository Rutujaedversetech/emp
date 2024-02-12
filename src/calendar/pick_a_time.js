import React, { useState } from "react";
import { Box, InputLeftAddon } from "@chakra-ui/react";
import { VStack, StackDivider, Stack } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Input, InputGroup, Button } from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { Card, CardBody, Text } from "@chakra-ui/react";



const PickATime = () => {
    const [activeCard, setActiveCard] = useState('suggested');

    const handleCardClick = (cardType) => {
      setActiveCard(cardType);
    };

    return (
        <>
            <Box w={'100%'} h={'60vh'} >
                <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                >
                <Box h='10vh' ml={'16%'} mt={'4%'}  >
                    <Stack direction={['column', 'row']} >
                        <Box
                            w='40%'
                            h='8vh'
                            borderLeftRadius={'28px'}
                            mt={'2%'}
                            onClick={() => handleCardClick('suggested')}
                            bg={activeCard === 'suggested' ? '#FFB800' : 'white'}
                        >
                            <Card fontSize={'16px'} w={'100%'} h='8vh' fontFamily={'inter'} background={'transparent'} borderLeftRadius={'28px'}>
                                <CardBody>
                                    <Text mt={'-12%'}>Suggested Time</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box
                            w='42%'
                            h='8vh'
                            borderRightRadius={'28px'}
                            ml={'-2%'}
                            mt={'2%'}
                            onClick={() => handleCardClick('manual')}
                            bg={activeCard === 'manual' ? '#FFB800' : 'white'}
                        >
                            <Card fontSize={'16px'} w={'100%'} h='8vh' fontFamily={'inter'} background={'transparent'} borderRightRadius={'28px'}>
                            <CardBody>
                                <Text mt={'-12%'}>Manual Selection</Text>
                            </CardBody>
                            </Card>
                        </Box>
                    </Stack>
                </Box>

                <Box ml={'10%'} h='12vh' w={'80%'} fontFamily={'inter'}>
                    <FormLabel>Duration</FormLabel>
                    <InputGroup boxShadow={'0px 5px 20px 0px #00000026'}  borderRadius={'18px'} >
                        <InputLeftAddon background={'white'} borderLeftRadius={'18px'}><TimeIcon color="#FFB800"  /></InputLeftAddon>
                        <Input borderRadius={'18px'} placeholder="Duration" />
                    </InputGroup>
                </Box>
                <Box mt={'2%'} ml={'10%'} h='10vh' w={'80%'} fontFamily={'inter'}>
                    <FormLabel>Suggested Time</FormLabel>
                    <Stack direction={['column', 'row']} spacing='24px'>
                        <Box w='30%' h='40px' boxShadow={'0px 5px 20px 0px #00000026'} borderRadius={'18px'} >
                            <Card fontSize={'12px'} w={'100%'} borderRadius={'18px'} >
                                <CardBody>
                                <Text>10:00AM- 11:00AM</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w='30%' h='40px' boxShadow={'0px 5px 20px 0px #00000026'}  borderRadius={'18px'}>
                            <Card fontSize={'12px'} w={'100%'} >
                                <CardBody>
                                <Text>11:00AM- 12:00PM</Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box w='30%' h='40px' boxShadow={'0px 5px 20px 0px #00000026'}  borderRadius={'18px'}>
                            <Card fontSize={'12px'} w={'100%'} >
                                <CardBody>
                                <Text>12:00PM- 01:00PM</Text>
                                </CardBody>
                            </Card>
                        </Box>
                    </Stack>
                </Box>
            </VStack>
            <Button mt={'14%'} ml={'56%'} fontFamily={'inter'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' color={'#FFB800'} background={'black'} borderColor={'black'}>
                Schedule Meeting
            </Button>

        </Box>
        </>
        )
    }
    
export default PickATime;