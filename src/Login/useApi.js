import axios from "axios";
import { axiosApi } from "../Store/api_methods";
// import { axiosApi } from 
import { loginFail, loginRequest, loginSuccess, logoutRequest, logoutSuccess, profileFail, profileRequest, profileSuccess } from "./action";


    //---------------------------------Login---------------------------------------


    export const loginApi = (input,navigate) => {
    return async (dispatch) => {
    
    dispatch(loginRequest(input));
    
    try {
     const user = await axiosApi.post('/account/login/',input);
    //  const user = await axios.post(`http://api.certificates.edisonvalley.com/api/v1/account/login`,input);
     console.log(user);
     if(user?.data?.token){
      dispatch(loginSuccess(user.data));
      sessionStorage.setItem("token",user.data.token)
      navigate("/dash")
     }
    } 
    
    catch (error) {
      console.log(error);
      dispatch(loginFail(error?.response?.data));
    }
  };
};

  //--------------------------------------------logout---------------------------------------

  export const logoutApi = (navigate) => {
    return async (dispatch) => {
    dispatch(logoutRequest());
    
    try {
     const token=sessionStorage.getItem("token")
     const res = await axiosApi.post('/account/logout/',token);
    //  const user = await axios.post(`http://api.certificates.edisonvalley.com/api/v1/account/login`,input);
     console.log(res);
     if(res){
      dispatch(logoutSuccess(res.data));
      sessionStorage.clear('token')
      navigate("/")
     }
    } 
    
    catch (error) {
      console.log(error);
      dispatch(loginFail(error?.response?.data));
    }
  };
};

//----------------------------------Profile------------------------------------------

export const profileApi = () => {
  return async (dispatch) => {
  dispatch(profileRequest());
  
  try {
   const res = await axiosApi.get('/account/profile/');
  //  console.log(res);
   if(res){
    dispatch(profileSuccess(res.data));
    // sessionStorage.clear('token')
    // navigate("/")
   }
  } 
  
  catch (error) {
    console.log(error);
    dispatch(profileFail(error));
  }
};
};