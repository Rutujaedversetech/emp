import React from "react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
   
  } from '@chakra-ui/react';
  import { Link } from "react-router-dom";
  import { ChevronDownIcon } from "@chakra-ui/icons";



const EmployeeSeparation = () => {

    return (
        <Box mt={'2%'} ml={'26%'} w={'50%'} h={'92vh'} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
            <Flex w={'100%'} h={'20vh'} bg={'grey'}>
       
            </Flex>

            <Flex w={'100%'} h={'64vh'}>
                <Flex w={'100%'} h={'6vh'} fontFamily={'Inter'} >
                    <Text w={'70%'} mt={'2%'} ml={'5%'} fontSize="28px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
                        Separation
                    </Text>
                    
                    <Menu >
                        <MenuButton as={Text} rightIcon={<ChevronDownIcon />} mt='2%' ml='0%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
                            Sort By
                        </MenuButton>
                        <MenuList fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>
                            <MenuItem><Link to="/EmployeeSeparationResign">Resign</Link></MenuItem>
                            <MenuItem><Link to="/EmployeeSeparationTerminate">Termination</Link></MenuItem>
                        </MenuList>
                    </Menu>
                        
                </Flex>
           
            </Flex>
        
        </Box>
        )
    }
    
 
export default EmployeeSeparation;