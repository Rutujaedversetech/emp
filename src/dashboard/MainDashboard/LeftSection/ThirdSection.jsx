import { Box, Checkbox,Text } from '@chakra-ui/react'
import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React, { useEffect } from 'react'
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteLeaveemp, getempLEAVE } from '../../../Redux/leaves/action';
import { decodeToken } from 'react-jwt';

const ThirdSection = () => {

  const  leave2 = useSelector((store) => store.leave.data);
  const  leave1 = useSelector((store) => store.leave);

console.log('leave',leave2,leave1);
const  data = useSelector((store) => store.auth.data);


const myDecodedToken = decodeToken(data.token);
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getempLEAVE(myDecodedToken.emp_id))
},[])
const onHandleDelete=(id)=>{
  dispatch(deleteLeaveemp(id))
}

const leave=leave2&&leave2.filter((el)=>el.emp_id==myDecodedToken.emp_id)
console.log('leave',leave2,leave);

  return (
    <div>

{/* <Box  px={{ base: 4, md: 8 }}
      py={'2'}> */}
           <TableContainer w={'100%'}
             px={{ base: 4, md: 8 }}
             py={'2'}
             boxShadow='0px 5px 20px 0px #00000026'
             borderRadius={'4px'}
            bg={''} textAlign={'Center'}  >
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

                  <Td>{el.leaves_status}</Td>
                  <Td><MdDeleteOutline onClick={()=>onHandleDelete(el.attendance_id)} /></Td>

                </Tr>)
                })}
              </Tbody>

              </Table>
           </TableContainer> 
{/* </Box> */}
    </div>
  )
}

export default ThirdSection