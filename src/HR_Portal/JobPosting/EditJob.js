import React, { useState } from "react";
import { Box, Flex, Textarea } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EditJob = ({data}) => {
    const [product,setProduct]=useState({})
    const handleChange=({target})=>{
        let val = target.value;
  
        console.log('val2',val)
        setProduct({ ...product, [target.name]: val });
      }
      
    return (
        <Box mt={'1%'}  w={'100%'} h={''} boxShadow='0px 5px 20px 0px #00000026' borderRadius={'28px'}>
        <Flex w={'100%'} h={''} borderRadius={'28px'}>
            <Text w={'100%'} mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Edit Job
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={''} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Job Id</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026' />

                    <FormLabel >Department</FormLabel>
                    <Input  boxShadow='0px 5px 20px 0px #00000026' 
                  name="department"
                 onChange={handleChange}                    
                    value={data.department}/>

                    <FormLabel>Type</FormLabel>
                        <Select placeholder='Select category' 
                         name="job_type"
                         onChange={handleChange}                    
                            value={data.job_type}
                        boxShadow='0px 5px 20px 0px #00000026'>
                            <option>Full Time</option>
                            <option>Part Time</option>
                            <option>Intern</option>
                        </Select>

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Vacancy</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Location</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} 
                                                 name="vacancy"
                                                 onChange={handleChange}                    
                                                    value={data.vacancy}
                        boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="job_location"
                        onChange={handleChange}                    
                           value={data.job_location}
                        />
                    </Flex>

                    <FormLabel>Requirement</FormLabel>
                    <Textarea  boxShadow='0px 5px 20px 0px #00000026'
                     name="job_requirement"
                     onChange={handleChange}                    
                        value={data.job_requirement}
                    />

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Salary Range</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Experience In Years</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="salary_range"
                        onChange={handleChange}                    
                           value={data.salary_range}
                        />
                        <Input w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'
                        name="experienced_in_years"
                        onChange={handleChange}                    
                           value={data.experienced_in_years}
                        />
                    </Flex>

                    <FormLabel>Description</FormLabel>
                    <Textarea  boxShadow='0px 5px 20px 0px #00000026'
                    name="job_description"
                    onChange={handleChange}                    
                       value={data.job_description}
                    />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'68%'} mt={'10%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            <Link to="/JobPosting">Cancel</Link>
            </Button>
            <Button ml={'4%'} mt={'-26%'} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            <Link to="/JobPosting">Add Job</Link>    
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default EditJob;