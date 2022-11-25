import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, PROFILE_FAIL, PROFILE_REQUEST, PROFILE_SUCCESS } from "./actionType";
    
    const initiailState = {
      loding: false,
      error: "",
      userDetails: [],
      logoutDetails: [],
      profileDetails:[]
    };
    

    //---------------------login-----------------------------------

  
  const LoginReducer = (state = initiailState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
        error: "",
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
  };

  export default LoginReducer;


    //--------------------------------------logout--------------------------------


  export const LogoutReducer =(state=initiailState,action)=>{
    switch(action.type){
      case LOGOUT_REQUEST:
        return{
          ...state,
          loading:true
        }
      
      case LOGOUT_SUCCESS:
        return{
          ...state,
          loading:false,
          userDetails:''
        }

      case LOGOUT_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }
      
      default:
        return state;
    }
      
  }


   