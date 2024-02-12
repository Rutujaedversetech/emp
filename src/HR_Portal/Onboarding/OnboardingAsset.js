import React from "react";
import { Box, FormControl } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FormLabel, Input } from "@chakra-ui/react";


const OnboardingAsset = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
        
            </Flex>
            <Flex w={'100%'} h={'70vh'} >
                <Flex w={'90%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'90%'} mt={'3%'} ml={'6%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Asset
                    </Text>
                </Flex>
    
                <Flex mt={'8%'} ml={'-85%'} w={'90%'} h={'50vh'} variant='outline'>
                    <FormControl>
                        <FormLabel mt={'1%'} ml={'1%'} fontFamily={'inter'} fontSize={'14px'}>Asset Id</FormLabel>
                        <Input boxShadow='0px 5px 20px 0px #00000026'/>

                        <FormLabel  fontFamily={'inter'} fontSize={'14px'}>Serial No</FormLabel>
                        <Input boxShadow='0px 5px 20px 0px #00000026'/>

                        <FormLabel fontFamily={'inter'} fontSize={'14px'}>Category</FormLabel>
                        <Input boxShadow='0px 5px 20px 0px #00000026'/>

                        <FormLabel fontFamily={'inter'} fontSize={'14px'}>Status</FormLabel>
                        <Input boxShadow='0px 5px 20px 0px #00000026'/>
                    </FormControl>
                </Flex>
            </Flex>

            <Flex fontFamily="Inter" ml={'76%'} mt={'-6%'}>
                <Button border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
                    <Link to="/BackgroundVerification">Cancel</Link>
                </Button>
                <Button ml={'4%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
                    <Link to="/HRDashboard">Save</Link>    
                </Button>
            </Flex>

        </Box>
        )
    }
    
 
export default OnboardingAsset;