import { combineReducers } from "redux"
import LoginReducer from "../Login/LoginReducer"
import ProfileReducer from "../Login/ProfileReducer"
import CreateReducer from "../Students/CreateReducer"
import CourseCategory from '../CourseCategory/CourseCategory'
   
const rootReducer = combineReducers({
LoginReducer,ProfileReducer,CreateReducer,CourseCategory
})

export default rootReducer