import React, { useEffect, useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'
import { IoPencilSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';
import NewJob from "./NewJob";
import { useDispatch, useSelector } from "react-redux";
import { getempalljob, updatejobStatus } from "../../Redux/job/action";
import EditJob from "./EditJob";
import { FormControl,Textarea, Box,FormLabel, Input, Select } from "@chakra-ui/react";


const JobPosting = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();

  const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const[data,setData]=useState({})
  const  data1 = useSelector((store) => store.job.data);
console.log('data',data1);
const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getempalljob())
  },[])

  const handleChange=({target})=>{
    let val = target.value;

    console.log('val2',val)
    setData({ ...data, [target.name]: val });
  }
  const handleupdateSubmit=()=>{
    console.log('product',data);
    dispatch(updatejobStatus(data.job_id, {...data}));
    onCloseModal4()
  }
    return (
        <>
        <Flex w={'100%'} h={'90vh'} borderRadius={'18px'} fontFamily="Inter">
            <Text mt={25} ml={'5%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              Job Posting
            </Text>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={'57%'} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            <Button leftIcon={<ArrowUpIcon color="#FFB800" />} mt={5} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
            Export
            </Button>

            <Button onClick={onOpen} mt={5} ml={3} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#FFB800' background={'black'} color={'#FFB800'} variant='outline' borderColor={'black'}>
            Add New Job
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent mt={'2%'} h={'92vh'}>
            <ModalCloseButton />
            <ModalBody>
              <NewJob onClose={onClose} />
            </ModalBody>

            <ModalFooter>
            </ModalFooter>
            </ModalContent>
            </Modal>

          </Flex>


          <Flex w={'100%'} fontFamily="Inter">
            <TableContainer w={'90%'} mt={'-38%'} ml={'5%'} mr={26} textAlign={'Center'} borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Job Id</Th>
                    <Th>Department</Th>
                    <Th>Description</Th>
                    <Th>Vacancy</Th>
                    <Th>Location</Th>
                    <Th>Type</Th>
                    <Th>Edit</Th>
                  </Tr>
                </Thead>
                <Tbody>

                {data1&&data1.map((el)=>{
return <Tr  borderRadius={'18px'}>
   <Td><Checkbox ></Checkbox></Td>
   <Td>{el.job_id}</Td>
   <Td>{el.department}</Td>
   <Td>{el.job_description}</Td>
   <Td>{el.vacancy}</Td>
   <Td>{el.job_location}</Td>
   <Td>{el.job_type}</Td>
   <Td><IoPencilSharp onClick={() => {
                            onOpenModal4();
                            setData(el)
                         }}       

   color="#FFB800"/></Td>


 </Tr>
                })}
               </Tbody>
               <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenModal4}
        size={'xl'}
        onClose={onCloseModal4}
      >
        <ModalOverlay />
        <ModalContent>
          {/* <ModalHeader>Leav</ModalHeader> */}
          <ModalCloseButton />
          <ModalBody pb={6}>
        {/* <EditJob data={product}/> */}



        <Box mt={'1%'}  w={'100%'} h={''} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'100%'} h={''} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Edit Job
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={''} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Job Id</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026' />

                    <FormLabel >Department</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026' 
                  name="department"
                 onChange={handleChange}                    
                    value={data.department}/>

                    <FormLabel>Type</FormLabel>
                        <Select placeholder='Select category' 
                         name="job_type"
                         onChange={handleChange}                    
                            value={data.job_type}
                        boxShadow='0px 5px 20px 0px #00000026'>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Intern</option>
                        </Select>

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Vacancy</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Location</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} 
                                                 name="vacancy"
                                                 onChange={handleChange}                    
                                                    value={data.vacancy}
                        boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="job_location"
                        onChange={handleChange}                    
                           value={data.job_location}
                        />
                    </Flex>

                    <FormLabel>Requirement</FormLabel>
                    <Textarea  boxShadow='0px 5px 20px 0px #00000026'
                     name="job_requirement"
                     onChange={handleChange}                    
                        value={data.job_requirement}
                    />

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Salary Range</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Experience In Years</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="salary_range"
                        onChange={handleChange}                    
                           value={data.salary_range}
                        />
                        <Input w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="experienced_in_years"
                        onChange={handleChange}                    
                           value={data.experienced_in_years}
                        />
                    </Flex>

                    <FormLabel>Description</FormLabel>
                    <Textarea  boxShadow='0px 5px 20px 0px #00000026'
                    name="job_description"
                    onChange={handleChange}                    
                       value={data.job_description}
                    />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'68%'} mt={'10%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            <Link to="/JobPosting">Cancel</Link>
            </Button>
            <Button
            onClick={handleupdateSubmit}
            ml={'4%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            Add Job
            </Button>
        </Flex>

        
        </Box>








          </ModalBody>

          {/* <ModalFooter>
           
            <Button onClick={onClose}>Cancel</Button>
            <Button  bg='black' variant='outline' color={'orange'} onClick={onSubmit}>
    Request Now
  </Button>

          </ModalFooter> */}
        </ModalContent>
      </Modal>
              </Table>
          </TableContainer>

        </Flex>

        </>
        )
    }
    
export default JobPosting;