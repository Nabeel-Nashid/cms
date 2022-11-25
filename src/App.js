import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Allcourses from './Components/Allcourses/Allcourses';
import Allstudents from './Components/Allstudents/Allstudents';
import Certificate from './Components/Certificate/Certificate';
import Coursecategory from './Components/Coursecategory/Coursecategory';
import CourseSingleView from './Components/CourseSingleView/CourseSingleView';
import Create from './Components/Create/Create';
import Createcourse from './Components/Createcourse/Createcourse';
import Createcoursecategory from './Components/Createcoursecategory/Createcoursecategory';
import Createstudentcourse from './Components/Createstudentcourse/Createstudentcourse';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Studentcourse from './Components/Studentcourse/Studentcourse';
import Studentview from './Components/Studentview/Studentview';
import Update from './Components/Update/Update';
import Updatecourse from './Components/Updatecourse.js/Updatecourse';
import Updatecoursecategory from './Components/Updatecoursecategory/Updatecoursecategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/register' element={<Register/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/allstudents' element={<Allstudents/>}/>
        <Route path='/update/:id' element={<Update/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/student/:id' element={<Studentview/>}/>
        <Route path='/studentcourse' element={<Studentcourse/>}/>
        <Route path='/allcourses' element={<Allcourses/>}/>
        <Route path='/createcourse' element={<Createcourse/>}/>
        <Route path='/upadatecourse/:id' element={<Updatecourse/>}/>
        <Route path='/coursecategory' element={<Coursecategory/>}/>
        <Route path='/createcoursecategory' element={<Createcoursecategory/>}/>
        <Route path='/updatecoursecategory/:id' element={<Updatecoursecategory/>}/>
        {/* <Route path='/courseSingleView' element={<CourseSingleView/>}/> */}
        <Route path='/createstudentcourse' element={<Createstudentcourse/>}/>
        <Route path='/certificate/:id' element={<Certificate/>}/>



      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
