import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { ViewIcon } from "@chakra-ui/icons";
import { FaFilter } from "react-icons/fa";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getempTicket, updateTicketStatus } from "../../Redux/ticket/action";
import { getempasset, updateASSETStatus } from "../../Redux/asset/action";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, SimpleGrid } from '@chakra-ui/react';



const EmployeeServiceRequestTicket = () => {
  const  ticket= useSelector((store) => store.ticket.data);
  const  asset= useSelector((store) => store.asset.data);
console.log('====================================');
console.log(asset,ticket);
console.log('====================================');
const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();

// console.log('asset',asset)
const cancelRef = React.useRef()
const[product,setProduct]=useState('')
const[product1,setProduct1]=useState('')

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getempTicket())
    dispatch(getempasset())

  },[])

  const handleCheckboxChange = (el) => {
    // Handle checkbox state change
    console.log('el',el);
    onCloseModal4()
    dispatch(updateTicketStatus(el.ticket_id,{...el,
        // "project_name":"hib"
        "ticket_status":"Resolved",
        // "project_completion_date":formattedDate

    }))
  };


  const handleCheckboxChange2 = (el) => {
    // Handle checkbox state change
    console.log('el',el);
    onCloseModal4()
    dispatch(updateTicketStatus(el.ticket_id,{...el,
        // "project_name":"hib"
        "leaves_status":"cancel",
        // "project_completion_date":formattedDate

    }))
  };


  const handleCheckboxChange3 = (el) => {
    // Handle checkbox state change
    console.log('el',el);
    onCloseModal4()
    dispatch(updateASSETStatus(el.asset_id,{...el,
        // "project_name":"hib"
        "asset_status":"submitted",
        // "project_completion_date":formattedDate

    }))
  };

    return (
        <>
        <Flex justifyContent={'space-between'} p='10' borderRadius={'28px'} fontFamily="Inter" bg=''>
            <Box bg='' ml={'1%'} mt={'-1%'} alignItems={'center'}>
                <Text fontFamily="Inter" textAlign={'center'} fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" >
                    Service Request
                </Text>
            </Box>

            <Box bg=''>
                <Flex bg='' ml={'-2%'} mt={'-5%'} width={'100%'} gap='4' justify={'space-between'} >
                    <Button leftIcon={<FaFilter color="#FFB800" />}  border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                        Filter
                    </Button>
                    <Button leftIcon={<ArrowUpIcon color="#FFB800" />}  border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
                        Export
                    </Button>
                </Flex>
            </Box>
        </Flex>


<Box marginBottom={'10'}>
  <Heading size='md' textAlign={'center'} p='5'>Asset</Heading>
<Flex w={'100%'}  fontFamily="Inter">
            <TableContainer w={'100%'}  ml={20} textAlign={'Center'} fontFamily="Inter" borderRadius={'28px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Asset Id</Th>
                    <Th>Catergory</Th>
                    <Th>Assign Time</Th>
                    <Th>Submitted Time</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                {asset&&asset.map((el)=>{
                  return  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.asset_id}</Td>
                    <Td>{el.asset_category}</Td>
                    <Td>{el.asset_assigned_time}</Td>
                    <Td>{el.asset_submitted_time}</Td>
                    <Td color={'red'}>
                    {el.asset_status=='assigned'?(<>
                    <Button variant={'outline'} onClick={()=>{            
                             onOpenModal3()

                      setProduct1(el)}
                      } color={'orange'} >Pending</Button>
                    <AlertDialog
                       isOpen={isOpenModal3}
                       leastDestructiveRef={cancelRef}
                       onClose={onCloseModal3}
                     >
                       <AlertDialogOverlay>
                         <AlertDialogContent>
                           <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                           Ready to Change?
                           </AlertDialogHeader>
               
                           <AlertDialogBody>
                            What is the status of this Asset?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={onCloseModal4}>
                               Cancel
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>handleCheckboxChange3(product1)}
                            ml={3}>
                                 Submitted                             
                                 </Button>
                                 <Button colorScheme='red'                     
                        onClick={()=>handleCheckboxChange3(product1)}
                            ml={3}>
                                 Reject                             
                                 </Button>

                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialogOverlay>
                     </AlertDialog> 
                    </>
                    ):
                    el.asset_status=='submitted'?(<><Button variant={'outline'} color={'green'} >Resolved</Button>
                    
                    
                    
                    
                    </>):
                    el.ticket_status=='Cancel'?(<Button variant={'outline'} color={'red'} >Rejected</Button>):''

                    }
                  </Td>                    {/* <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td> */}
                  </Tr>
                </Tbody>
                })}
               
              </Table>
          </TableContainer>

        </Flex>
</Box>

<Box>
<Heading size='md'textAlign={'center'} p='5'>Ticket</Heading>

<Flex w={'100%'} fontFamily="Inter">
            <TableContainer w={'90%'} ml={20} mr={26} textAlign={'Center'} borderRadius={'18px'} >
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Ticket Id</Th>
                    <Th>Description</Th>
                    <Th>Catergory</Th>
                    <Th>Generation Time</Th>
                    <Th>Last Update</Th>
                    <Th>Resolve Time</Th>
                    <Th>Status</Th>
                    <Th>Priority</Th>
                  </Tr>
                </Thead>
                {ticket&&ticket.map((el)=>{
                  return  <Tbody bg='' width={'100%'}>
                  <Tr boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'} >
                    <Th><Checkbox ></Checkbox></Th>
                    <Td>{el.ticket_id}</Td>
                    <Td>{el.ticket_description}</Td>

                    <Td>{el.ticket_category}</Td>
                    <Td>{el.ticket_generation_time}</Td>
                    <Td>11pm</Td>
                    <Td>1pm</Td>

                    <Td color={'red'}>
                    {el.ticket_status=='Pending'?(<>
                    <Button variant={'outline'} onClick={()=>{            
                             onOpenModal4()

                      setProduct(el)}
                      } color={'orange'} >Pending</Button>
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
                            What is the status of this ticket?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={onCloseModal4}>
                               Cancel
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>handleCheckboxChange(product)}
                            ml={3}>
                                 Resolved                             
                                 </Button>
                                 <Button colorScheme='red'                     
                        onClick={()=>handleCheckboxChange2(product)}
                            ml={3}>
                                 Reject                             
                                 </Button>

                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialogOverlay>
                     </AlertDialog> 
                    </>
                    ):
                    el.ticket_status=='Resolved'?(<><Button variant={'outline'} color={'green'} >Resolved</Button>
                    
                    
                    
                    
                    </>):
                    el.ticket_status=='Cancel'?(<Button variant={'outline'} color={'red'} >Rejected</Button>):''

                    }
                  </Td>
                    <Td>{el.ticket_priority}</Td>
                    {/* <Td>{el.ticket_priority}</Td> */}

                    {/* <Td color={'orange'}><TbGps /></Td> */}
                    {/* <Td><DeleteIcon ml={4} color={'#FFB800'} /></Td> */}
                  </Tr>
                </Tbody>
                })}
              </Table>
          </TableContainer>

        </Flex>
</Box>

        </>
        )
    }
    
export default EmployeeServiceRequestTicket;