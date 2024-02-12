import axios from "axios";
import {
  // ADD_PRODUCT_FAILURE,
  // ADD_PRODUCT_REQUEST,
  // ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  // GET_AUTHOR_PRODUCT_REQUEST,
  // GET_AUTHOR_PRODUCT_SUCCESS,
  // GET_AUTHOR_PRODUCT_FAILURE,
  GET_EMP_ASSET_REQUEST1,
  GET_EMP_ASSET_FAILURE3,
  GET_EMP_ASSET_SUCCESS2,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  GET_ALL_PATIENTDETAILS_REQUEST,
  GET_ALL_PATIENTDETAILS_SUCCESS,
  GET_ALL_PATIENTDETAILS_FAILURE,
  DELETE_OPPOINTMENT_REQUEST,
  DELETE_OPPOINTMENT_SUCCESS,
  DELETE_OPPOINTMENT_FAILURE,
  GET_AUTHOR_PRODUCT_REQUEST1,
  GET_AUTHOR_PRODUCT_SUCCESS2,
  GET_AUTHOR_PRODUCT_FAILURE3,
  UPDATE_PRODUCT_REQUEST1,
  UPDATE_PRODUCT_SUCCESS1,
  UPDATE_PRODUCT_FAILURE1,
  GET_EMP_PROJECT_REQUEST,
  GET_EMP_PROJECT_SUCCESS,
  GET_EMP_PROJECT_FAILURE,
  GET_EMP_PROJECT_REQUEST1,
  GET_EMP_PROJECT_SUCCESS1,
  GET_EMP_PROJECT_FAILURE1,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  GET_EMP_ASSIGNEDPROJECT_REQUEST,
  GET_EMP_ASSIGNEDPROJECT_SUCCESS,
  GET_EMP_ASSIGNEDPROJECT_FAILURE,
  GET_EMP_PASTPROJECT_REQUEST,
  GET_EMP_PASTPROJECT_SUCCESS,
  GET_EMP_PASTPROJECT_FAILURE,
  

} from "./actionTypes";

// export const getAllProducts = (q) => async (dispatch) => {
// console.log('page',q);
// const token=localStorage.getItem("token")
// if(!q){
//   q=''
// }

// //const url=`http://localhost:8080/blogs/getall?${q}`

//   try {
//     dispatch({ type: GET_ALL_PATIENTDETAILS_REQUEST });
   
    
//     const res=  await fetch(`http://localhost:8080/blogs/getall?${q}`, {
//       // body: JSON.stringify(res),
//       method: "GET",
//       headers: {
//         token:token

// ,
//         "Content-Type": "application/json",
//       },
//     });
//     var data=await res.json()
// console.log('fgh123',data);
//     dispatch({ type: GET_ALL_PATIENTDETAILS_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({
//       type: GET_ALL_PATIENTDETAILS_FAILURE,
//       payload:error
//     });
//   }
// };


// export const getAllProducts2 = (page,limit,q) => async (dispatch) => {
//   console.log('page',q);
//   const token=localStorage.getItem("token")
//   if(!q){
//     q=''
//   }
  
//   //const url=`http://localhost:8080/blogs/getall?${q}`
  
//     try {
//       dispatch({ type: GET_ALL_PATIENTDETAILS_REQUEST });
     
      
//       const res=  await fetch(`http://localhost:8080/blogs/getall?query=${q}&limit=${limit}&page=${page}`, {
       
//         // body: JSON.stringify(res),
//         method: "GET",
//         headers: {
//           token:token
//   ,
//           "Content-Type": "application/json",
//         },
//       });
//       var data=await res.json()
//   console.log('fgh123',data);
//       dispatch({ type: GET_ALL_PATIENTDETAILS_SUCCESS, payload: data });
//     } catch (error) {
//       dispatch({
//         type: GET_ALL_PATIENTDETAILS_FAILURE,
//         payload:error
//       });
//     }
//   };
  



//   export const getAllProducts3 = (startDate,endDate) => async (dispatch) => {
//     //console.log('page',q);
//     const token=localStorage.getItem("token")
//     // if(!q){
//     //   q=''
//     // }
    
//     //const url=`http://localhost:8080/blogs/getall?${q}`
    
//       try {
//         dispatch({ type: GET_ALL_PATIENTDETAILS_REQUEST });
       
        
//         const res=  await fetch(`http://localhost:8080/blogs/data?startDate=${startDate}&endDate=${endDate}`, {
         
//           // body: JSON.stringify(res),
//           method: "GET",
//           headers: {
//             token:token
//     ,
//             "Content-Type": "application/json",
//           },
//         });
//         var data=await res.json()
//     console.log('fgh123',data);
//         dispatch({ type: GET_ALL_PATIENTDETAILS_SUCCESS, payload: data });
//       } catch (error) {
//         dispatch({
//           type: GET_ALL_PATIENTDETAILS_FAILURE,
//           payload:error
//         });
//       }
//     };




// export const getSingleProduct = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_SINGLE_PRODUCT_REQUEST });

//     const res = await axios.get(
//       `http://localhost:8080/blogs/speblogs/${id}`
//     );
    
// console.log('fgh',res);
//     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({
//       type: GET_SINGLE_PRODUCT_FAILURE,
//     });
//   }
// };






export const getempongoingproject = (id) => async (dispatch) => {
  //console.log('is',iid);
  //var id=id
    //console.log('is',id);
   // const token=localStorage.getItem("token")


  try {
    dispatch({ type: GET_EMP_PROJECT_REQUEST });

    
    // const res=  await fetch(`http://68.178.169.96:3000/ongoing-projects/${id}`, {
     const res=  await fetch(`http://68.178.169.96:3000/projects`, {

      // body: JSON.stringify(res),
      method: "GET",
      
    });
    var data=await res.json()
console.log('fgh123',data);
//console.log('fgh123',res.data);
    dispatch({ type: GET_EMP_PROJECT_SUCCESS, payload: data.response });
  } catch (error) {
    dispatch({
      type: GET_EMP_PROJECT_FAILURE,
    });
  }
};




export const getempongoingproject2 = (id) => async (dispatch) => {
  //console.log('is',iid);
  //var id=id
    //console.log('is',id);
   // const token=localStorage.getItem("token")


  try {
    dispatch({ type: GET_EMP_PROJECT_REQUEST1 });

    
    const res=  await fetch(`http://68.178.169.96:3000/past-projects/${id}`, {
      // body: JSON.stringify(res),
      method: "GET",
      
    });
    var data=await res.json()
console.log('fgh123',data);
//console.log('fgh123',res.data);
    dispatch({ type: GET_EMP_PROJECT_SUCCESS1, payload: data.response });
  } catch (error) {
    dispatch({
      type: GET_EMP_PROJECT_FAILURE1,
    });
  }
};


export const getempoassignedBYproject2 = (id) => async (dispatch) => {
  //console.log('is',iid);
  //var id=id
    //console.log('is',id);
   // const token=localStorage.getItem("token")


  try {
    dispatch({ type: GET_EMP_ASSIGNEDPROJECT_REQUEST });

    
    // const res=  await fetch(`http://68.178.169.96:3000/projects/project_head?project_head=${id}`, {
      const res=  await fetch(`http://68.178.169.96:3000/ongoing-projects/project_head/Emp004`, {

      // body: JSON.stringify(res),
      method: "GET",
      
    });
    var data=await res.json()
console.log('fgh123',data);
//console.log('fgh123',res.data);
    dispatch({ type: GET_EMP_ASSIGNEDPROJECT_SUCCESS, payload: data.response });
  } catch (error) {
    dispatch({
      type: GET_EMP_ASSIGNEDPROJECT_FAILURE,
    });
  }
};



export const getempPASTBYproject2 = (id) => async (dispatch) => {
  //console.log('is',iid);
  //var id=id
    //console.log('is',id);
   // const token=localStorage.getItem("token")


  try {
    dispatch({ type: GET_EMP_PASTPROJECT_REQUEST });

    
    // const res=  await fetch(`http://68.178.169.96:3000/projects/project_head?project_head=${id}`, {
      const res=  await fetch(`http://68.178.169.96:3000/past-projects/project_head/Emp004`, {

      // body: JSON.stringify(res),
      method: "GET",
      
    });
    var data=await res.json()
console.log('fgh123',data);
//console.log('fgh123',res.data);
    dispatch({ type: GET_EMP_PASTPROJECT_SUCCESS, payload: data.response });
  } catch (error) {
    dispatch({
      type: GET_EMP_PASTPROJECT_FAILURE,
    });
  }
};





export const addempproject = (formData,id) => async (dispatch) => {
  const headers = {
    token: localStorage.getItem("token"),
  };
  try {

   dispatch({ type: ADD_PROJECT_REQUEST});

  await axios.post(
                   `http://68.178.169.96:3000/projects`,
                               formData,{
               headers: { token: localStorage.getItem('token') }

                               })  .then(response => {
                                console.log('Response:', response.data);
                                   dispatch({ type: ADD_PROJECT_SUCCESS, payload: response.data });

                              })
                              .catch(error => {
                                dispatch({
                                  type: ADD_PROJECT_FAILURE,
                                });                              });
                            
             //console.log(res.data);
   // console.log('res=',res);
   
    //console.log('data1=',data1);
    // dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_FAILURE,
    });
    console.log('====================================');
    console.log(error.message);
    console.log('====================================');
  }
};

export const updatePROJECTStatus = (id, data) => async (dispatch) => {
  console.log('opp',data);
  try {
    dispatch({ type: UPDATE_PROJECT_REQUEST });

    await fetch(`http://68.178.169.96:3000/projects/${id}`, {
      body: JSON.stringify(data),
      method: "PATCH",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    

    dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_PROJECT_FAILURE,
    });
  }
};




// export const updatepatientdocs = (data,id) => async (dispatch) => {
//   console.log('opp',data);
//   try {
//     dispatch({ type: UPDATE_PRODUCT_REQUEST1 });

//     axios.patch(`http://localhost:8080/application/update/${id}`, data, {
//       // headers: {
//       //   ...formData.getHeaders(),
//       // },
//     })
//     .then(response => {
//       console.log('File reuploaded successfully:', response.data);
//         dispatch({ type: UPDATE_PRODUCT_SUCCESS1, payload: response.data });

//     })
//     .catch(error => {
//       dispatch({
//         type: UPDATE_PRODUCT_FAILURE1,
//       });
//       console.error('Error uploading file:', error.response.data);
//     });
    
    
    
    
    
    

//     //dispatch({ type: UPDATE_PRODUCT_SUCCESS1, payload: data });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PRODUCT_FAILURE1,
//     });
//   }
// };






export const deletePROJECT = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    await fetch(`http://localhost:8080/application/${id}`, {
      method: "DELETE",
      headers: {
       // token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAILURE,
    });
  }
};




// export const deleteOppointment= (id) => async (dispatch) => {
//   try {
//     dispatch({ type: DELETE_OPPOINTMENT_REQUEST });

//     await fetch(`http://localhost:8080/blogs/${id}`, {
//       method: "DELETE",
//       headers: {
//         token: localStorage.getItem("token"),
//         "Content-Type": "application/json",
//       },
//     });
//     dispatch({ type: DELETE_OPPOINTMENT_SUCCESS, payload: id });
//   } catch (error) {
//     dispatch({
//       type: DELETE_OPPOINTMENT_FAILURE,
//     });
//   }
// };










