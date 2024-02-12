import React, { useState } from "react";
import { Box, Flex, Select, useToast } from "@chakra-ui/react";
import { Text, Textarea } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addempproject } from "../../Redux/projects/action";
import { addempTASK } from "../../Redux/task/action";

const CreateProjectTask = ({onClose,empid}) => {
    const [project_id, setproject_id] = useState('');
    const [task_name, settask_name] = useState('');
    const [task_assign_by, settask_head] = useState('');
    const [task_description, settask_description] = useState('');
    const [task_progress, settask_progress] = useState('');
    const [task_status, settask_status] = useState('');
    const [task_start_date, settask_start_date] = useState('');
    const [task_end_date, settask_end_date] = useState('');
    const [emp_id, setemp_id] = useState('');
    const [task_completion_date, settask_completion_date] = useState('');

const dispatch=useDispatch()


const inputDate = new Date(task_end_date);
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    
    const formattedDate = `${day}/${month}/${year}`;

    const inputDate1 = new Date(task_start_date);
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
    if(task_name==""||task_assign_by==""||task_description==""||task_progress==""||task_status==""||task_start_date==""||task_end_date==""||emp_id==""){
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
        dispatch(addempTASK({
            'task_name':task_name,
            'task_assign_by':task_assign_by,
            'task_description':task_description,
            'task_status':'pending',
            'task_start_date':formattedDate2,
            'task_end_date':formattedDate,
            'task_completion_date':'90',

            'emp_id':emp_id}))
    
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
                    <FormLabel>Task Name</FormLabel>
                    <Input type="text"
                     onChange={(e)=>settask_name(e.target.value)}

                    />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Start Date</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>End Date</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} type="date"
                         onChange={(e)=>settask_start_date(e.target.value)}
                         />
                        <Input w={'45%'} ml={'10%'} type="date" 
                        onChange={(e)=>settask_end_date(e.target.value)}

                        />
                    </Flex>

                    <FormLabel mt={'1%'}>Description</FormLabel>
                    <Textarea 
                onChange={(e)=>settask_description(e.target.value)}

                    />

                    <Flex mt={'1%'} w={'100%'}>
                        <FormLabel w={'45%'}>Task Assign By</FormLabel>
                        
                        <FormLabel w={'45%'} ml={'10%'}>Task Assign To</FormLabel>
                    </Flex>
                   
                    <Flex w={'100%'}>
                        <Input w={'45%'} 
                        onChange={(e)=>settask_head(e.target.value)}

                        />
                        <Input w={'45%'} ml={'10%'}
                                                onChange={(e)=>setemp_id(e.target.value)}
                                                />
                    </Flex>

                    <FormLabel mt={'1%'}>Status</FormLabel>
                    <Select placeholder='Select category' onChange={(e)=>settask_status(e.target.value)}>
                            <option value='completed'>completed</option>
                            <option value='delayed'>delayed</option>
                            <option value='pending'>pending</option>

                        </Select>
                        <FormLabel mt={'1%'}>Status</FormLabel>
<Input type="number" 
onChange={(e)=>settask_progress(e.target.value)}
placeholder="set progress in percentage"
/>
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
            Assign Task
            </Button>
        </Flex>

        </Box>
        )
    }
    
export default CreateProjectTask;