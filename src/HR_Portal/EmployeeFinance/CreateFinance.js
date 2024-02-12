import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CreateFinance = () => {
    return (
        <Box >
        <Flex w={'92%'} h={''} borderRadius={'28px'}>
            <Text w={'100%'} mt={'6%'} ml={'4%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Salary Slip
            </Text>

            <Flex ml={'-92%'} mt={'10%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>

                    <Flex mt={'4%'} w={'100%'}>
                        <FormLabel w={'45%'}>Employee Id</FormLabel>
                        <FormLabel w={'45%'} ml={'10%'}>Employee Name</FormLabel>
                    </Flex>
                    <Flex w={'100%'}>
                        <Input w={'45%'} />
                        <Input w={'45%'} ml={'10%'} />
                    </Flex>

                    <FormLabel mt={'0%'}>Designation</FormLabel>
                    <Textarea  />

                    <Flex mt={'0%'} w={'100%'}>
                        <FormLabel w={'45%'}>Start Date</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>End Date</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} />
                        <Input w={'45%'} ml={'10%'} />
                    </Flex>

                    <FormLabel mt={'0%'}>Pay Slip</FormLabel>
                    <Input/>

                    <FormLabel mt={'0%'}>Bonus</FormLabel>
                    <Input/>
                    
                    <FormLabel mt={'0%'}>Referral Bonus</FormLabel>
                    <Input/>

                    <FormLabel mt={'0%'}>Advance Salary</FormLabel>
                    <Input/>

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'56%'} mt={'6%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
                Cancel
            </Button>

            <Button ml={'8%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline'  borderColor={'black'}>
                Send   
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default CreateFinance;