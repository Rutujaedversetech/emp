import { Box, Checkbox } from '@chakra-ui/react'
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import React from 'react'
import { MdDeleteOutline } from "react-icons/md";

const ThirdSection = () => {
  return (
    <div>
        {/* <TableContainer>
  <Table variant=''>
    <Thead>
      <Tr>
        <Th>Reason</Th>
        <Th>Request to</Th>
        <Th>Type</Th>

        <Th>days</Th>
        <Th>status</Th>
        <Th>delete</Th>


      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
   
  </Table>
</TableContainer> */}
<Box ml={'5%'} w={'84%'} boxShadow='0px 5px 20px 0px #00000026' borderBottomRadius={'18px'} px={{ base: 4, md: 8 } }
      py={'2'}>
            <TableContainer w={'100%'}  textAlign={'Center'} borderRadius={'18px'} fontFamily={'Inter'} >
              <Table >
                <Thead>
                  <Tr margin={''}>
                    <Th><Checkbox ></Checkbox></Th>
                    <Th>Reasons</Th>

                    <Th>Request to</Th>
                    <Th>Type</Th>

                    <Th>From</Th>
                    <Th>To</Th>
                    <Th>Days</Th>

                    <Th>Status</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr shadow={'2xl'} bg='' margin={'10'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td>#TC-134</Td>
                    <Td>xyz</Td>
                    <Td>Questions</Td>
                    <Td>Dec 20, 10:00 AM</Td>
                    <Td>Dec 24, 11:26 AM</Td>
                    <Td>Dec 26, 11:45 PM</Td>
                    <Td color={'red'}>Pending</Td>
                    <Td><MdDeleteOutline /></Td>

                  </Tr>
                  <Tr shadow={'2xl'} bg='' margin={'10'}>
                    <Td><Checkbox ></Checkbox></Td>
                    <Td>#TC-134</Td>
                    <Td>xyz</Td>
                    <Td>Questions</Td>
                    <Td>Dec 20, 10:00 AM</Td>
                    <Td>Dec 24, 11:26 AM</Td>
                    <Td>Dec 26, 11:45 PM</Td>
                    <Td color={'red'}>Pending</Td>
                    <Td><MdDeleteOutline /></Td>

                  </Tr>
                </Tbody>
              </Table>
          </TableContainer>
</Box>
    </div>
  )
}

export default ThirdSection