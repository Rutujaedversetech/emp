import React from "react";
import { Button, SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Flex } from "@chakra-ui/react";
import { Table, TableContainer, Thead, Tr, Th, Td, Tbody } from '@chakra-ui/react';
import { Card, CardBody, Stack, Heading, StackDivider, Text } from '@chakra-ui/react';
import { Progress } from '@chakra-ui/react';
import { CiCirclePlus } from "react-icons/ci";
import { Avatar, Wrap, AvatarGroup } from "@chakra-ui/react";
import { GridItem, Grid } from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getempongoingproject, getempongoingproject2 } from "../Redux/projects/action";
import { decodeToken } from "react-jwt";
import { useEffect } from "react";
import { getempongoingTASK } from "../Redux/task/action";


const Projects = () => {
    const  data = useSelector((store) => store.auth.data);
    const  project90 = useSelector((store) => store.project.data);
    const  project9 = useSelector((store) => store.project.data2);

const projects=[1]
const project=[1,4]

console.log('project',project90,project9);
const  data123 = useSelector((store) => store.task.data);
console.log('====================================');
console.log('data123789',data123);
console.log('====================================');
 const dispatch=useDispatch()
 //console.log('project',project90);
    const myDecodedToken = decodeToken(data.token);
  
    useEffect(()=>{
        dispatch(getempongoingproject(myDecodedToken.emp_id))
        dispatch(getempongoingproject2(myDecodedToken.emp_id))
        dispatch(getempongoingTASK(myDecodedToken.emp_id))

      },[])


const ongoingProject=project90&&project90.filter((el)=> el.project_status=='in_progress'&&el.emp_id==myDecodedToken.emp_id)
const pastProject=project90&&project90.filter((el)=> el.project_status=='completed'&&el.emp_id==myDecodedToken.emp_id)
const ongoingtask=data123&&data123.filter((el)=> el.task_status=='pending'&&el.emp_id==myDecodedToken.emp_id)


console.log('ongoingProject',ongoingtask);






      
    return (
        <>
        <Flex mt={'3%'} w={'100%'} h={'30%'} borderRadius={'28px'} fontFamily="Inter">

            <TableContainer w={'90%'} ml={20} mr={26} textAlign={'Center'}  boxShadow='0px 5px 20px 0px #00000026' borderRadius={'18px'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr margin={'50px'} fontSize={'18px'} textAlign={'center'}>
                            <Th>Ongoing Projects</Th>
                            <Th>Past Projects</Th>
                            <Th>Last Updated On</Th>
                            <Th>Total Task</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr fontSize={'14px'} textAlign={'center'}>
                            <Td>{project90&&project90[project90.length-1]?(project90[project90.length-1].project_name):""}</Td>
                            <Td>{project9&&project9.length?(project9.length):""}</Td>
                            <Td>19 Jan 2024</Td>
                            <Td>{data123&&data123.length?(project9.length):""}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>

        </Flex>
<Flex h={'90px'} gap={'10px'}>
<SimpleGrid bg='' w='33%'>
<Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Ongoing Projects</Heading>

    </Box>
{ongoingProject&&ongoingProject.map((el)=>{
    return(
        <Box bg=''>
           
        <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
            <Card background={'#ECF4FE'} bg=''>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            {/* <FormLabel fontSize={'12px'}>{el.project_progress}%</FormLabel>
                            <Progress ml={'8%'} mt={'-5%'}
                                colorScheme="yellow"
                                borderColor="#F9BD3B"
                                borderRadius={'18px'}
                                size='sm'
                                value={60}
                            /> */}

                            <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.project_name}</Heading>
                        
                            <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                {el.project_description}              
                                {el.project_description}
                  {el.project_description}

                            </Text>

                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Start Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Estimated End Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Completion Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.project_start_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.project_end_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                </GridItem>
                            </Grid>

                        </Box>
                        <Box>
                            <Wrap>
                                <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup></Link>
                            </Wrap>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </Box>
    )
})}
        </SimpleGrid>



        <SimpleGrid bg='' w='33%'>

<Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>Past Projects</Heading>

    </Box>
{pastProject&&pastProject.map((el)=>{
    return(
        <Box bg=''>
           
        <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
            <Card background={'#ECF4FE'} bg=''>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            {/* <FormLabel fontSize={'12px'}>{el.project_progress}%</FormLabel>
                            <Progress ml={'8%'} mt={'-5%'}
                                colorScheme="yellow"
                                borderColor="#F9BD3B"
                                borderRadius={'18px'}
                                size='sm'
                                value={60}
                            /> */}

                            <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.project_name}</Heading>
                        
                            <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                {el.project_description}              
                                {el.project_description}
                  {el.project_description}

                            </Text>

                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Start Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Estimated End Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Completion Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.project_start_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.project_end_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                </GridItem>
                            </Grid>

                        </Box>
                        <Box>
                            <Wrap>
                                <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup></Link>
                            </Wrap>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </Box>
    )
})}
        </SimpleGrid>
        <SimpleGrid bg='' w='33%'>
<Box bg='' p='4'>
    <Heading size='md' textAlign={'center'}>My task</Heading>

    </Box>
{ongoingtask&&ongoingtask.map((el)=>{
    return(
        <Box bg=''>
           
        <Box mt={4} boxShadow='0px 5px 20px 0px #00000026' borderLeftRadius={'18px'} background={'#ECF4FE'}>
            <Card background={'#ECF4FE'} bg=''>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            {/* <FormLabel fontSize={'12px'}>{el.task_progress}%</FormLabel>
                            <Progress ml={'8%'} mt={'-5%'}
                                colorScheme="yellow"
                                borderColor="#F9BD3B"
                                borderRadius={'18px'}
                                size='sm'
                                value={60}
                            /> */}

                            <Heading mt={'2%'} fontSize={'14px'} fontFamily={'inter'}>{el.task_name}</Heading>
                        
                            <Text pt='2' fontSize={'12px'} fontFamily={'inter'}>
                                {el.task_description}              
                                {el.task_description}
                  {el.task_description}

                            </Text>

                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={'4%'} fontFamily={'inter'}>
                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Start Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Estimated End Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='1'>
                                    <Text fontSize={'10px'}>Completion Date</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_start_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>{el.task_end_date}</Text>
                                </GridItem>

                                <GridItem w='100%' h='2'>
                                    <Text fontSize={'10px'} color={"#00000080"}>-----</Text>
                                </GridItem>
                            </Grid>

                        </Box>
                        <Box>
                            <Wrap>
                                <Link to='/Teams'><AvatarGroup size={'sm'} max={3}> 
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup></Link>
                            </Wrap>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    </Box>
    )
})}
        </SimpleGrid>
</Flex>
       


      </>
        )
    }
    
export default Projects;

