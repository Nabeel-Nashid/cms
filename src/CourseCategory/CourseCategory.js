import { ALL_COURSE_CATEGORY_FAIL, ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, COURSE_SINGLE_VIEW_FAIL, COURSE_SINGLE_VIEW_REQUEST, COURSE_SINGLE_VIEW_SUCCESS, CREATE_COURSE_CATEGORY_FAIL, CREATE_COURSE_CATEGORY_REQUEST, CREATE_COURSE_CATEGORY_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, CREATE_STUDENT_COURSE_FAIL, CREATE_STUDENT_COURSE_REQUEST, CREATE_STUDENT_COURSE_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, SINGLE_VIEW_COURSE_FAIL, SINGLE_VIEW_COURSE_REQUEST, SINGLE_VIEW_COURSE_SUCCESS, STUDENT_COURSE_DELETE_FAIL, STUDENT_COURSE_DELETE_REQUEST, STUDENT_COURSE_DELETE_SUCCESS, STUDENT_COURSE_FAIL, STUDENT_COURSE_REQUEST, STUDENT_COURSE_SUCCESS, UPDATE_COURSE_CATEGORY_FAIL, UPDATE_COURSE_CATEGORY_REQUEST, UPDATE_COURSE_CATEGORY_SUCCESS, UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS} from "./actionType";
import { DELETE_ALL_FAIL,DELETE_ALL_REQUEST,DELETE_ALL_SUCCESS } from "./actionType";

const initiailState = {
    loading: false,
    error: "",
    userDetails: [],
    nabeel:{},
    deleteCourse:[],
    updateCourseCategory:{},
    singleViewCategory:{},
    createCourseDetails:{},
    allCourse:{},
    courseDelete:[],
    updateCourse:{},
    singleViewCourse:{},
    createStudentCourse:{},
    studentCourse:{},
    studentCourseDelete:[]
  };


const CourseCategory =(state=initiailState,action)=>{
    switch(action.type){
      
//--------------------create course category------------------------------
   
      case CREATE_COURSE_CATEGORY_REQUEST:
        return{
          ...state,
          loading:true
        }
   
      case CREATE_COURSE_CATEGORY_SUCCESS:
        return{
          ...state,
          loading:false,
          userDetails:action.payload,
          error:''
        }

        
      case CREATE_COURSE_CATEGORY_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }

//-------------------all course category-------------------

case ALL_COURSE_CATEGORY_REQUEST:
        return{
          ...state,
          loading:true
        }
   
      case ALL_COURSE_CATEGORY_SUCCESS:
        return{
          ...state,
          loading:false,
          nabeel:action.payload,
          error:''
        }

        
      case ALL_COURSE_CATEGORY_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }



//----------------delete all course-------------------

case DELETE_ALL_REQUEST:
  return{
    ...state,
    loading:true
  }

case DELETE_ALL_SUCCESS:
  return{

    ...state,
    loading:false,
    delete:action.payload,
    error:''
  }

  
case DELETE_ALL_FAIL:
  return{
    ...state,
    loading:false,
    error: action.payload,
  }

  //-----------------update course category------------------------

  case UPDATE_COURSE_CATEGORY_REQUEST:
    return{
      ...state,
      loading:true
    }

  case UPDATE_COURSE_CATEGORY_SUCCESS:
    return{

      ...state,
      loading:false,
      updateCourseCategory:action.payload,
      error:''
    }

    
  case UPDATE_COURSE_CATEGORY_FAIL:
    return{
      ...state,
      loading:false,
      error: action.payload,
    }


//-------------------------single view-------------------

    case SINGLE_VIEW_COURSE_REQUEST:
      return{
        ...state,
        loading:true
      }

    case SINGLE_VIEW_COURSE_SUCCESS:
      return{

        ...state,
        loading:false,
        singleViewCategory:action.payload,
        error:''
      }

      
    case SINGLE_VIEW_COURSE_FAIL:
      return{
        ...state,
        loading:false,
        error: action.payload,
      }

//--------------------create course----------------------------------
   
case CREATE_COURSE_REQUEST:
  return{
    ...state,
    loading:true
  }

case CREATE_COURSE_SUCCESS:
  return{
    ...state,
    loading:false,
    createCourseDetails:action.payload,
    error:''
  }

  
case CREATE_COURSE_FAIL:
  return{
    ...state,
    loading:false,
    error: action.payload,
  }

//-----------------------all course----------------------------------

case ALL_COURSE_REQUEST:
        return{
          ...state,
          loading:true
        }
   
      case ALL_COURSE_SUCCESS:
        return{
          ...state,
          loading:false,
          allCourse:action.payload,
          error:''
        }

        
      case ALL_COURSE_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }

//-----------------course delete---------------------------

case DELETE_COURSE_REQUEST:
  return{
    ...state,
    loading:true
  }

case DELETE_COURSE_SUCCESS:
  return{

    ...state,
    loading:false,
    courseDelete:action.payload,
    error:''
  }

  
case DELETE_COURSE_FAIL:
  return{
    ...state,
    loading:false,
    error: action.payload,
  }


//------------------update course---------------------------


case UPDATE_COURSE_REQUEST:
    return{
      ...state,
      loading:true
    }

  case UPDATE_COURSE_SUCCESS:
    return{

      ...state,
      loading:false,
      updateCourse:action.payload,
      error:''
    }

    
  case UPDATE_COURSE_FAIL:
    return{
      ...state,
      loading:false,
      error: action.payload,
    }

   //----------------single view course---------------------


   case COURSE_SINGLE_VIEW_REQUEST:
      return{
        ...state,
        loading:true
      }

    case COURSE_SINGLE_VIEW_SUCCESS:
      return{

        ...state,
        loading:false,
        singleViewCourse:action.payload,
        error:''
      }

      
    case COURSE_SINGLE_VIEW_FAIL:
      return{
        ...state,
        loading:false,
        error: action.payload,
      }


  //---------------------create student course---------------------


  case CREATE_STUDENT_COURSE_REQUEST:
        return{
          ...state,
          loading:true
        }
   
      case CREATE_STUDENT_COURSE_SUCCESS:
        return{
          ...state,
          loading:false,
          createStudentCourse:action.payload,
          error:''
        }

        
      case CREATE_STUDENT_COURSE_FAIL:
        return{
          ...state,
          loading:false,
          error: action.payload,
        }

  //----------------------student course--------------------

  case STUDENT_COURSE_REQUEST:
    return{
      ...state,
      loading:true
    }

  case STUDENT_COURSE_SUCCESS:
    return{
      ...state,
      loading:false,
      studentCourse:action.payload,
      error:''
    }

    
  case STUDENT_COURSE_FAIL:
    return{
      ...state,
      loading:false,
      error: action.payload,
    }

  //------------------Student course delete--------------------

  case STUDENT_COURSE_DELETE_REQUEST:
  return{
    ...state,
    loading:true
  }

case STUDENT_COURSE_DELETE_SUCCESS:
  return{

    ...state,
    loading:false,
    studentCourseDelete:action.payload,
    error:''
  }

  
case STUDENT_COURSE_DELETE_FAIL:
  return{
    ...state,
    loading:false,
    error: action.payload,
  }



                default:
                return state;
            }
              
          }

  export default CourseCategory