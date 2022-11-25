import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutApi } from '../../Login/useApi';

import './Dashheader.css'
function Dashheader() {

    const navigate=useNavigate();
    const dispatch=useDispatch();

    const handleLogout=()=>{
        dispatch(logoutApi(navigate));
    }

    const {profileDetails} = useSelector((state)=>({
        profileDetails:state.ProfileReducer.profileDetails
      }))

  return (
    <div className='dash-header'>
        {/* <Container> */}
            <div className='header-right'>
                <h5>Edisonvalley</h5>
            </div>

            
                <div className='header-left'>
                    <div>
                <a  className='three-dot'><VscThreeBars/></a>
                <input placeholder='Search....' className='search'></input>
                </div>
                
                <Dropdown>
                    
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {profileDetails.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
            </div>
        {/* </Container> */}
    </div>
  )
}

export default Dashheader
