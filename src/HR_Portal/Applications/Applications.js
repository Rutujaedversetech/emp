import React, { useEffect, useState } from "react";
import { Flex, useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import { FaFilter } from "react-icons/fa";
import { Checkbox } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getempalLAPPLICATION, updateAPPLICATIONStatus } from "../../Redux/application/action";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, SimpleGrid } from '@chakra-ui/react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import InterviewLineup from "../InterviewLineup/InterviewLineup";
import InterviewLineup2 from "../InterviewLineup/InterviewLineup2";
import InterviewLineup3 from "../InterviewLineup/InterviewLineup3";


const Applications = () => {
  const  application = useSelector((store) => store.application.data);
  const { isOpen: isOpenModal4, onOpen: onOpenModal4, onClose: onCloseModal4 } = useDisclosure();
  const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure();
  const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure();
  const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure();

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

const [product,setProduct]=useState({})
const [product2,setProduct2]=useState({})
const [product3,setProduct3]=useState({})


console.log('====================================');
console.log('application',application);
console.log('====================================');
  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(getempalLAPPLICATION())
},[])

const onRejected=(el)=>{
console.log('el',el);
dispatch(updateAPPLICATIONStatus(el.candidate_id,{ 
  ...el,

"technical_l1_status":"rejected"

}));
}
    return (
        <>
        <Flex w={'100%'} h={'90vh'} borderRadius={'18px'} fontFamily="Inter">
            <Text mt={25} ml={'5%'} fontFamily="Inter" fontSize="24px" fontStyle="normal" fontWeight="500" lineHeight="normal" color="#000000" letterSpacing="-0.154px">
              All Applications
            </Text>

            <Button leftIcon={<FaFilter color="#FFB800" />} mt={5} ml={'72%'} border={'1px'} borderRadius={'10px'} paddingLeft={6} paddingRight={6} colorScheme='#DDE2E4' variant='outline' borderColor={'#DDE2E4'}>
           Filter
            </Button>

          </Flex>


          <Flex w={'100%'} fontFamily="Inter">
            <TableContainer w={'90%'} mt={'-38%'} ml={'5%'} mr={26} textAlign={'Center'} borderRadius={'18px'}>
              <Table variant='simple'>
                <Thead>
                  <Tr margin={'50px'}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Candidate Id</Th>
                    <Th>Experience</Th>
                    <Th>Email</Th>
                    <Th>Type</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
{application&&application.map((el)=>{
  return <Tbody>
    <Tr  borderRadius={'18px'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td>{el.candidate_id}</Td>
                    <Td>{el.candidate_exp_in_years}</Td>
                    <Td>{el.candidate_email_id}</Td>
                    <Td>{el.job_type}</Td>
                    <Td>{el.technical_l1_status==null?(<Button
                    onClick={()=>{
                      setProduct(el)
                      onOpen()}}>first round</Button>)
                    :el.technical_l1_status=='in_review'?(<Button 
                      onClick={()=>{
                        setProduct(el)
                        onOpenModal4()
                      }
                      }
                    >second round</Button>)
                    :el.technical_l1_status=='selected'&&el.technical_l2_status=='null'?(<Button
                      onClick={()=>{
                        setProduct(el)
                        onOpenModal2()
                      }
                      }
                    >Second round</Button>)
                    :el.technical_l1_status=='rejected'?(<Button bg='red'>Rejected</Button>)
                    :el.technical_l2_status=='in_review'?(<Button
                      onClick={()=>{
                        setProduct(el)
                        onOpenModal2()
                      }}>HR round</Button>)
                      :el.technical_l2_status=='selected'&&el.technical_l3_status=='in_review'?(<Button
                        onClick={()=>{
                          
                        }}>Onboarding</Button>):"hello"


                    
                    }</Td>
                  </Tr>
  </Tbody>
})}

                  
              </Table>
          </TableContainer>

        </Flex>
{/* second round InterviewLineup2*/}

        <Modal isOpen={isOpenModal3} onClose={onCloseModal3} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <InterviewLineup2 onClose={onCloseModal3} data={product2} />
          </ModalBody>

          {/* <ModalFooter>
           

            <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>

      {/* third round */}

      <Modal isOpen={isOpenModal1} onClose={onCloseModal1} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <InterviewLineup3 onClose={onCloseModal1} data={product2} />
          </ModalBody>

          {/* <ModalFooter>
           

            <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
{/* first round */}
      <Modal isOpen={isOpen} onClose={onClose} size={'lg'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <InterviewLineup onClosed={onClose} data={product} />
          </ModalBody>

          {/* <ModalFooter>
           

            <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            <Link to="/ticket">Submit</Link>    
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>


{/* yes or reject for second round onCloseModal4*/}
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
                            Do you want to schedule second round of interview?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={()=>{
                               setProduct2(product)
                               onRejected(product)
                             }}>
                               rejected
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>{
                          onOpenModal3()

                        setProduct2(product)
                      }
                        }
  ml={3}>
                                 yes                             
                                 </Button>

                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialogOverlay>
                     </AlertDialog> 
{/* yes or reject for third round */}

                     <AlertDialog
                       isOpen={isOpenModal2}
                       leastDestructiveRef={cancelRef}
                       onClose={onCloseModal2}
                     >
                       <AlertDialogOverlay>
                         <AlertDialogContent>
                           <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                           Ready to Change?
                           </AlertDialogHeader>
               
                           <AlertDialogBody>
                            Do you want to schedule HR round of interview?
                                                  </AlertDialogBody>
               
                           <AlertDialogFooter>
                             <Button ref={cancelRef} onClick={()=>{
                               setProduct3(product2)
                               onRejected(product)
                             }}>
                               rejected
                             </Button>
                             <Button colorScheme='green'                     
                        onClick={()=>{
                          onOpenModal1()

                        setProduct2(product)
                      }
                        }
  ml={3}>
                                 yes                             
                                 </Button>

                           </AlertDialogFooter>
                         </AlertDialogContent>
                       </AlertDialogOverlay>
                     </AlertDialog> 






        </>
        )
    }
    
export default Applications;