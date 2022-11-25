import React from 'react'
import Dashbanner from '../Dashbanner/Dashbanner'
import Dashheader from '../Dashheader/Dashheader'
import Layout from '../Layout/Layout'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'

function Dashboard() {
  return (
    <Layout>
      <Dashbanner/>
    </Layout>
  )
}

export default Dashboard
