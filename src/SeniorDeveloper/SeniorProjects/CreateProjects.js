import React, { useState } from "react";
import { Box, Flex, Select, useToast } from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addempproject } from "../../Redux/projects/action";

const CreateProjectTask = ({onClose,empid}) => {
    const [project_id, setproject_id] = useState('');
    const [project_name, setproject_name] = useState('');
    const [project_head, setproject_head] = useState('');
    const [project_description, setproject_description] = useState('');
    const [project_progress, setproject_progress] = useState('');
    const [project_status, setproject_status] = useState('in_progress');
    const [project_start_date, setproject_start_date] = useState('');
    const [project_end_date, setproject_end_date] = useState('');
    const [emp_id, setemp_id] = useState('');
const dispatch=useDispatch()


const inputDate = new Date(project_end_date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    const inputDate1 = new Date(project_start_date);
    const day1 = inputDate1.getDate().toString().padStart(2, '0');
    const month1 = (inputDate1.getMonth() + 1).toString().padStart(2, '0');
    const year1 = inputDate1.getFullYear();
    
    const formattedDate2 = `${day1}/${month1}/${year1}`;
    
    console.log(formattedDate);
    

    

    function calculateInclusiveDateDifference(startDateStr, endDateStr) {
      // Parse the date strings into Date objects (considering DD/MM/YYYY format)
      const startDateParts = startDateStr.split('/');
      const endDateParts = endDateStr.split('/');
    
      const startDate = new Date(startDateParts[2], startDateParts[1] - 1, startDateParts[0]);
      const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]);
    
      // Calculate the difference in milliseconds
      const timeDifference = endDate.getTime() - startDate.getTime();
    
      // Convert the difference to days and add 1 for inclusive count
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;
    
      return daysDifference;
    }
    
    // Example usage:
    const startDateStr = formattedDate2;
    const endDateStr = formattedDate;
    
    const daysDifference = calculateInclusiveDateDifference(startDateStr, endDateStr);
    
    console.log(`The inclusive difference between ${startDateStr} and ${endDateStr} is ${daysDifference} days.`);


const toast=useToast()
const onSubmit=()=>{
    if(project_name==""||project_description==""||project_start_date==""||project_end_date==""||emp_id==""){
        toast({
          title: "please fill all the feilds",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        }); 
      }else{
        if(daysDifference<0){
          toast({
            title: "please fill valid leaves dates",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
        }else{
        onClose()
        dispatch(addempproject({
            'project_name':project_name,
            'project_head':empid,
            'project_description':project_description,
            'project_progress':'in_progress',
            'project_status':project_status,
            'project_start_date':formattedDate2,
            'project_end_date':formattedDate,
            'project_completion_date':'89',
            'emp_id':emp_id,
    
    
    
        }))
    
    }
    
    }









}



    return (
        <Box mt={'4%'} w={'100%'}bg='' >
        <Flex w={'92%'}  borderRadius={'28px'}>
            <Text w={'100%'} mt={27} ml={'6%'} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Create New Task
            </Text>

            <Flex ml={'-92%'} mt={'14%'} w={'100%'}  borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Project Name</FormLabel>
                    <Input type="text"
                     onChange={(e)=>setproject_name(e.target.value)}

                    />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Start Date</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>End Date</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} type="date"
                         onChange={(e)=>setproject_start_date(e.target.value)}
                         />
                        <Input w={'45%'} ml={'10%'} type="date" 
                        onChange={(e)=>setproject_end_date(e.target.value)}

                        />
                    </Flex>

                    <FormLabel mt={'1%'}>Description</FormLabel>
                    <Textarea 
                onChange={(e)=>setproject_description(e.target.value)}

                    />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Project Assign By</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Project Assign To</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} 
                       // onChange={(e)=>setproject_head(e.target.value)}
                         value={empid}
                        />
                        <Input w={'45%'} ml={'10%'}
                                                onChange={(e)=>setemp_id(e.target.value)}
                                                />
                    </Flex>

                    {/* <FormLabel mt={'1%'}>Status</FormLabel>
                    <Select placeholder='Select category' onChange={(e)=>setproject_status(e.target.value)}>
                            <option value='completed'>completed</option>
                            <option value='in_progress'>in Process</option>
                            <option value='pending'>pending</option>

                        </Select>
                        <FormLabel mt={'1%'}>Status</FormLabel>
<Input type="number" 
onChange={(e)=>setproject_progress(e.target.value)}
placeholder="set progress in percentage"
/> */}
                </FormControl>
            </Flex>
        </Flex>

        <Flex  fontFamily="Inter" justify={'space-between'} bg='' gap={'5'}>
            <Button border={'1px'} borderRadius={'10px'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline' borderColor={'#DDE2E4'}>
            <Link to="/SeniorProjects">Cancel</Link>
            </Button>

            <Button  border={'1px'}
            onClick={onSubmit}
            borderRadius={'10px'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'} borderColor={'black'}>
            Assign Project
            </Button>
        </Flex>

        </Box>
        )
    }
    
export default CreateProjectTask;