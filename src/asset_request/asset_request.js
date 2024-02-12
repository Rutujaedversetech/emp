import React, { useState } from "react";
import { Box, Flex, useDisclosure, useToast } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { addempasset } from "../Redux/asset/action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AssetRequest = ({onClose,myDecodedToken}) => {
    //const { isOpen, onOpen, onClose } = useDisclosure()

    const [asset_assigned_time, setSelectedDateTime] = useState('');
    const [asset_id, setassetId] = useState('');
    const [asset_category, setCategory] = useState('');
    const [asset_allocated_to, setAllocate] = useState('');
    const [asset_status, setStatus] = useState('assigned');
    const [asset_submitted_time, setSubmittedTime1] = useState('');

    const  asset = useSelector((store) => store.asset.AddProduct);
    console.log('asset',asset.message,myDecodedToken)
      const dispatch = useDispatch();
    const toast=useToast()

    const navigate=useNavigate()
    //   useEffect(()=>{
    //     if(asset.message=='asset added'){
    //       console.log('====================================');
    //       console.log('asset added');
    //       console.log('====================================');
    //       toast({
    //         title: "Request an Asset Successfully",
    //         status: "info",
    //         duration: 2000,
    //         isClosable: true,
    //         position: "top",
    //       }); 
    //     }
    //     },asset)

    const handleDateTimeChange = (event) => {
      setSelectedDateTime(event.target.value);
    };
    const handleDateTimeChange2 = (event) => {
        setSubmittedTime1(event.target.value);
      };
      //const toast=useToast()
    const onSubmitAsset = () => {
      if(asset_id==""||asset_category==""||asset_assigned_time==""||asset_submitted_time=="")
      {
        toast({
          title: "please fill all the feilds",
          status: "info",
          duration: 2000,
          isClosable: true,
          position: "top",
        }); 
      }
      else{
        //onclose()
        dispatch(addempasset({ 
            
           "asset_id": asset_id,
          "asset_category": asset_category,
           "asset_status": 'assigned',
           "asset_serial_no": "",
          "asset_assigned_time": asset_assigned_time,
          "asset_submitted_time": asset_submitted_time,
          "asset_allocated_to": myDecodedToken.emp_id
      
   }));
      }
      // onclose()
       // console.log('selectedDateTime',selectedDateTime,assetId,category,allocate);

        // navigate('/assets')
      };
      
    return (
        <Box mt={'4%'}  w={'100%'}  boxShad>
        <Flex w={'100%'} h={640} borderRadius={'28px'} bg=''>
            {/* <Text w={'100%'}  mt={25} ml={45} fontFamily="Inter" fontSize="32px" fontStyle="normal" fontWeight="500" lineHeight="16px" color="#000000" letterSpacing="-0.006em" textAlign={"left"}>
              Assets
            </Text> */}

            <Flex  mt={'10%'} w={'100%'} h={100} borderRadius={'28px'}  fontFamily="Inter">
                <FormControl>
                    <FormLabel>Asset Id</FormLabel>
                    <Input placeholder='Asset Id'
                 onChange={(e)=>setassetId(e.target.value)}

                    />

{/* <FormLabel mt={'2%'}>Status</FormLabel>
                        <Select placeholder='Select Status' onChange={(e)=>setStatus(e.target.value)}>
                            <option value={'assigned'}>Assigned</option>
                            <option value='submitted'>Submitted</option>
                            <option value='required'>Required</option>

                        </Select> */}


                    <FormLabel mt={'2%'}>Category</FormLabel>
                        <Select placeholder='Select category' onChange={(e)=>setCategory(e.target.value)}>
                            <option value={'laptop'}>Laptop</option>
                            <option value='vr'>VR</option>
                        </Select>


                    <FormLabel>Submitted Time</FormLabel>
                    <Input placeholder='Submitted Time' 
                          type="datetime-local"
                          id="dateTimeInput"
                         //value={selectedDateTime}
                         onChange={handleDateTimeChange}
                        />
                  
                  <FormLabel>Assigned Time</FormLabel>
                    <Input placeholder='Assigned Time' 
                          type="datetime-local"
                          id="dateTimeInput"
                         //value={selectedDateTime}
                         onChange={handleDateTimeChange2}
                        />
                  

                    <FormLabel>Allocated To</FormLabel>
                    {/* <Input placeholder='Allocated To'  readonly/> */}
                    <Input type="text" id="readOnlyInput" name="readOnlyInput" value={myDecodedToken&&myDecodedToken.emp_id} readonly/>

                    {/* <FormLabel mt={'2%'}>Status</FormLabel>
                    <Input/> */}

                </FormControl>
            </Flex>
        </Flex>

        <Flex ml={'66%'} mt={'-2%'}  fontFamily="Inter">
            <Button mt={'-26%'} onClick={onClose} border={'1px'} borderRadius={'10px'} borderColor={'#DDE2E4'} colorScheme='#DDE2E4' background={'#ECECEC'} variant='outline'>
            Cancel
            </Button>
            <Button ml={'8%'} mt={'-26%'} onClick={onSubmitAsset} border={'1px'} borderRadius={'10px'} borderColor={'black'} colorScheme='#FFB800' color={'#FFB800'} background={'black'} variant='outline' padding={'5%'}>
            {/* <Link to="/assets">Add</Link>     */}
            Add
            </Button>
        </Flex>

        
        </Box>
        )
    }
    
export default AssetRequest;