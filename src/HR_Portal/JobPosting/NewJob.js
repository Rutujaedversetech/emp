import React, { useState } from "react";
import { Box, Flex, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addempjob } from "../../Redux/job/action";


const NewJob = ({onClose}) => {
    const [job_name, setjob_name] = useState("");
    const [department, setdepartment] = useState("");
    const [job_type, setjob_type] = useState("");
    const [vacancy, setvacancy] = useState("");
    const [job_location, setjob_location] = useState("");
    const [job_requirement, setjob_requirement] = useState("");
    const [salary_range, setsalary_range] = useState("");
    const [experienced_in_years, setexperienced_in_years] = useState("");
    const [job_description, setjob_description] = useState("");
    console.log(job_name, job_type);
    const dispatch=useDispatch()
const toast=useToast()
const onSubmitjob=()=>{
    if(job_name==""||salary_range==''||department==""||job_type==""||vacancy==""||experienced_in_years==""||job_location==""||job_requirement==""||job_description==""){
        toast({
          title: "please fill all the feilds",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        }); 
      }else{
        
        // onClose()
      dispatch(addempjob({
        "job_name":job_name,
        "department":department,
        "job_type":job_type,
        "vacancy":vacancy,
    "experienced_in_years":experienced_in_years,
        "job_location":job_location,
    "job_requirement":job_requirement,
    "job_description":job_description,
"salary_range":salary_range
      }))
    
    }
}

    return (
        <Box w={'100%'} h={'80vh'}>
        <Flex w={'100%'} h={'86vh'} borderRadius={'28px'}>
            <Text w={'100%'} mt={'2%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Add New Job
            </Text>

            <Flex ml={'-92%'} mt={'8%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Job Name</FormLabel>
                    <Input mt={'-1%'} onChange={(e) => setjob_name(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel >Department</FormLabel>
                    <Input mt={'-1%'} onChange={(e) => setdepartment(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <FormLabel>Type</FormLabel>
                        <Select onChange={(e) => setjob_type(e.target.value)} placeholder='Select category'  boxShadow='0px 5px 20px 0px #00000026'>
                            <option value={'full_time'}>Full Time</option>
                            <option value={'part_time'}>Part Time</option>
                            <option value={'intern'}>Intern</option>
                        </Select>

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Vacancy</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Location</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input mt={'-1%'} onChange={(e) => setvacancy(e.target.value)} w={'45%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input mt={'-1%'} onChange={(e) => setjob_location(e.target.value)} w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                    </Flex>

                    <FormLabel>Requirement</FormLabel>
                    <Textarea mt={'-1%'} onChange={(e) => setjob_requirement(e.target.value)} boxShadow='0px 5px 20px 0px #00000026'/>

                    <Flex w={'100%'}>
                        <FormLabel w={'45%'}>Salary Range</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Experience In Years</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input mt={'-1%'} onChange={(e) => setsalary_range(e.target.value)} type="text" w={'45%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                        <Input mt={'-1%'} onChange={(e) => setexperienced_in_years(e.target.value)} type="number" w={'45%'} ml={'10%'}  boxShadow='0px 5px 20px 0px #00000026'/>
                    </Flex>

                    <FormLabel>Description</FormLabel>
                    <Textarea mt={'-1%'} onChange={(e) => setjob_description(e.target.value)} boxShadow='0px 5px 20px 0px #00000026' />

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'68%'} mt={'2%'}  fontFamily="Inter">
            <Button mt={'-26%'} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            <Link to="/JobPosting">Cancel</Link>
            </Button>
            <Button ml={'4%'} mt={'-26%'} onClick={onSubmitjob} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            Add Job
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default NewJob;