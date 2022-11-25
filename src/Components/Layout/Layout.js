import React from 'react'
import {useLocation} from 'react-router-dom'
import Dashheader from '../Dashheader/Dashheader';
import Register from '../Register/Register';
import Sidebar from '../Sidebar/Sidebar';

function Layout({children}) {
  return (
    <div>
        <Dashheader/>
        <div style={{display:'flex'}} >
            <Sidebar/>
            
            <div className='w-100'>{children}</div>
            
        </div>
    </div>
  )
}

export default Layout
