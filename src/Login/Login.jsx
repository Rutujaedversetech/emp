'use client'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import login from '../emp_images/login.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleUser } from '../Redux/auth/action'
//import Logo from "../Admin/Logo.png";
import { Navigate, useNavigate } from 'react-router-dom'


export default function SplitScreen() {
  const  data = useSelector((store) => store.auth.singleData);
console.log(data)
  const[org_id,setOrg_id]=useState('')
  const[emp_id,setEmp_id]=useState('')
  const[emp_password,setPassword]=useState('')
  console.log('====================================');
  console.log(org_id,emp_id,emp_password);
  console.log('====================================');
const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleLogin=()=>{
  dispatch(getSingleUser({org_id,emp_id,emp_password}))
  setOrg_id("")
  setEmp_id("")
  setPassword("")
   // return <Navigate to={'/'} />
///navigate('/dashboard')
// setTimeout(()=>{navigate('/dashboard')
// },2000)

  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
              <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={login}
        />
      </Flex>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        
        <Stack spacing={4} w={'full'} maxW={'md'} >
            <Stack align={'center'} p='7' >
            <Text fontSize={'3xl'}>Welcome Back</Text>
            <Text fontSize={''}>Enter your Id and Password to access your account</Text>

            </Stack>
          <FormControl id="">
            <FormLabel>Organization ID</FormLabel>
            <Input type="text"
            value={org_id}
            onChange={(e)=>setOrg_id(e.target.value)} />
          </FormControl>
          <FormControl id="">
            <FormLabel>Employee ID</FormLabel>
            <Input type="text" 
            value={emp_id}
            onChange={(e)=>setEmp_id(e.target.value)}/>
          </FormControl>
          <FormControl id="">
            <FormLabel>Password</FormLabel>
            <Input type=""
            value={emp_password}
            onChange={(e)=>setPassword(e.target.value)}/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'black.500'}>Forgot password?</Text>
            </Stack>
            <Button bg={'black'} color='orange'variant={'solid'} onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>

    </Stack>
  )
}