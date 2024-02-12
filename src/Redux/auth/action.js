import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_REGISTER_FAILURE,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_LOGOUT,
  ADD_OPPOINTMENT_REQUEST,
  ADD_OPPOINTMENT_SUCCESS,
  ADD_OPPOINTMENT_FAILURE,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
  GET_ALL_USERS_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILURE,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST1,
  UPDATE_USER_SUCCESS1,
  UPDATE_USER_FAILURE1,
 
} from "./actionTypes";
import axios from "axios";

export const authRegister = (data) => async (dispatch) => {
 // console.log('data',data);
  try {
    dispatch({ type: AUTH_REGISTER_REQUEST });

    const res = await axios.post(
      "http://68.178.169.96:3000/emp",
      data
    );
    console.log('res: ', res);

    dispatch({
      type: AUTH_REGISTER_SUCCESS,
      payload: {
        message: res.data,
        data:res.data
      },
    });
  } catch (error) {
    console.log('error: ', error.response.data);

    dispatch({
      type: AUTH_REGISTER_FAILURE,
      payload: {
        message: error.response.data,
      },
    });
  }
};


export const addOppointment = (data) => async (dispatch) => {
console.log('datajhbhb',data);
  try {
    dispatch({ type: ADD_OPPOINTMENT_REQUEST });

    const res = await fetch("http://localhost:8080/blogs/appointment", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    });
    let data1 = await res.json();
    // console.log('res=',res);
    console.log('data1=',data1);
    dispatch({ type: ADD_OPPOINTMENT_SUCCESS, payload: data1 });
  } catch (error) {
    dispatch({
      type: ADD_OPPOINTMENT_FAILURE,
    });
  }
};

// export const getSingleUser = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: GET_SINGLE_USER_REQUEST });

//     const res = await axios.get(
//     `http://68.178.169.96:3000/emp/emp_id?org_id='Ed001'&emp_id='Emp007'&emp_password='test'`, {headers: {
//         token:localStorage.getItem("token")
// ,
//         "Content-Type": "application/json",
//       },}
//     );
    
// console.log('fgh',res);
//     dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data.response });
//   } catch (error) {
//     dispatch({
//       type: GET_SINGLE_USER_FAILURE,
//     });
//   }
// };

export const authLogin = (data) => async (dispatch) => {
//   console.log("data: ", data);
  try {
    dispatch({ type: AUTH_LOGIN_REQUEST });

    const res = await axios.post(
      "http://localhost:8080/users/login",
      data
    );
     console.log("res: ", res);

    dispatch({
      type: AUTH_LOGIN_SUCCESS,
      payload: {
        token: res.data.token,
        message:res.data.message,
        user: res.data.user,
      },
    });
  } catch (error) {
    // console.log("error: ", error);

    dispatch({
      type: AUTH_LOGIN_FAILURE,
      payload: {
        message: 'user with this mail does not exist',
      },
    });
  }
};

export const signout = () => {
  return {
    type: AUTH_LOGOUT,
    
  };
};


export const getSingleUser = (data) => async (dispatch) => {
  //console.log('datalogin',data.org_id);

  try {
    dispatch({ type: GET_SINGLE_USER_REQUEST });

    const res = await axios.get(
    `http://68.178.169.96:3000/emp/emp_id/web?org_id='${data.org_id}'&emp_id='${data.emp_id}'&emp_password='${data.emp_password}'`, {headers: {
        token:localStorage.getItem("token")
,
        "Content-Type": "application/json",
      },}
    );

    
console.log('fgh',res);
    dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: res.data.response  });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_USER_FAILURE,
    });
  }
};








export const getAllusers = () => async (dispatch) => {
  //console.log('page',page);
  const token=localStorage.getItem("token")
  
    try {
      dispatch({ type: GET_ALL_USERS_REQUEST });
     
      
      const res=  await fetch(`http://68.178.169.96:3000/emp/all?org_id='Ed001'`, {
        // body: JSON.stringify(res),
        method: "GET",
        headers: {
          token:token
  ,
          "Content-Type": "application/json",
        },
      });
      var data=await res.json()
  console.log('fgh123',data);
      dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data.response });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_FAILURE,
        payload:error
      });
    }
  };




  export const getAllusers2 = (page,show,q) => async (dispatch) => {
    //console.log('page',page);
    const token=localStorage.getItem("token")
    const limit=Number(show)

      try {
        dispatch({ type: GET_ALL_USERS_REQUEST });
       
        
        const res=  await fetch(`http://localhost:8080/users/getall?query=${q}&limit=${limit}&page=${page}`, {
          // body: JSON.stringify(res),
          method: "GET",
          headers: {
            token:token
    ,
            "Content-Type": "application/json",
          },
        });
        var data=await res.json()
    console.log('fgh123',data);
        dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: GET_ALL_USERS_FAILURE,
          payload:error
        });
      }
    };



  export const deleteuser = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });
  
      await fetch(`http://localhost:8080/users/${id}`, {
        method: "DELETE",
        headers: {
        //  token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      dispatch({ type: DELETE_USER_SUCCESS, payload: id });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
      });
    }
  }

  export const updateUserStatus = (id, data) => async (dispatch) => {
    console.log('opp',data);
    try {
      dispatch({ type: UPDATE_USER_REQUEST });
  
      await fetch(`http://localhost:8080/users/user/${id}`, {
        body: JSON.stringify(data),
        method: "PATCH",
        headers: {
          token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      
  
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
      });
    }
  };


  export const sendveriemail = (formData) => async (dispatch) => {

    try {
  
      dispatch({ type: SEND_EMAIL_REQUEST });
  
      const res = await axios.post(
                     `http://localhost:8080/users/email`,
                                 formData
        
                 );
               console.log(res.data);
      console.log('res=',res);
      //console.log('data1=',data1);
      dispatch({ type: SEND_EMAIL_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SEND_EMAIL_FAILURE,payload: error.message
      });
    }
  };

  export const updateUserPassword = (id, data) => async (dispatch) => {
    console.log('opp',id,data);
    try {
      dispatch({ type: UPDATE_USER_REQUEST1 });
  
     const res= await fetch(`http://localhost:8080/users/email/${id}`, {
        body: JSON.stringify(data),
        method: "PATCH",
        headers: {
          // token: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      });
      var datan=await res.json()

  console.log('====================================');
  console.log('aaaaaaaaaaaaaaaaaaaaaa',datan);
  console.log('====================================');
      dispatch({ type: UPDATE_USER_SUCCESS1, payload: datan });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE1,payload:"errord"
      });
    }
  };
