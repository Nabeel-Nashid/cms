import React from 'react'
import { Container } from 'react-bootstrap'
import './Sidebar.css'
import { BiHomeCircle } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";
import { BsMenuUp } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar-main'>
        <Container>
            <div className='sidebar-top'>
                <div className='sidebar-icon'>
                <BiHomeCircle/>
                </div>
                <div className='sidebar-name'>
                <Link to={'/dash'} className='link'>
                Dashboard
                </Link>
                </div>
            </div>

            <div className='sidebar-bottom'>
                <div className='sidebar-icon'>
                <RiAccountCircleLine/>
                </div>
                <div className='sidebar-name'>
                Student
                
                <li><Link to={'/allstudents'} className='link'>All Students</Link></li>
                
                <li><Link to={'/studentcourse'} className='link'>Student Course</Link></li>

                {/* <li><Link to={'/update'} className='link'>Update Students</Link></li> */}
                
                
                <li><Link to={'/create'} className='link'>Create Students</Link></li>
                
                </div>
            </div>

            <div className='sidebar-bottom'>
                <div className='sidebar-icon'>
                <BsMenuUp/>
                </div>
                <div className='sidebar-name'>
                Courses
                <li><Link to={'/allcourses'} className='link'>All Courses</Link></li>
                
                <li><Link to={'/createcourse'} className='link'>Create Courses</Link></li>
                
                
                {/* <li><Link to={'/upadatecourse'} className='link'>Update Courses</Link></li> */}
                
                </div>
            </div>

            <div className='sidebar-bottom'>
                <div className='sidebar-icon'>
                <MdSupervisorAccount/>
                </div>
                <div className='sidebar-name'>
                Courses Category
                
                <li><Link to={'/coursecategory'} className='link'>All Courses Category </Link></li>
                
                
                {/* <li><Link to={'/updatecoursecategory'} className='link'>Update Courses Category</Link></li> */}
                
                
                <li><Link to={'/createcoursecategory'} className='link'>Create Courses Category</Link></li>
                
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Sidebar
