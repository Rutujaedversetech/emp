'use client'

import { useState } from 'react'
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  Text,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Form1 = ({setemp_is,setresigned_reason,setresigned_date,setresigned_status}) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
//   const [emp_is, setemp_is] = useState("");
//     const [resigned_reason, setresigned_reason] = useState("");
//     const [resigned_date, setresigned_date] = useState("");
//     const [resigned_status, setresigned_status] = useState("");
  return (
    <>
        <Box mt={'2%'}  w={'100%'} >
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={''}>
                <Flex w={'100%'} h={''} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Separation
                    </Text>
                </Flex>

                <FormControl mt={'6%'} ml={'-95%'} w={'90%'} fontFamily={'Inter'}>
                    <FormLabel>Employee Id</FormLabel>
                    <Input onChange={(e) => setemp_is(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    {/* <FormLabel>Select Type</FormLabel>
                        <Select placeholder='Select category' 
                        
                        boxShadow='0px 5px 20px 0px #00000026'>
                            <option>Resign</option>
                        </Select> */}

                    <FormLabel>Reason</FormLabel>
                    <Textarea onChange={(e) => setresigned_reason(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Date</FormLabel>
                    <Input type='date' onChange={(e) => setresigned_date(e.target.value)} boxShadow='0px 5px 20px 0px #00000026' />

                    <FormLabel>Status</FormLabel>
                    <Input onChange={(e) => setresigned_status(e.target.value)} boxShadow='0px 5px 20px 0px #00000026' />
                </FormControl>
            </Flex>


        
        </Box>
    </>
  )
}

const Form2 = () => {
  return (
    <Box mt={'2%'} w={'100%'} >
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={''}>
                <Flex w={'100%'} h={''} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Asset Clearance
                    </Text>
                </Flex>

                <FormControl mt={'6%'} ml={'-95%'} w={'90%'} fontFamily={'Inter'}>
                    <FormLabel>Asset Id</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Serial No</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Category</FormLabel>
                        <Select placeholder='Select category'  boxShadow='0px 5px 20px 0px #00000026'>
                            <option>Laptop</option>
                            <option>Mouse</option>
                        </Select>

                    <FormLabel>Status</FormLabel>
                    <Input boxShadow='0px 5px 20px 0px #00000026' />
                </FormControl>
            </Flex>

           
        
        </Box>
  )
}

const Form3 = ({setValue}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Website
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e)=>setValue(e.target.value)}
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  )
}

export default function Multistep() {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
const [value,setValue]=useState('')
const [emp_is, setemp_is] = useState("");
    const [resigned_reason, setresigned_reason] = useState("");
    const [resigned_date, setresigned_date] = useState("");
    const [resigned_status, setresigned_status] = useState("");
    console.log(emp_is,resigned_reason,resigned_date,resigned_status);
console.log('value',value);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        {step === 1 ? <Form1 
        setemp_is={setemp_is}
        setresigned_reason={setresigned_reason}
        setresigned_date={setresigned_date}
        setresigned_status={setresigned_status}

        
        /> : <Form2 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 2) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 2 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}