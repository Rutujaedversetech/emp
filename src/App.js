import { Route, Routes,  Router } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Ticket from "./ticket/ticket"; 
import Assets from "./assets/assets";
import RaiseRequest from "./raise_request/raise_request";
import AssetRequest from "./asset_request/asset_request";
import Finance from "./finance/finance";
import CabFacility from "./cab_facility/cab_facility";
import Referral from "./referral/referral";
import Reimbursement from "./expenses/reimbursement";
import BookACab from "./cab_facility/book_a_cab";
import CreateReferral from "./referral/create_referral";
import Complaints from "./complaints/complaints";
import Warning from "./warning/warning";
import Projects from "./projects/projects";
import Teams from "./projects/team";
import AttendanceManagement from "./attendance_management/attendance_management";
import CalendarTask from "./calendar/calendar_task";
import CalendarHoliday from "./calendar/calendar_holiday";
import ReimbursementRequest from "./expenses/reimbursement_form";
import SeniorDashboard from "./SeniorDeveloper/SeniorDashboad/SeniorDashboard";
import SeniorProjects from "./SeniorDeveloper/SeniorProjects/SeniorProjects";
import SeniorProjectsTeam from "./SeniorDeveloper/SeniorProjects/SeniorProjectsTeam";
import CreateProjectTask from "./SeniorDeveloper/SeniorProjects/CreateProjects";
import SeniorTask from "./SeniorDeveloper/SeniorTaskManager/SeniorTask";
import CreateTasks from "./SeniorDeveloper/SeniorTaskManager/CreateTasks";
import PerformanceTable from "./SeniorDeveloper/PerformanceNFeedback/PerformanceTable";
import CreatePerformance from "./SeniorDeveloper/PerformanceNFeedback/CreatePerformance";
import EmployeeMonitoring from "./SeniorDeveloper/EmployeeMonitoring/EmployeeMonitoring";
import PickATime from "./calendar/pick_a_time";
import NewMeetCalendar from "./calendar/new_meeting";
import MainDashboard from "./dashboard/MainDashboard/MainDashboard";
import Calendar from "react-calendar";
import Calender from "./calendar/Calender2";
import Calender2 from "./calendar/Calender2";
import UserProfile from "./Profile/UserProfile";
import Login from "./Login/Login";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import DocumentUpload from "./HR_Portal/Onboarding/DocumentUpload";
import BackgroundVerification from "./HR_Portal/Onboarding/BackgroundVerification";
import EmployeeProfileGeneration from "./HR_Portal/Onboarding/Employee_Profile_Generation";
import OnboardingAsset from "./HR_Portal/Onboarding/OnboardingAsset";
import EmployeeFinance from "./HR_Portal/EmployeeFinance/EmployeeFinance";
import CreateFinance from "./HR_Portal/EmployeeFinance/CreateFinance";
import EmployeeComplaints from "./HR_Portal/EmployeeComplaints/EmployeeComplaints";
import EmployeeWarning from "./HR_Portal/EmployeeComplaints/EmployeeWarning";
import EmployeeWarningSend from "./HR_Portal/EmployeeComplaints/EmployeeWarningSend";
import FinanceClearance from "./HR_Portal/FinanceClearance/FinanceClearance";
import ProjectHandover from "./HR_Portal/ProjectHandover/Projecthandover";
import ExitInterview from "./HR_Portal/ExitInterview/ExitInterview";
import Feedback from "./HR_Portal/Feedback/Feedback";
import EmployeeSeparationTerminate from "./HR_Portal/EmployeeSeparation/ExployeeSeparationTerminate";
import InterviewLineup from "./HR_Portal/InterviewLineup/InterviewLineup";
import InterviewLineup2 from "./HR_Portal/InterviewLineup/InterviewLineup2";
import InterviewLineup3 from "./HR_Portal/InterviewLineup/InterviewLineup3";
import CandidateData from "./HR_Portal/Applications/CandidateData";
import JobProfile from "./HR_Portal/Onboarding/JobProfile";
import HRDashboard from "./HR_Portal/HR_Dashboard/HRDashboard";
import JobPosting from "./HR_Portal/JobPosting/JobPosting";
import NewJob from "./HR_Portal/JobPosting/NewJob";
import EditJob from "./HR_Portal/JobPosting/EditJob";
import Applications from "./HR_Portal/Applications/Applications";
import Onboarding from "./HR_Portal/Onboarding/Onboarding";
import Announcement from "./HR_Portal/Announcement/Announcement";
import AnnouncementForm from "./HR_Portal/Announcement/AnnouncementForm";
import EmployeeManagement from "./HR_Portal/EmployeeManagement/EmployeeManagement";
import LeaveReports from "./HR_Portal/Calendar/LeaveReports";
import EmployeeSeparation from "./HR_Portal/EmployeeSeparation/EmployeeSeparation";
import EmployeeSeparationResign from "./HR_Portal/EmployeeSeparation/EmployeeSeparationResign";
import AssetClearance from "./HR_Portal/AssetClearance/AssetClearance";
import EmployeeServiceRequestTicket from "./HR_Portal/EmployeeServiceRequest/EmployeeServiceRequestTicket";
import { decodeToken } from "react-jwt";
import Resign from "./HR_Portal/EmployeeSeparation/Resign";
import Terminate from "./HR_Portal/EmployeeSeparation/Terminate";
import EmployeeWarningSendtwo from "./HR_Portal/EmployeeComplaints/EmployeeWarningSend2";
import EmployeeWarningSendthree from "./HR_Portal/EmployeeComplaints/EmployeeWarningSend3";

function App() {
 const navigate=useNavigate()

  const  data = useSelector((store) => store.auth.singleData);
console.log('app',data)
const  asset = useSelector((store) => store.asset.AddProduct);
console.log('asset',asset,asset.message)
const  ticket2 = useSelector((store) => store.ticket.AddProduct);
const  complaint = useSelector((store) => store.complaints.AddProduct);

const myDecodedToken = decodeToken(data&&data.token);
console.log('====================================');
console.log('myDecodedTokenu',myDecodedToken);
console.log('====================================');

if(data){
  console.log('====================================');
  console.log('working');
  console.log('====================================');
}
const toast=useToast()
useEffect(()=>{
  if(data&&data.results.length==0){
    console.log('====================================');
    console.log('hello');
    console.log('====================================');
    
    
    toast({
      title: "Please Provide Valid Credentials",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    }); 
    }
    
    if(data&&data.results.length==1){
      console.log('====================================');
      console.log('hello123');
      console.log('====================================');
      //navigate('/dashboard')
       //return <Navigate to={'/dashboard'} />
       if(myDecodedToken.emp_level=='0'){
      navigate('/dashboard')

       }
       else if(myDecodedToken.emp_level=='1' || myDecodedToken.emp_level=='2'){
        navigate('/SeniorDashboard')
  
         }
    
      }
},[data])



 useEffect(()=>{
if(asset.message=='asset added'){
  console.log('====================================');
  console.log('asset added');
  console.log('====================================');
  toast({
    title: "Request an Asset Successfully",
    status: "info",
    duration: 2000,
    isClosable: true,
    position: "top",
  }); 
}
},[asset])

useEffect(()=>{
  if(ticket2.message=='asset added'){
    console.log('====================================');
    console.log('asset added');
    console.log('====================================');
    toast({
      title: "Request for Ticket Successfully",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    }); 
    // window.location.reload()

  }
  },[ticket2])

  useEffect(()=>{
    if(complaint.message=='complaint added'){
      console.log('====================================');
      console.log('asset added');
      console.log('====================================');
      toast({
        title: "Request for complaint Successfully",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      }); 
      // window.location.reload()
  
    }
    },[complaint])
  

  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
        <Route path="/" element={<Login />} />
              
          <Route path="/dashboard" element={<PrivateRoute><Dashboard><MainDashboard/></Dashboard></PrivateRoute>} />
          <Route path="/ticket" element={<Dashboard><Ticket /></Dashboard>} />
          <Route path="/assets" element={<Dashboard><Assets /></Dashboard>} />

          <Route path="/RaiseRequest" element={<RaiseRequest/>} />
          <Route path="/AssetRequest" element={<AssetRequest />} />
          <Route path="/Finance" element={<Dashboard><Finance/></Dashboard>} />
          <Route path="/CabFacility" element={<Dashboard><CabFacility/></Dashboard>} />
          <Route path="/Referral" element={<Dashboard><Referral/></Dashboard>} />
          <Route path="/Reimbursement" element={<Dashboard><Reimbursement/></Dashboard>} />
          <Route path="/ReimbursementRequest" element={<ReimbursementRequest />} />
          <Route path="/BookACab" element={<BookACab/>} />
          <Route path="/CreateReferral" element={<CreateReferral/>} />
          <Route path="/Complaints" element={<Dashboard><Complaints/></Dashboard>} />
          <Route path="/Warning" element={<Dashboard><Warning/></Dashboard>} />
          <Route path="/Projects" element={<Dashboard><Projects /></Dashboard>} />
          <Route path="/Teams" element={<Teams />} />
          <Route path="/AttendanceManagement" element={<Dashboard><AttendanceManagement /></Dashboard>} />
          <Route path="/CalendarTask" element={<CalendarTask />} />
          <Route path="/CalendarHoliday" element={<CalendarHoliday />} />
          <Route path="/Calendar" element={<Dashboard><Calender2 /></Dashboard>} />
          <Route path="/profile" element={<Dashboard><UserProfile /></Dashboard>} />

          <Route path="/PickATime" element={<PickATime />} />
          <Route path="/NewMeetCalendar" element={<NewMeetCalendar />} />

          {/* <Route path="/SeniorDashboard" element={<SeniorDashboard />} /> */}
          {/* <Route path="/SeniorProjects" element={<SeniorProjects />} /> */}
          {/* <Route path="/SeniorProjectsTeam" element={<SeniorProjectsTeam />} /> */}
          {/* <Route path="/CreateProjectTask" element={<CreateProjectTask />} /> */}
          {/* <Route path="/SeniorTask" element={<SeniorTask />} /> */}
          {/* <Route path="/CreateTasks" element={<CreateTasks />} /> */}
          {/* <Route path="/PerformanceTable" element={<PerformanceTable />} /> */}
          {/* <Route path="/CreatePerformance" element={<CreatePerformance/>} /> */}
          {/* <Route path="/EmployeeMonitoring" element={<EmployeeMonitoring />} /> */}
          <Route path="/SeniorDashboard" element={<SeniorDashboard><MainDashboard/></SeniorDashboard>} />
          <Route path="/SeniorCalendar" element={<SeniorDashboard><Calender2/></SeniorDashboard>} />
          <Route path="/SeniorProjects" element={<SeniorDashboard><SeniorProjects/></SeniorDashboard>} />
          <Route path="/SeniorProjectsTeam" element={<SeniorDashboard><SeniorProjectsTeam/></SeniorDashboard>} />
          <Route path="/CreateProjectTask" element={<CreateProjectTask />} />
          <Route path="/SeniorTask" element={<SeniorDashboard><SeniorTask /></SeniorDashboard>} />
          <Route path="/CreateTasks" element={<CreateTasks />} />
          <Route path="/PerformanceTable" element={<SeniorDashboard><PerformanceTable /></SeniorDashboard>} />
          <Route path="/CreatePerformance" element={<CreatePerformance/>} />
          <Route path="/EmployeeMonitoring" element={<SeniorDashboard><EmployeeMonitoring /></SeniorDashboard>} />
          <Route path="/SeniorAttendanceManagement" element={<SeniorDashboard><AttendanceManagement /></SeniorDashboard>} />
          <Route path="/Seniorticket" element={<SeniorDashboard><Ticket /></SeniorDashboard>} />
          <Route path="/Seniorassets" element={<SeniorDashboard><Assets /></SeniorDashboard>} />
          <Route path="/RaiseRequest" element={<RaiseRequest/>} />
          <Route path="/AssetRequest" element={<AssetRequest />} />
          <Route path="/SeniorFinance" element={<SeniorDashboard><Finance/></SeniorDashboard>} />
          <Route path="/SeniorCabFacility" element={<SeniorDashboard><CabFacility/></SeniorDashboard>} />
          <Route path="/BookACab" element={<BookACab/>} />
          <Route path="/SeniorReferral" element={<SeniorDashboard><Referral/></SeniorDashboard>} />
          <Route path="/CreateReferral" element={<CreateReferral/>} />
          <Route path="/SeniorReimbursement" element={<SeniorDashboard><Reimbursement/></SeniorDashboard>} />
          <Route path="/ReimbursementRequest" element={<ReimbursementRequest />} />
          <Route path="/SeniorComplaints" element={<SeniorDashboard><Complaints/></SeniorDashboard>} />
          <Route path="/SeniorWarning" element={<SeniorDashboard><Warning/></SeniorDashboard>} />
          <Route path="/Seniorprofile" element={<SeniorDashboard><UserProfile /></SeniorDashboard>} />

          {/* <Route path="/HRDashboard" element={<HRDashboard />} />
          <Route path="/JobPosting" element={<JobPosting />} />
          <Route path="/NewJob" element={<NewJob />} />
          <Route path="/EditJob" element={<EditJob />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/Onboarding" element={<Onboarding />} />
          <Route path="/Announcement" element={<Announcement />} />
          <Route path="/AnnouncementForm" element={<AnnouncementForm />} />
          <Route path="/EmployeeManagement" element={<EmployeeManagement />} />
          <Route path="/LeaveReports" element={<HRDashboard><LeaveReports /></HRDashboard>} />
          <Route path="/EmployeeSeparation" element={<EmployeeSeparation />} /> */}
          {/* <Route path="/EmployeeSeparationResign" element={<EmployeeSeparationResign />} />
          <Route path="/EmployeeSeparationTerminate" element={<EmployeeSeparationTerminate />} /> */}
           {/* <Route path="/EmployeeSeparationResign" element={<Resign />} />
          <Route path="/EmployeeSeparationTerminate" element={<Terminate />} />
          <Route path="/AssetClearance" element={<AssetClearance />} />
          <Route path="/FinanceClearance" element={<FinanceClearance />} />
          <Route path="/ProjectHandover" element={<ProjectHandover />} />
          <Route path="/ExitInterview" element={<ExitInterview />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/InterviewLineup" element={<InterviewLineup />} />
          <Route path="/InterviewLineup2" element={<InterviewLineup2 />} />
          <Route path="/InterviewLineup3" element={<InterviewLineup3 />} />
          <Route path="/CandidateData" element={<CandidateData />} />
          <Route path="/JobProfile" element={<JobProfile />} />
          <Route path="/DocumentUpload" element={<DocumentUpload />} />
          <Route path="/BackgroundVerification" element={<BackgroundVerification/>} />
          <Route path="/EmployeeProfileGeneration" element={<EmployeeProfileGeneration />} />
          <Route path="/OnboardingAsset" element={<OnboardingAsset />} />
          <Route path="/EmployeeFinance" element={<EmployeeFinance />} />
          <Route path="/CreateFinance" element={<CreateFinance />} />
          <Route path="/EmployeeComplaints" element={<EmployeeComplaints />} />
          <Route path="/EmployeeWarning" element={<EmployeeWarning />} />
          <Route path="/EmployeeWarningSend" element={<EmployeeWarningSend />} />
          <Route path="/EmployeeServiceRequestTicket" element={<EmployeeServiceRequestTicket/>} /> */}









          <Route path="/HRDashboard" element={<HRDashboard><MainDashboard/></HRDashboard>} />
          <Route path="/JobPosting" element={<HRDashboard><JobPosting /></HRDashboard>} />
          <Route path="/NewJob" element={<NewJob />} />
          <Route path="/EditJob" element={<HRDashboard><EditJob /></HRDashboard>} />
          <Route path="/Applications" element={<HRDashboard><Applications /></HRDashboard>} />
          <Route path="/Onboarding" element={<HRDashboard><Onboarding /></HRDashboard>} />
          <Route path="/Announcement" element={<HRDashboard><Announcement /></HRDashboard>} />
          <Route path="/AnnouncementForm" element={<AnnouncementForm />} />
          <Route path="/EmployeeManagement" element={<HRDashboard><EmployeeManagement /></HRDashboard>} />
          <Route path="/LeaveReports" element={<LeaveReports />} />
          <Route path="/EmployeeSeparation" element={<HRDashboard><EmployeeSeparation /></HRDashboard>} />
          <Route path="/EmployeeSeparationResign" element={<HRDashboard><Resign/></HRDashboard>} />
          <Route path="/EmployeeSeparationTerminate" element={<HRDashboard><Terminate /></HRDashboard>} />
          <Route path="/AssetClearance" element={<HRDashboard><AssetClearance /></HRDashboard>} />
          <Route path="/FinanceClearance" element={<HRDashboard><FinanceClearance /></HRDashboard>} />
          <Route path="/ProjectHandover" element={<HRDashboard><ProjectHandover /></HRDashboard>} />
          <Route path="/ExitInterview" element={<HRDashboard><ExitInterview /></HRDashboard>} />
          <Route path="/Feedback" element={<HRDashboard><Feedback /></HRDashboard>} />
          <Route path="/InterviewLineup" element={<HRDashboard><InterviewLineup /></HRDashboard>} />
          <Route path="/InterviewLineup2" element={<HRDashboard><InterviewLineup2 /></HRDashboard>} />
          <Route path="/InterviewLineup3" element={<HRDashboard><InterviewLineup3 /></HRDashboard>} />
          <Route path="/CandidateData" element={<HRDashboard><CandidateData /></HRDashboard>} />
          <Route path="/JobProfile" element={<HRDashboard><JobProfile /></HRDashboard>} />
          <Route path="/DocumentUpload" element={<HRDashboard><DocumentUpload /></HRDashboard>} />
          <Route path="/BackgroundVerification" element={<HRDashboard><BackgroundVerification /></HRDashboard>} />
          <Route path="/EmployeeProfileGeneration" element={<HRDashboard><EmployeeProfileGeneration /></HRDashboard>} />
          <Route path="/OnboardingAsset" element={<HRDashboard><OnboardingAsset /></HRDashboard>} />
          <Route path="/EmployeeFinance" element={<HRDashboard><EmployeeFinance /></HRDashboard>} />
          <Route path="/CreateFinance" element={<CreateFinance />} />
          <Route path="/EmployeeComplaints" element={<HRDashboard><EmployeeComplaints /></HRDashboard>} />
          <Route path="/EmployeeWarning" element={<EmployeeWarning />} />
          <Route path="/EmployeeWarningSend" element={<EmployeeWarningSend />} />
          <Route path="/EmployeeWarningSendtwo" element={<EmployeeWarningSendtwo />} />
          <Route path="/EmployeeWarningSendthree" element={<EmployeeWarningSendthree />} />
          <Route path="/EmployeeServiceRequestTicket" element={<HRDashboard><EmployeeServiceRequestTicket /></HRDashboard>} />








        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;





























// import { Flex } from "@chakra-ui/react"
// import { Text } from "@chakra-ui/react"
// import { Box } from "@chakra-ui/react"

// const App = () => {
//   return (
//     <>
//       <Flex w='100%'
//       h= '100vh' background='#F9F9F9' borderRadius='30px'>
//         <Flex w='18%'
//         h='100vh' background='#FFF' borderRadius='20px' border='1px solid #EFF0F6'>
//         <justifyContent>
//         <Text w='100%' ml='60%' mt='20%' color='#FFB800' fontFamily='Inter' fontSize='24px' fontStyle='normal' fontWeight='700' lineHeight='normal' >EDVERSE</Text>
//         <Box border='1px solid #FFB800' h='15vh' w='15vh' mt='10%' ml='60%' borderRadius='0px 6px 0px 0px'></Box>
//         <Text w='100%' mt='6%' ml='68%' color='#000' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='600' lineHeight='18px'>Sam Wheeler</Text>
//         <Text w='100%' mt='2%' ml='50%' fontFamily='Inter' fontSize='12px' fontStyle='normal' fontWeight='400' lineHeight='normal' color='rgba(0, 0, 0, 0.50)'>samwheeler@example.com</Text>
        
//         </justifyContent>  
   
//         <justifyContent>
//           <Text mt='360%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>My Dashboard</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Calendar</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Projects</Text>

//           <Text w='400%' mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Attendance Management</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Service Request</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Finance</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Cab Facility</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Referral</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Expenses</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Complaints</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Employee Warning</Text>

//           <Text mt='20%' ml='-80%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Edverse Chat</Text>
        
//         </justifyContent>
         
//         <justifyContent>
//         <Text mt='386%' ml='-90%' color='#E5E5E5' >__________________________</Text>
//         <Text mt='4%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Help & Support</Text>

//         <Text mt='4%' ml='-76%' fontFamily='Inter' fontSize='14px' fontStyle='normal' fontWeight='500' lineHeight='normal' color='rgba(0, 0, 0, 0.70)' letterSpacing='-0.154px'>Log out</Text>


//         </justifyContent>

//         </Flex>
//       </Flex>
//     </>
//   )
// }

// export default App









// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
