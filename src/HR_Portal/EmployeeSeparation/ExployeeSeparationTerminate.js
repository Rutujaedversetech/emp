import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select, Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";




const EmployeeSeparationTerminate = () => {
    const [emp_is, setemp_is] = useState("");
    const [terminated_reason, setterminated_reason] = useState("");
    const [terminated_date, setterminated_date] = useState("");
    const [terminated_by, setterminated_by] = useState("");


    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'}>
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Separation
                    </Text>
                </Flex>

                <FormControl mt={'6%'} ml={'-95%'} w={'90%'} fontFamily={'Inter'}>
                    <FormLabel>Employee Id</FormLabel>
                    <Input onChange={(e) => setemp_is(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Select Type</FormLabel>
                        <Select placeholder='Select category'  boxShadow='0px 5px 20px 0px #00000026'>
                            <option>Termination</option>
                        </Select>

                    <FormLabel>Reason</FormLabel>
                    <Textarea onChange={(e) => setterminated_reason(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Date</FormLabel>
                    <Input onChange={(e) => setterminated_date(e.target.value)} boxShadow='0px 5px 20px 0px #00000026' />

                    <FormLabel>Terminated By</FormLabel>
                    <Input onChange={(e) => setterminated_by(e.target.value)} boxShadow='0px 5px 20px 0px #00000026' />
                </FormControl>
            </Flex>

            <Flex fontFamily="Inter" ml={'64%'} >
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                <Link to="/EmployeeSeparation">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                <Link to="/AssetClearance">Save & Continue</Link>    
                </Button>
            </Flex>
        
        </Box>
        )
    }
    
    
export default EmployeeSeparationTerminate;