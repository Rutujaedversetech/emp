import React, { useState } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Checkbox, SimpleGrid, useDisclosure } from '@chakra-ui/react';
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
    ModalBody,
    ModalFooter,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getempasset } from "../../Redux/asset/action";
import CreateProjectTask from "./CreateProjects";
import { getempPASTBYproject2, getempoassignedBYproject2, getempongoingproject, updatePROJECTStatus } from "../../Redux/projects/action";
import { decodeToken } from "react-jwt";


const SeniorProjects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();

    const  asset = useSelector((store) => store.asset);
   // console.log('asset',asset)
   const cancelRef = React.useRef()
const[product,setProduct]=useState('')
   const  data = useSelector((store) => store.auth.data);
   const  project90 = useSelector((store) => store.project.data);
   const  projectassigned = useSelector((store) => store.project.assigneddata);
   const  projectpass = useSelector((store) => store.project.pastdata);
   const[value,setValue]=useState('mytask')
console.log('====================================');
console.log('authtoken',data);
console.log('====================================');

   const inputDate = new Date();
   const day = inputDate.getDate().toString().padStart(2, '0');
   const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
   const year = inputDate.getFullYear();
   
   const formattedDate = `${day}/${month}/${year}`;
console.log('formattedDate',formattedDate);


console.log('project',project90);
   const myDecodedToken = decodeToken(data&&data.token);
      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(getempoassignedBYproject2())
        dispatch(getempPASTBYproject2())
        dispatch(getempongoingproject(myDecodedToken.emp_id))


      },[])

      const handleCheckboxChange = (el) => {
        // Handle checkbox state change
        console.log('el',el);
        onCloseModal4()
        dispatch(updatePROJECTStatus(el.project_id,{...el,
            // "project_name":"hib"
            "project_status":"completed",
            "project_completion_date":formattedDate

        }))
      };

      const ongoingProjecthesd=project90&&project90.filter((el)=> el.project_status=='in_progress'&&el.project_head==myDecodedToken.emp_id)
const pastProjecthead=project90&&project90.filter((el)=> el.project_status=='completed'&&el.project_head==myDecodedToken.emp_id)
const myongoingProjecthesd=project90&&project90.filter((el)=> el.project_status=='in_progress'&&el.emp_id==myDecodedToken.emp_id)
const mypastProjecthead=project90&&project90.filter((el)=> el.project_status=='completed'&&el.emp_id==myDecodedToken.emp_id)

console.log('ongoingProjecthesd',ongoingProjecthesd,pastProjecthead);
    
    return (

        <>
               <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>

<Box bg='' alignItems={'center'}>
          <Text  fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
              Project Tracking
            </Text>
</Box>

<Box bg=''>

<Flex bg='' width={'100%'} gap='10' justify={'space-between'} >
<Button   borderRadius={'4px'}   color={'#FFB800'} variant='outline' borderColor={''}>
            Search by project
            </Button>
            <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} paddingLeft={50} paddingRight={10} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

            </Flex>
            </Box>
          
         
          </Flex>

        <Flex bg='' w={'100%'} h={''} borderRadius={'28px'} fontFamily="Inter">

            <TableContainer w={'100%'}  textAlign={'Center'} bg=''  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'4px'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr margin={'50px'} fontSize={'18px'} textAlign={'center'}>
                            <Th>Ongoing Projects</Th>
                            <Th>Past Projects</Th>
                            <Th>Last Updated On</Th>
                            <Th>Total Task</Th>
                            <Th><Button leftIcon={<FaPlus color="#FFB800" />} onClick={onOpen} mt={'2%'} ml={'28%'} border={'1px'} borderRadius={'4'} paddingLeft={4} paddingRight={4} colorScheme='#DDE2E4' variant='outline' borderColor={'black'} color={'#FFB800'} background={'black'} fontFamily={'inter'}>
                          Create New Project
                            </Button></Th>

                            
            <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
            <ModalOverlay />
            <ModalContent>
            <ModalCloseButton />
            <ModalBody>
            <CreateProjectTask onClose={onClose} empid={myDecodedToken.emp_id}/>
            </ModalBody>
 </ModalContent>
     </Modal>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontSize={'14px'} textAlign={'center'}>
                            <Td>{myongoingProjecthesd&&myongoingProjecthesd.length}</Td>
                            <Td>{mypastProjecthead&&mypastProjecthead.length}</Td>
                            <Td>19 Jan 2024</Td>
                            <Td>0</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </Flex>

        <Flex h={'90px'}justify={'space-between'} gap={'40px'} bg=''>
<SimpleGrid bg='' w='100%'>
{/* <Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>My Task</Heading>


    </Box> */}
    {value=='mytask'?(<><Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>My Projects</Heading>


    </Box>
    {myongoingProjecthesd.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                
                                <Text >You don't have any ongoing project</Text>
                                 
                            </Stack>
                        </CardBody>
                    </Card>):
   myongoingProjecthesd&&myongoingProjecthesd.map((el)=>{
            return(
                <Box bg=''>
                
                <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                background={''}>
                    <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>

        
                                  <Flex justify={'space-between'}>
                                  <Heading size='md'>{el.project_name}</Heading>
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
    <Heading size='md' textAlign={'center'}>Emplyoee Ongoing Projects</Heading>
</Box>
{ongoingProjecthesd.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                
                                <Text >currently there is no ongoing emplyoee project</Text>
                                 
                            </Stack>
                        </CardBody>
                    </Card>):
   ongoingProjecthesd&&ongoingProjecthesd.map((el)=>{
            return(
                <Box bg=''>
                
                <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                background={''}>
                    <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                <Box>

        
                                  <Flex justify={'space-between'}>
                                  <Heading size='md'>{el.project_name}</Heading>
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
                            Do you really want to change the status of project as completed?
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
                                        {el.project_description}              

        
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
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.project_start_date}</Text>
                                        </GridItem>
        
                                        <GridItem w='100%' h='2'>
                                            <Text fontSize={'13px'} color={"#00000080"}>{el.project_end_date}</Text>
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
    <Heading size='md' textAlign={'center'}>Emplyoee Completed Project</Heading>
</Box>
{pastProjecthead.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                
                            <Text >currently there is no completed emplyoee project</Text>
                                 
                            </Stack>
                        </CardBody>
                    </Card>):
   pastProjecthead&&pastProjecthead.map((el)=>{
                        return(
                            <Box bg=''>
                            
                            <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'4'} 
                            background={''}>
                                <Card background={'#ECF4FE'} bg=''>
                                    <CardBody>
                                        <Stack divider={<StackDivider />} spacing='4'>
                                            <Box>
            
                    
                                              <Flex justify={'space-between'}>
                                              <Heading size='md'>{el.project_name}</Heading>
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
                                                    {el.project_description}              
            
                    
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
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.project_start_date}</Text>
                                                    </GridItem>
                    
                                                    <GridItem w='100%' h='2'>
                                                        <Text fontSize={'13px'} color={"#00000080"}>{el.project_end_date}</Text>
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
    <Heading size='md' textAlign={'center'}>My Completed Projects</Heading>
    </Box>
    {mypastProjecthead.length==0?(  
                          <Card background={'#ECF4FE'} bg=''>
                        <CardBody>
                            <Stack divider={<StackDivider />} spacing='4'>
                                
                            <Text >currently there is no completed project</Text>
                                 
                            </Stack>
                        </CardBody>
                    </Card>):
   mypastProjecthead&&mypastProjecthead.map((el)=>{
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
    <Heading size='md' textAlign={'center'}>Project Manager</Heading>

    </Box>
                <Box className="task-btn-cont">
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" 
                        onClick={()=>setValue('mytask')}
                        >
                            My Project
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('emp.com.task')}>
                        Emp completed Project
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('my.com.task')}>
                            My Completed Project
                        </Button>
                    </Box>
                    <Box className="task-btn-cont-1">
                        <Button className="task-btn" onClick={()=>setValue('emp.on.task')}>
                        Employee  Project

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
    
export default SeniorProjects;

