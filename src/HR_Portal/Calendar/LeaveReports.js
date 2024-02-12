import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Box,Th, Td, TableContainer } from '@chakra-ui/react';
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from '@chakra-ui/react'
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/icon"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteLeaveemp, getempLEAVE, updateLEAVEStatus } from "../../Redux/leaves/action";
import { MdDeleteOutline } from "react-icons/md";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, SimpleGrid, useDisclosure } from '@chakra-ui/react';



const LeaveReports = () => {
    const dispatch=useDispatch()
    const  leave = useSelector((store) => store.leave.data);
    const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();

    const  asset = useSelector((store) => store.asset);
   // console.log('asset',asset)
   const cancelRef = React.useRef()
const[product,setProduct]=useState('')

console.log('====================================');
console.log('leave2',leave);
console.log('====================================');
    useEffect(()=>{
        dispatch(getempLEAVE())
      },[])
      const onHandleDelete=()=>{
        dispatch(deleteLeaveemp())
      }

      const handleCheckboxChange = (el) => {
        // Handle checkbox state change
        console.log('el',el);
        onCloseModal4()
        dispatch(updateLEAVEStatus(el.attendance_id,{...el,
            // "project_name":"hib"
            "leaves_status":"approved",
            // "project_completion_date":formattedDate

        }))
      };


      const handleCheckboxChange2 = (el) => {
        // Handle checkbox state change
        console.log('el',el);
        onCloseModal4()
        dispatch(updateLEAVEStatus(el.attendance_id,{...el,
            // "project_name":"hib"
            "leaves_status":"rejected",
            // "project_completion_date":formattedDate

        }))
      };
    return (
        <>
        <Flex w={'90%'} h={'10vh'} ml={'5%'} borderRadius={'18px'} fontFamily="Inter">
            <Text w={'86%'}  mt={'2%'} fontFamily="Inter" fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                Leave Report
            </Text>

            <Button leftIcon={<SearchIcon color="#FFB800" />} mt={'2%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'} color={'#707070'} fontFamily={'inter'}>
                Search By Employee Id
            </Button>

            <Button leftIcon={<ArrowUpIcon color="#FFB800" />} mt={'2%'} ml={'1%'} border={'1px'} borderRadius={'10px'}  colorScheme='#DDE2E4' variant='outline' color={'black'} borderColor={'#DDE2E4'}>
                Export
            </Button>
        </Flex>
        <Flex w={'100%'} h={''} borderRadius={'28px'} ml={'0%'}>
        <Table spacing={'10px'} 
               d="inline-block"
               // borderColor="gray.200"
        // borderRadius="md"
        // rounded="20px"
        rounded="md"
        w="100%"
        //m="50px"
        variant="simple"
              >
                <Thead>
                  <Tr margin={''}>
                    {/* <Th><Checkbox ></Checkbox></Th> */}
                    <Th>Reasons</Th>

                    <Th>Request to</Th>
                    <Th>Type</Th>

                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Days</Th>

                    <Th>Status</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead><Tbody>
                {leave&&leave.map((el)=>{
               return(
                <Tr 
                 px={{ base: 4, md: 8 }}
                 py={'2'}
                 bg={''}
                 boxShadow='0px 5px 20px 0px #00000026'
                 borderRadius={'4px'}
                 marginBottom={'100px'}
                >
                  {/* <Td><Checkbox ></Checkbox></Td> */}
                  <Td  bg=''><Box>{el.leave_reason}</Box></Td>
                  <Td>HR mam</Td>
                  <Td>{el.type_of_leave}</Td>
                  <Td>{el.leave_date_from}</Td>
                  <Td>{el.leave_date_to}</Td>
                  <Td>{el.leave_duration}</Td>

                  <Td color={'red'}>
                    {el.leaves_status=='pending'?(<>
                    <Button variant={'outline'} onClick={()=>{            
                             onOpenModal4()

                      setProduct(el)}
                      } color={'orange'} >Approve</Button>
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
                            Do you really want to Approve Leave?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={onCloseModal4}>
                               Cancel
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>handleCheckboxChange(product)}
                            ml={3}>
                                 Approve                             
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
                    el.leaves_status=='approved'?(<><Button variant={'outline'} color={'green'} >Approved</Button>
                    
                    
                    
                    
                    </>):
                    el.leaves_status=='rejected'?(<Button variant={'outline'} color={'red'} >Rejected</Button>):''

                    }
                  </Td>
                  <Td><MdDeleteOutline onClick={()=>onHandleDelete} /></Td>

                </Tr>)
                })}
              </Tbody>

              </Table>
        </Flex>

        </>
        )
    }
    
export default LeaveReports;