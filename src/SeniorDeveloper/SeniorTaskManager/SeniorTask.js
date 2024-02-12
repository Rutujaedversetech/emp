import React, { useEffect, useState } from "react";
import { Button, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from "@chakra-ui/react";
import { Table, TableContainer, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { Card, CardBody, Stack, Heading, StackDivider, Text } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { CiCirclePlus } from "react-icons/ci";
import { Avatar, Wrap, AvatarGroup } from "@chakra-ui/react";
import { GridItem, Grid } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus, FaFilter } from "react-icons/fa";
import { SearchIcon } from "@chakra-ui/icons";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import CreateTasks from "./CreateTasks";
import { decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import { getempASSIGNEDTASK, getempongoingTASK, updateTASKStatus } from "../../Redux/task/action";
import TaskManager from "./TaskManager";
import { AlertDialog, AlertDialogBody,Checkbox, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from '@chakra-ui/react';


const SeniorTask = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const  data = useSelector((store) => store.auth.data);
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
    const cancelRef = React.useRef()
    const[product,setProduct]=useState('')
    const  data123 = useSelector((store) => store.task.data);
    const  assigneddata = useSelector((store) => store.task.assigneddata);
const[value,setValue]=useState('mytask')
console.log('====================================');
console.log('data123',data123);
console.log('====================================');
 const dispatch=useDispatch()
 //console.log('project',project90);
    const myDecodedToken = decodeToken(data.token);
    useEffect(()=>{
        dispatch(getempongoingTASK(myDecodedToken.emp_id))
        dispatch(getempASSIGNEDTASK())

    },[])
    const inputDate = new Date();
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;
 console.log('formattedDate',formattedDate);
    const handleCheckboxChange = (el) => {
        // Handle checkbox state change
        console.log('el',el);
        onCloseModal4()
        dispatch(updateTASKStatus(el.task_id,{...el,
            // "project_name":"hib"
            "task_status":"completed",
            "task_completion_date":formattedDate

        }))
      };
console.log('value',value);
    const ongoingtask=data123&&data123.filter((el)=> el.task_status=='pending'&&el.task_assign_by==myDecodedToken.emp_id)
const empcompletedtask=data123&&data123.filter((el)=> el.task_status=='completed'&&el.task_assign_by==myDecodedToken.emp_id)
const mycompletedtask=data123&&data123.filter((el)=> el.task_status=='completed'&&el.emp_id==myDecodedToken.emp_id)
const ongoingsenoirtask=data123&&data123.filter((el)=> el.task_status=='pending'&&el.emp_id==myDecodedToken.emp_id)
console.log('ongoingtask',ongoingsenoirtask);

    return (
        <>
               <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Task Tracking
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
<Button   borderRadius={'4px'}   color={'#FFB800'} variant='outline' borderColor={''}>
            Search by task
            </Button>
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>
 </Flex>
            </Box>
          
         
          </Flex>        <Flex  w={'100%'} h={'30%'} borderRadius={'28px'} fontFamily="Inter" mt={'-0.6%'}>
            <TableContainer w={'100%'} textAlign={'Center'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
            <Table variant='simple' mt={'-1%'}>
                    <Thead>
                        <Tr fontSize={'18px'} textAlign={'center'}>
                            <Th>Project Name</Th>
                            <Th>Assigned To</Th>
                            <Th>Last Updated On</Th>
                            <Th><Button leftIcon={<FaPlus color="#FFB800" />} onClick={onOpen} mt={5} ml={'40%'} border={'1px'}  borderRadius={'10px'} paddingLeft={4} paddingRight={4} colorScheme='#DDE2E4' variant='outline' borderColor={'black'} color={'#FFB800'} background={'black'} fontFamily={'inter'}>
                            Create New Task
                            </Button></Th>

 
                            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
                            <ModalOverlay />
                            <ModalContent>
                            <ModalCloseButton />
                            <ModalBody>
                              <CreateTasks onClose={onClose} empid={myDecodedToken.emp_id}/>
                            </ModalBody>
                
                            <ModalFooter>
                            </ModalFooter>
                            </ModalContent>
                          </Modal>

                     
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontSize={'16px'}>
                            <Td>POC2</Td>
                            <Td>
                                <Wrap>
                                    <Link to='/SeniorProjectsTeam'><AvatarGroup size={'sm'} max={3}> 
                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    </AvatarGroup></Link>
                                </Wrap>
                            </Td>
                            <Td>19 Jan 2024</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
        <Flex h={'90px'}justify={'space-between'} gap={'40px'} bg=''>
<SimpleGrid bg='' w='100%'>

    {value=='mytask'?(<><Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>My Task</Heading></Box> 
    {ongoingsenoirtask.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Text >You don't have any ongoing Task</Text>
                                 </Stack>
                        </CardBody>
                    </Card>):
   ongoingsenoirtask&&ongoingsenoirtask.map((el)=>{
            return(
                <Box bg=''>
                
                <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                background={''}>
                    <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>

        
                                  <Flex justify={'space-between'}>
                                  <Heading size='md'>{el.task_name}</Heading>
                                   {/* <Checkbox 
                                   //onChange={()=>handleCheckboxChange(el)}
                                   
                                   >Completed</Checkbox>
        
        <AlertDialog
                               isOpen={isOpen}
                               leastDestructiveRef={cancelRef}
                               onClose={onClose}
                             >
                               <AlertDialogOverlay>
                                 <AlertDialogContent>
                                   <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                   Ready to Leave?
                                   </AlertDialogHeader>
                       
                                   <AlertDialogBody>
                                   Select "Logout" below if you are ready to end your current session.                           </AlertDialogBody>
                       
                                   <AlertDialogFooter>
                                     <Button ref={cancelRef} onClick={onClose}>
                                       Cancel
                                     </Button>
                                     <Button colorScheme='red'  ml={3}>
                                         Logout                             
                                         </Button>
        
                                   </AlertDialogFooter>
                                 </AlertDialogContent>
                               </AlertDialogOverlay>
                             </AlertDialog> */}
                                  </Flex>
                                
                                    <Text >
                                        {el.task_description}              

        
                                    </Text>
        
                                    <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Start Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Estimated End Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Completion Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.task_start_date}</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.task_end_date}</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>-----</Text>
                                        </GridItem>
                                    </Grid>
        
                                </Box>
                                <Box>
                                    <Wrap>
                                        <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                        </AvatarGroup></Link>
                                    </Wrap>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
            )
        })}
    </>
        
    ):value=='emp.on.task'?(
        <><Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Emplyoee Ongoing Task</Heading>


    </Box>   
     {ongoingtask.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Text >Emplyoee don't have any ongoing task</Text>
                                 </Stack>
                        </CardBody>
                    </Card>):
   ongoingtask&&ongoingtask.map((el)=>{
            return(
                <Box bg=''>
                
                <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                background={''}>
                    <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>

        
                                  <Flex justify={'space-between'}>
                          <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.project_name}</Heading>
                          <Checkbox 
                           //onChange={()=>handleCheckboxChange(el)}
                           onChange={() => {
                            onOpenModal4();
                            setProduct(el)
                         }}                           
                         >Completed</Checkbox>

 <AlertDialog
                       isOpen={isOpenModal4}
                       leastDestructiveRef={cancelRef}
                       onClose={onCloseModal4}
                     >
                       <AlertDialogOverlay>
                         <AlertDialogContent>
                           <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                           Ready to Change?
                           </AlertDialogHeader>
               
                           <AlertDialogBody>
                            Do you really want to change the status of Task as completed?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={onCloseModal4}>
                               Cancel
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>handleCheckboxChange(product)}
  ml={3}>
                                 yes                             
                                 </Button>

                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialogOverlay>
                     </AlertDialog> 

                          </Flex>
                                
                                    <Text >
                                        {el.task_description}              

        
                                    </Text>
        
                                    <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Start Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Estimated End Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='1'>
                                            <Text fontSize={'18px'}>Completion Date</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.task_start_date}</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.task_end_date}</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>-----</Text>
                                        </GridItem>
                                    </Grid>
        
                                </Box>
                                <Box>
                                    <Wrap>
                                        <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                            <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                        </AvatarGroup></Link>
                                    </Wrap>
                                </Box>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>
            </Box>
            )
        })}
    </>
    ):value=='emp.com.task'?(
        <><Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Emplyoee Completed Task</Heading>


    </Box>
    {empcompletedtask.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Text >Emplyoee don't have any completed task</Text>
                                 </Stack>
                        </CardBody>
                    </Card>):
   empcompletedtask&&empcompletedtask.map((el)=>{
                        return(
                            <Box bg=''>
                            
                            <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                            background={''}>
                                <Card background={'#ECF4FE'} bg=''>
                                    <CardBody>
                                        <Stack divider={<StackDivider />} spacing='4'>
                                            <Box>
            
                    
                                              <Flex justify={'space-between'}>
                                              <Heading size='md'>{el.task_name}</Heading>
                                               {/* <Checkbox 
                                               //onChange={()=>handleCheckboxChange(el)}
                                               
                                               >Completed</Checkbox>
                    
                    <AlertDialog
                                           isOpen={isOpen}
                                           leastDestructiveRef={cancelRef}
                                           onClose={onClose}
                                         >
                                           <AlertDialogOverlay>
                                             <AlertDialogContent>
                                               <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                               Ready to Leave?
                                               </AlertDialogHeader>
                                   
                                               <AlertDialogBody>
                                               Select "Logout" below if you are ready to end your current session.                           </AlertDialogBody>
                                   
                                               <AlertDialogFooter>
                                                 <Button ref={cancelRef} onClick={onClose}>
                                                   Cancel
                                                 </Button>
                                                 <Button colorScheme='red'  ml={3}>
                                                     Logout                             
                                                     </Button>
                    
                                               </AlertDialogFooter>
                                             </AlertDialogContent>
                                           </AlertDialogOverlay>
                                         </AlertDialog> */}
                                              </Flex>
                                            
                                                <Text >
                                                    {el.task_description}              
            
                    
                                                </Text>
                    
                                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Start Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Estimated End Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Completion Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.task_start_date}</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.task_end_date}</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>-----</Text>
                                                    </GridItem>
                                                </Grid>
                    
                                            </Box>
                                            <Box>
                                                <Wrap>
                                                    <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                                    </AvatarGroup></Link>
                                                </Wrap>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Box>
                        )
        })}
    </>
    ):value=='my.com.task'?(
        <><Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>My Completed Task</Heading>
</Box>
{mycompletedtask.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Text >you don't have any completed task</Text>
                                 </Stack>
                        </CardBody>
                    </Card>):
   mycompletedtask&&mycompletedtask.map((el)=>{
                        return(
                            <Box bg=''>
                            
                            <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                            background={''}>
                                <Card background={'#ECF4FE'} bg=''>
                                    <CardBody>
                                        <Stack divider={<StackDivider />} spacing='4'>
                                            <Box>
            
                    
                                              <Flex justify={'space-between'}>
                                              <Heading size='md'>{el.task_name}</Heading>
                                               
                                              </Flex>
                                            
                                                <Text >
                                                    {el.task_description}              
            
                    
                                                </Text>
                    
                                                <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Start Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Estimated End Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='1'>
                                                        <Text fontSize={'18px'}>Completion Date</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.task_start_date}</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.task_end_date}</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>-----</Text>
                                                    </GridItem>
                                                </Grid>
                    
                                            </Box>
                                            <Box>
                                                <Wrap>
                                                    <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                                    </AvatarGroup></Link>
                                                </Wrap>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Box>
                        </Box>
                        )
        })}
    </>
    ):""
    
    }

        </SimpleGrid>



         {/* <SimpleGrid bg='' w='33%'>

<Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Employee Task</Heading>

    </Box>
{ongoingtask&&ongoingtask.map((el)=>{
    return(
        <Box bg=''>
           
        <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
            <Card background={'#ECF4FE'} bg=''>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                           

                            <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.task_name}</Heading>
                        
                            <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                {el.task_description}              
                              

                            </Text>

                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Start Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Estimated End Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Completion Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_start_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_end_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                </GridItem>
                            </Grid>

                        </Box>
                        <Box>
                            <Wrap>
                                <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup></Link>
                            </Wrap>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </Box>
    )
})}
        </SimpleGrid>  */}


        <Box marginTop={3}>
        <Box className="task-manager" bg='' boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius='4'>
            {/* <Paper elevation={3}> */}
            <Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Task Manager</Heading>

    </Box>
                <Box className="task-btn-cont">
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" 
                        onClick={()=>setValue('mytask')}
                        >
                            My Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('emp.com.task')}>
                        Emp completed Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('my.com.task')}>
                            My Completed Task
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('emp.on.task')}>
                        Employee  Task

                        </Button>
                    </Box>
                </Box>
            {/* </Paper> */}
        </Box>
    {/* <TaskManager/> */}
</Box>





        {/* <SimpleGrid bg='' w='33%'>
<Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Completed Task</Heading>

    </Box>
    {completedtask&&completedtask.map((el)=>{
    return(
        <Box bg=''>
           
        <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
            <Card background={'#ECF4FE'} bg=''>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                           

                            <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.task_name}</Heading>
                        
                            <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                {el.task_description}              
                              

                            </Text>

                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Start Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Estimated End Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Completion Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_start_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_end_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                </GridItem>
                            </Grid>

                        </Box>
                        <Box>
                            <Wrap>
                                <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup></Link>
                            </Wrap>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </Box>
    )
})}
        </SimpleGrid> */}
</Flex>   
       


      </>
        )
    }
    
export default SeniorTask;

