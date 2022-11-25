import { axiosApi } from "../Store/api_methods";
import {createCourseCategorySuccess,createCourseCategoryRequest,createCourseCategoryFail, allCourseCategoryRequest, allCourseCategorySuccess, allCourseCategoryFail, courseSingleViewRequest, courseSingleViewSuccess, courseSingleViewFail, deleteCourseRequest, deleteCourseSuccess, deleteCourseFail, updateCourseCategoryRequest, updateCourseCategorySuccess, updateCourseCategoryFail, singleViewCourseRequest, singleViewCourseSuccess, singleViewCourseFail, createCourseRequest, createCourseSuccess, createCourseFail, allCourseRequest, allCourseSuccess, allCourseFail, courseDeleteRequest, courseDeleteSuccess, courseDeleteFail, updateCourseRequest, updateCourseSuccess, updateCourseFail, createStudentCourseRequest, createStudentCourseSuccess, createStudentCourseFail, studentCourseRequest, studentCourseSuccess, studentCourseFail, studentCourseDeleteRequest, studentCourseDeleteSuccess, studentCourseDeleteFail} from './action'

//---------------------create-----------------------------

export const createCourseCategoryApi = (input,navigate) => {
  return async (dispatch) => {
    dispatch(createCourseCategoryRequest(input));
    
    try {
      const user = await axiosApi.post(`/course/course_category/`,input);
      //  console.log(user);
      // console.log(input);
      
      dispatch(createCourseCategorySuccess(user));
      
      navigate("/coursecategory")
     
    } 
    
    catch (error) {
      console.log(error);
      dispatch(createCourseCategoryFail(error));
    }
  };
  };

//-------------------all course category----------------

export const allCourseCategoryApi = () => {
  return async (dispatch) => {
    dispatch(allCourseCategoryRequest());
    
    try {
      const user = await axiosApi.get(`/course/course_category/`);
      //  console.log(user);
      
      
      dispatch(allCourseCategorySuccess(user.data));
     
    } 
    
    catch (error) {
      console.log(error);
      dispatch(allCourseCategoryFail(error));
    }
  };
  };
  
//----------------delete all course-------------------

export const deleteCourseApi = (id) => {
  return async (dispatch) => {
    dispatch(deleteCourseRequest(id));
    
    try {
      const user = await axiosApi.delete(`/course/course_category/${id}`);
    
      console.log(user);
      
      dispatch(deleteCourseSuccess(user.data));

      try{
        const user=await axiosApi.get(`/course/course_category/`);
        if(user){
          dispatch(allCourseCategorySuccess(user.data));
        }
      }
      catch(error){
        console.log(error)
        dispatch(allCourseCategoryFail(error));
      }
      
    } 
  
    catch (error) {
      console.log(error);
      dispatch(deleteCourseFail(error));
    }
  };
  };

//-------------------------update course category------------------

export const updateCourseCategoryApi = (catId,navigate,data) => {
  return async (dispatch) => {
    dispatch(updateCourseCategoryRequest(catId));
    
    try {

      const user = await axiosApi.put(`/course/course_category/${catId}/`,data);
    
      console.log(user.data);
      
      dispatch(updateCourseCategorySuccess(user.data));
      navigate (`/coursecategory/`)
    } 
  
    catch (error) {
      console.log(error);
      dispatch(updateCourseCategoryFail(error));
    }
  };
  };

 //---------------------------student view course category----------------------

 export const studentViewCourseApi = (id) => {
  return async (dispatch) => {
    dispatch(singleViewCourseRequest());
    
    try {
      const user = await axiosApi.get(`/course/course_category/${id}`);
      console.log(user);
      
      dispatch(singleViewCourseSuccess(user.data));
    } 
  
    catch (error) {
      console.log(error);
      dispatch(singleViewCourseFail(error));
    }
  };
  };

  //------------------create course-------------------------

  export const createCourseApi = (input,navigate) => {
    return async (dispatch) => {
      dispatch(createCourseRequest(input));
      
      try {
        const user = await axiosApi.post('/course/course/',input);
        //  console.log(user);
        console.log(input);
        
        dispatch(createCourseSuccess(user));
        
        navigate("/allcourses")
       
      } 
      
      catch (error) {
        console.log(error);
        dispatch(createCourseFail(error));
      }
    };
    };
  
//-------------------all course----------------------

export const allCourseApi = () => {
  return async (dispatch) => {
    dispatch(allCourseRequest());
    
    try {
      const user = await axiosApi.get(`/course/course/`);
      //  console.log(user);
      
      
      dispatch(allCourseSuccess(user.data));
     
    } 
    
    catch (error) {
      console.log(error);
      dispatch(allCourseFail(error));
    }
  };
  };
  
  //-----------------course delete---------------------------

  export const courseDeleteApi = (id) => {
    return async (dispatch) => {
      dispatch(courseDeleteRequest(id));
      
      try {
        const user = await axiosApi.delete(`/course/course/${id}`);
      
        console.log(user);
        
        dispatch(courseDeleteSuccess(user.data));
        try {
          const user = await axiosApi.get(`/course/course/`);
          //  console.log(user);
          
          
          dispatch(allCourseSuccess(user.data));
         
        } 
        
        catch (error) {
          console.log(error);
          dispatch(allCourseFail(error));
        }
  
        
        
      } 
    
      catch (error) {
        console.log(error);
        dispatch(courseDeleteFail(error));
      }
    };
    };
  
  //------------------update course---------------------------

  export const updateCourseApi = (catId,navigate,data) => {
    return async (dispatch) => {
      dispatch(updateCourseRequest(catId));
      
      try {
  
        const user = await axiosApi.put(`/course/course/${catId}/`,data);
      
        console.log(user.data);
        
        dispatch(updateCourseSuccess(user.data));
        navigate (`/allcourses/`)
      } 
    
      catch (error) {
        console.log(error);
        dispatch(updateCourseFail(error));
      }
    };
    };
  
     //---------------------------single view course----------------------

     export const courseSingleViewApi = (id) => {
      return async (dispatch) => {
        dispatch(courseSingleViewRequest());
        
        try {
          const user = await axiosApi.get(`/course/course/${id}`);
          console.log(user);
          
          dispatch(courseSingleViewSuccess(user.data));
        } 
      
        catch (error) {
          console.log(error);
          dispatch(courseSingleViewFail(error));
        }
      };
      };
    
  //---------------------create student course---------------------

  export const createStudentCourseApi = (input,navigate) => {
    return async (dispatch) => {
      dispatch(createStudentCourseRequest(input));
      
      try {
        const user = await axiosApi.post(`/student/student_course/`,input);
        //  console.log(user);
        // console.log(input);
        
        dispatch(createStudentCourseSuccess(user));
        
        navigate("/studentcourse")
       
      } 
       
      catch (error) {
        console.log(error);
        dispatch(createStudentCourseFail(error));
      }
    };
    };

  //----------------------student course--------------------

  export const studentCourseApi = () => {
    return async (dispatch) => {
      dispatch(studentCourseRequest());
      
      try {
        const user = await axiosApi.get(`/student/student_course/`);
        //  console.log(user);
        
        
        dispatch(studentCourseSuccess(user.data));
       
      } 
      
      catch (error) {
        console.log(error);
        dispatch(studentCourseFail(error));
      }
    };
    };

      //------------------Student course delete--------------------


      export const studentCourseDeleteApi = (id) => {
        return async (dispatch) => {
          dispatch(studentCourseDeleteRequest(id));
          
          try {
            const user = await axiosApi.delete(`/student/student_course/${id}`);
          
            console.log(user);
            
            dispatch(studentCourseDeleteSuccess(user.data));
            
            try {
              const user = await axiosApi.get(`/student/student_course/`);
              //  console.log(user);
              
              
              dispatch(studentCourseSuccess(user.data));
             
            } 
            
            catch (error) {
              console.log(error);
              dispatch(studentCourseFail(error));
            }
            
            
          } 
        
          catch (error) {
            console.log(error);
            dispatch(studentCourseDeleteFail(error));
          }
        };
        };
      