import { CREATE_FAIL, CREATE_REQUEST, CREATE_STUDENT_COURSE_FAIL, CREATE_STUDENT_COURSE_REQUEST, CREATE_STUDENT_COURSE_SUCCESS, CREATE_SUCCESS,
         DELETE_FAIL,
         DELETE_REQUEST,
         DELETE_SUCCESS,
         SINGLE_VIEW_FAIL, SINGLE_VIEW_REQUEST, SINGLE_VIEW_SUCCESS,
         STUDENT_FAIL, STUDENT_REQUEST, STUDENT_SUCCESS, UPDATE_FAIL, UPDATE_REQUEST, UPDATE_SUCCESS } from "./actionType"

//------------------------------create-----------------------------

export const createRequest=(input)=>
    ({
        type:CREATE_REQUEST,
        payload:input
    })

    export const createSuccess=(createDetails)=>
    ({
        type:CREATE_SUCCESS,
        payload:createDetails
    })

    export const createFail=(error)=>
    ({
        type:CREATE_FAIL,
        payload:error
    })

    //-------------------------------all student------------------

    export const studentRequest=(input)=>
    ({
        type:STUDENT_REQUEST,
        payload:''
    })

    export const studentSuccess=(user)=>
    ({
        type:STUDENT_SUCCESS,
        payload:user
    })

    export const studentFail=(error)=>
    ({
        type:STUDENT_FAIL,
        payload:error
    })

    //------------------------------single view-----------------------

    export const singleViewRequest=()=>
    ({
        type:SINGLE_VIEW_REQUEST,
        payload:''
    })

    export const singleViewSuccess=(singleView)=>
    ({
        type:SINGLE_VIEW_SUCCESS,
        payload:singleView
    })

    export const singleViewFail=(error)=>
    ({
        type:SINGLE_VIEW_FAIL,
        payload:error
    })

    //-----------------------delete------------------

    export const deleteRequest=()=>
    ({
        type:DELETE_REQUEST,
        payload:''
    })

    export const deleteSuccess=()=>
    ({
        type:DELETE_SUCCESS,
        payload:''
    })

    export const deleteFail=(error)=>
    ({
        type:DELETE_FAIL,
        payload:error
    })

    //----------------------update student--------------

    export const updateRequest=()=>
    ({
        type:UPDATE_REQUEST,
        payload:''
    })

    export const updateSuccess=()=>
    ({
        type:UPDATE_SUCCESS,
        payload:''
    })

    export const updateFail=(error)=>
    ({
        type:UPDATE_FAIL,
        payload:error
    })

    //------------------create student course-------------

    export const createStudentCourseRequest=()=>
    ({
        type:CREATE_STUDENT_COURSE_REQUEST,
        payload:''
    })

    export const createStudentCourseSuccess=()=>
    ({
        type:CREATE_STUDENT_COURSE_SUCCESS,
        payload:''
    })

    export const createStudentCourseFail=(error)=>
    ({
        type:CREATE_STUDENT_COURSE_FAIL,
        payload:error
    })