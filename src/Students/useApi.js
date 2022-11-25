import { axiosApi } from "../Store/api_methods";
import { createFail, createRequest, createStudentCourseFail, createStudentCourseRequest, createStudentCourseSuccess, createSuccess, deleteFail, deleteRequest, deleteSuccess, singleViewFail, singleViewRequest, singleViewSuccess, studentFail, studentRequest, studentSuccess, updateFail, updateRequest, updateSuccess } from "./action";

//-------------------create-----------------------------

export const createApi = (input,navigate) => {
  return async (dispatch) => {
    dispatch(createRequest(input));
    
    try {
      const user = await axiosApi.post('/student/student/',input);
      //  console.log(user);
      console.log(input);
      
      dispatch(createSuccess(user));
      
      navigate("/allstudents")
     
    } 
    
    catch (error) {
      console.log(error);
      dispatch(createFail(error));
    }
  };
  };

  //--------------------------all student--------------------

  export const studentApi = (page) => {
    return async (dispatch) => {
      dispatch(studentRequest());
      
      try {
        const user = await axiosApi.get(`/student/student/?page=${page?page:1}`);
        //  console.log(user);
        console.log(user);
        
        dispatch(studentSuccess(user.data));
      }
    
      catch (error) {
        console.log(error);
        dispatch(studentFail(error));
      }
    };
    };

    //---------------------------student view----------------------

    export const studentViewApi = (id) => {
      return async (dispatch) => {
        dispatch(singleViewRequest(id));
        
        try {
          const user = await axiosApi.get(`/student/student/${id}`);
        
          console.log(user);
          
          dispatch(singleViewSuccess(user.data));
        } 
      
        catch (error) {
          console.log(error);
          dispatch(singleViewFail(error));
        }
      };
      };

//--------------------------------delete---------------------------------

      export const deleteApi = (id,navigate) => {
        return async (dispatch) => {
          dispatch(deleteRequest(id));
          
          try {
            const user = await axiosApi.delete(`/student/student/${id}`);
          
            console.log(user);
            
            dispatch(deleteSuccess(user.data));
            navigate ('/allstudents')
          } 
        
          catch (error) {
            console.log(error);
            dispatch(deleteFail(error));
          }
        };
        };

//-----------------------update student-----------------

      export const updateApi = (catId,navigate,input) => {
        return async (dispatch) => {
          dispatch(updateRequest(catId));
          
          try {
            const user = await axiosApi.put(`/student/student/${catId}/`,input);
          
            console.log(user);
            
            dispatch(updateSuccess(user.data));
            navigate (`/student/${catId}`)
          } 
        
          catch (error) {
            console.log(error);
            dispatch(updateFail(error));
          }
        };
        };

//------------------create student course-------------------

        export const createStudentCourseApi = (catId,navigate,input) => {
          return async (dispatch) => {
            dispatch(createStudentCourseRequest(catId));
            
            try {
              const user = await axiosApi.put(`/student/student/${catId}/`,input);
            
              console.log(user);
              
              dispatch(createStudentCourseSuccess(user.data));
              navigate (`/student/${catId}`)
            } 
          
            catch (error) {
              console.log(error);
              dispatch(createStudentCourseFail(error));
            }
          };
          };
