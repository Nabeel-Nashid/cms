import { CREATE_FAIL, CREATE_REQUEST, CREATE_STUDENT_COURSE_FAIL, CREATE_STUDENT_COURSE_REQUEST, CREATE_STUDENT_COURSE_SUCCESS, CREATE_SUCCESS,
         DELETE_FAIL,
         DELETE_REQUEST,
         DELETE_SUCCESS,
         SINGLE_VIEW_FAIL,
         SINGLE_VIEW_REQUEST,
         SINGLE_VIEW_SUCCESS,
         STUDENT_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType";

const initiailState = {
    loding: false,
    error: "",
    all_students:[],
    createDetails:[],
    singleView:[],
    delete:[],
    update:[]
    
  };


const CreateReducer =(state=initiailState,action)=>{
    switch(action.type){
      
//--------------------create----------------------------------
   
      case CREATE_REQUEST:
        return{
          ...state,
          loading:true
        }
   
      case CREATE_SUCCESS:
        return{
          ...state,
          loading:false,
          createDetails:action.payload,
          error:''
        }

        
      case CREATE_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }
        
        
          
//--------------------------all student-----------------------------

        case STUDENT_REQUEST:
          return{
            ...state,
            loading:true
          }

        case STUDENT_SUCCESS:
          return{
            ...state,
            loading:false,
            all_students:action.payload,
            error:''
          }

          
        case STUDENT_FAIL:
          return{
            ...state,
            loading:false,
            error: action.payload,
          }

//-------------------------single view-------------------

        case SINGLE_VIEW_REQUEST:
          return{
            ...state,
            loading:true
          }

        case SINGLE_VIEW_SUCCESS:
          return{

            ...state,
            loading:false,
            singleView:action.payload,
            error:''
          }

          
        case SINGLE_VIEW_FAIL:
          return{
            ...state,
            loading:false,
            error: action.payload,
          }

//----------------------delete----------------------------

          case DELETE_REQUEST:
            return{
              ...state,
              loading:true
            }

          case DELETE_SUCCESS:
            return{

              ...state,
              loading:false,
              delete:action.payload,
              error:''
            }

            
          case DELETE_FAIL:
            return{
              ...state,
              loading:false,
              error: action.payload,
            }

//----------------------update student-------------------

          case UPDATE_REQUEST:
            return{
              ...state,
              loading:true
            }

          case UPDATE_SUCCESS:
            return{

              ...state,
              loading:false,
              delete:action.payload,
              error:''
            }

            
          case UPDATE_FAIL:
            return{
              ...state,
              loading:false,
              error: action.payload,
            }

//------------------create student course----------------

          case CREATE_STUDENT_COURSE_REQUEST:
            return{
              ...state,
              loading:true
            }

          case CREATE_STUDENT_COURSE_SUCCESS:
            return{

              ...state,
              loading:false,
              delete:action.payload,
              error:''
            }

            
          case CREATE_STUDENT_COURSE_FAIL:
            return{
              ...state,
              loading:false,
              error: action.payload,
            }


                default:
                return state;
            }
              
          }

  export default CreateReducer