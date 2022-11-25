import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Register.css'
function Register() {
  return (
    <div className='main-div'>
        <div className='sub-div'>
            <Card className='r-card shadow-lg p-3 mb-5 bg-white rounded' >
                <h3>EDISONVALLEY</h3>
                <h5 className='h5-login'>Register account</h5>
                <span className='box-name'>User Name</span>
                <input type={'text'} placeholder="User Name" className='type-box'/>
                <span className='box-name'>Password</span>
                <input type={'password'} placeholder="Password" className='type-box'/>
                <span className='text'>By registering you agree to the Skote <a href=''>Terms of User</a></span>
                <Button className='login-box'>Login</Button>
                <span className='text'>Already have an account ? 
                <Link to={'/login'}><a href=''> Login</a></Link>
                 </span>
                <footer>© 2020 Edisonvalley. Design & Develop by Osperb</footer>
            </Card>
        </div>  
    </div>
  )
}

export default Register
