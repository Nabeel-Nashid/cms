import { ALL_COURSE_CATEGORY_FAIL, ALL_COURSE_CATEGORY_REQUEST, ALL_COURSE_CATEGORY_SUCCESS, ALL_COURSE_FAIL, ALL_COURSE_REQUEST, ALL_COURSE_SUCCESS, COURSE_SINGLE_VIEW_FAIL, COURSE_SINGLE_VIEW_REQUEST, COURSE_SINGLE_VIEW_SUCCESS, CREATE_COURSE_CATEGORY_FAIL, CREATE_COURSE_CATEGORY_REQUEST, CREATE_COURSE_CATEGORY_SUCCESS, CREATE_COURSE_FAIL, CREATE_COURSE_REQUEST, CREATE_COURSE_SUCCESS, CREATE_STUDENT_COURSE_FAIL, CREATE_STUDENT_COURSE_REQUEST, CREATE_STUDENT_COURSE_SUCCESS, DELETE_ALL_FAIL, DELETE_ALL_REQUEST, DELETE_ALL_SUCCESS, DELETE_COURSE_FAIL, DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, SINGLE_VIEW_COURSE_FAIL, SINGLE_VIEW_COURSE_REQUEST, SINGLE_VIEW_COURSE_SUCCESS, STUDENT_COURSE_DELETE_FAIL, STUDENT_COURSE_DELETE_REQUEST, STUDENT_COURSE_DELETE_SUCCESS, STUDENT_COURSE_FAIL, STUDENT_COURSE_REQUEST, STUDENT_COURSE_SUCCESS, UPDATE_COURSE_CATEGORY_FAIL, UPDATE_COURSE_CATEGORY_REQUEST, UPDATE_COURSE_CATEGORY_SUCCESS, UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS } from "./actionType"

//------------------------------create-----------------------------

export const createCourseCategoryRequest=(input)=>
    ({
        type:CREATE_COURSE_CATEGORY_REQUEST,
        payload:input
    })

    export const createCourseCategorySuccess=(userDetails)=>
    ({
        type:CREATE_COURSE_CATEGORY_SUCCESS,
        payload:userDetails
    })

    export const createCourseCategoryFail=(error)=>
    ({
        type:CREATE_COURSE_CATEGORY_FAIL,
        payload:error
    })

//------------------all course category---------------------

export const allCourseCategoryRequest=()=>
    ({
        type:ALL_COURSE_CATEGORY_REQUEST,
        payload:''
    })

    export const allCourseCategorySuccess=(nabeel)=>
    ({
        type:ALL_COURSE_CATEGORY_SUCCESS,
        payload:nabeel
    })

    export const allCourseCategoryFail=(error)=>
    ({
        type:ALL_COURSE_CATEGORY_FAIL,
        payload:error
    })


    //------------------delete all course------------------------------

    export const deleteCourseRequest=()=>
    ({
        type:DELETE_ALL_REQUEST,
        payload:''
    })

    export const deleteCourseSuccess=()=>
    ({
        type:DELETE_ALL_SUCCESS,
        payload:''
    })

    export const deleteCourseFail=(error)=>
    ({
        type:DELETE_ALL_FAIL,
        payload:error
    })

    //------------------update course category-------------------------

    export const updateCourseCategoryRequest=()=>
    ({
        type:UPDATE_COURSE_CATEGORY_REQUEST,
        payload:''
    })

    export const updateCourseCategorySuccess=(updateCourseCategory,catId)=>
    ({
        type:UPDATE_COURSE_CATEGORY_SUCCESS,
        payload:updateCourseCategory,catId
    })

    export const updateCourseCategoryFail=(error)=>
    ({
        type:UPDATE_COURSE_CATEGORY_FAIL,
        payload:error
    })

    //------------------------------single view category-----------------------

    export const singleViewCourseRequest=()=>
    ({
        type:SINGLE_VIEW_COURSE_REQUEST,
        payload:''
    })

    export const singleViewCourseSuccess=(singleViewCategory)=>
    ({
        type:SINGLE_VIEW_COURSE_SUCCESS,
        payload:singleViewCategory
    })

    export const singleViewCourseFail=(error)=>
    ({
        type:SINGLE_VIEW_COURSE_FAIL,
        payload:error
    })

    //------------------------------create course -----------------------------

    export const createCourseRequest=(input)=>
    ({
        type:CREATE_COURSE_REQUEST,
        payload:input
    })

    export const createCourseSuccess=(createCourseDetails)=>
    ({
        type:CREATE_COURSE_SUCCESS,
        payload:createCourseDetails
    })

    export const createCourseFail=(error)=>
    ({
        type:CREATE_COURSE_FAIL,
        payload:error
    })

    //-------------------all course------------------------

    export const allCourseRequest=()=>
    ({
        type:ALL_COURSE_REQUEST,
        payload:''
    })

    export const allCourseSuccess=(allCourse)=>
    ({
        type:ALL_COURSE_SUCCESS,
        payload:allCourse
    })

    export const allCourseFail=(error)=>
    ({
        type:ALL_COURSE_FAIL,
        payload:error
    })

//-----------------course delete---------------------------

export const courseDeleteRequest=()=>
    ({
        type:DELETE_COURSE_REQUEST,
        payload:''
    })

    export const courseDeleteSuccess=()=>
    ({
        type:DELETE_COURSE_SUCCESS,
        payload:''
    })

    export const courseDeleteFail=(error)=>
    ({
        type:DELETE_COURSE_FAIL,
        payload:error
    })

    //------------------update course---------------------------

    export const updateCourseRequest=()=>
    ({
        type:UPDATE_COURSE_REQUEST,
        payload:''
    })

    export const updateCourseSuccess=(updateCourse,catId)=>
    ({
        type:UPDATE_COURSE_SUCCESS,
        payload:updateCourse,catId
    })

    export const updateCourseFail=(error)=>
    ({
        type:UPDATE_COURSE_FAIL,
        payload:error
    })

    //----------------single view course---------------------

    export const courseSingleViewRequest=()=>
    ({
        type:COURSE_SINGLE_VIEW_REQUEST,
        payload:''
    })

    export const courseSingleViewSuccess=(singleViewCourse)=>
    ({
        type:COURSE_SINGLE_VIEW_SUCCESS,
        payload:singleViewCourse
    })

    export const courseSingleViewFail=(error)=>
    ({
        type:COURSE_SINGLE_VIEW_FAIL,
        payload:error
    })

    //-------------------create student course-------------------

    export const createStudentCourseRequest=(input)=>
    ({
        type:CREATE_STUDENT_COURSE_REQUEST,
        payload:input
    })

    export const createStudentCourseSuccess=(createStudentCourse)=>
    ({
        type:CREATE_STUDENT_COURSE_SUCCESS,
        payload:createStudentCourse
    })

    export const createStudentCourseFail=(error)=>
    ({
        type:CREATE_STUDENT_COURSE_FAIL,
        payload:error
    })

    //------------------student course---------------------

    export const studentCourseRequest=()=>
    ({
        type:STUDENT_COURSE_REQUEST,
        payload:''
    })

    export const studentCourseSuccess=(studentCourse)=>
    ({
        type:STUDENT_COURSE_SUCCESS,
        payload:studentCourse
    })

    export const studentCourseFail=(error)=>
    ({
        type:STUDENT_COURSE_FAIL,
        payload:error
    })

    //------------------Student course delete--------------------

    export const studentCourseDeleteRequest=()=>
    ({
        type:STUDENT_COURSE_DELETE_REQUEST,
        payload:''
    })

    export const studentCourseDeleteSuccess=()=>
    ({
        type:STUDENT_COURSE_DELETE_SUCCESS,
        payload:''
    })

    export const studentCourseDeleteFail=(error)=>
    ({
        type:STUDENT_COURSE_DELETE_FAIL,
        payload:error
    })