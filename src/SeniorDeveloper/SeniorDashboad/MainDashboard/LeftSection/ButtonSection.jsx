import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, ButtonGroup,Button, Text,Flex, Spacer, Input, useDisclosure, FormControl, FormLabel, Stack, HStack, VStack, Textarea, Select } from '@chakra-ui/react'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


const FiltrButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
  return (
    <Box mt={'1%'} ml={'5%'} w={'84%'} h={'8vh'} bg={'white'} boxShadow='0px 5px 20px 0px #00000026' borderTopRadius={'18px'} px={{ base: 4, md: 8 }} py={'2'}>        
      <Flex minWidth='max-content' alignItems='center' gap='2' pt={5} px={{ base: 2, sm: 12, md: 17 }} >
          <ButtonGroup gap='2'>
            <Button mt={'-24%'} ml={'-18%'} fontFamily={'Inter'} fontSize={'18px'} bg='transparent' colorScheme='' variant='' color={'black'}>
              Leave Reports
            </Button>
          </ButtonGroup>
          <Spacer />

        <Box mt={'-4%'} p='2'>
          <ButtonGroup gap='2'>
            <Button fontFamily={'Inter'} leftIcon={<ArrowForwardIcon color={'#FFB800'} />} colorScheme='' variant='outline' borderColor={'#DDE2E4'}>
              Export CSV
            </Button>
            <Button fontFamily={'Inter'} bg='black' variant='outline' color={'orange'} onClick={onOpen}>
              Leave Request
            </Button>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              size={'xl'}
              onClose={onClose}
            >
              <ModalOverlay />
              <ModalContent fontFamily={'Inter'}>
                <ModalHeader>Leave Request</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                <Stack spacing={4}>
                  <HStack>
                    <Box >
                      <FormControl id="firstName" isRequired fontFamily={'Inter'}> 
                        <FormLabel>Leave Type</FormLabel>
                          {/* <Input type="text" /> */}
                            <Select placeholder='Full Day'>
                              <option value='option1'>Full Time</option>
                              <option value='option2'>part Time</option>
                              <option value='option3'>Option 3</option>
                            </Select>
                      </FormControl>
                    </Box>
                    <Box fontFamily={'Inter'}>
                      <FormControl id="lastName">
                        <FormLabel>Duration in Days</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                <Stack>
                <VStack bg='' align={'start'} fontFamily={'Inter'}>
                  <Text as={'b'}>Dates</Text>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel color={'gray'}>From</FormLabel>
                        <Input type="date" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName">
                        <FormLabel color={'gray'}>To</FormLabel>
                        <Input type="date" />
                      </FormControl>
                    </Box>
                  </VStack>
                </Stack>
                  <FormControl id="email" isRequired fontFamily={'Inter'}>
                    <FormLabel>Reasons</FormLabel>
                    <Textarea></Textarea>
                  </FormControl>
                </Stack>
                </ModalBody>
                <ModalFooter>
                <Button fontFamily={'Inter'} onClick={onClose}>Cancel</Button>
                <Button fontFamily={'Inter'} ml={'2%'} bg='black' variant='outline' color={'orange'} onClick={onOpen}>
                  Request Now
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </ButtonGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default FiltrButton



