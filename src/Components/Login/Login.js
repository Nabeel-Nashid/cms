import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import './Login.css';
import { loginApi } from '../../Login/useApi';

const Login =()=> {
  const dispatch = useDispatch();
  const navigate =useNavigate()

    // const { loginError, loading } = useSelector((state) => ({
    //       loginError: state.error,
    //       loading: state.loading,
    // }));

    


    // const { userDetails ,error,loding} = useSelector((state) => ({
    //   userDetails: state.LoginReducer.userDetails,
    //   error: state.LoginReducer.error,
    //   loding: state.LoginReducer.loding,
    // }));

    const [input, setInput] = useState({username:"",password:""})

    const Handle = (e) => {
      const Data= {...input}
      Data[e.target.name]= e.target.value
      setInput(Data)
      
     }
    
    const handleSubmitLogin=(e)=>{
        // dispatch(loginApi(input));
        e.preventDefault()
        dispatch(loginApi(input,navigate));
     }
  return (

    <div className='main-div'>
        <div className='sub-div'>
            <Card className='l-card shadow-lg p-3 mb-5 bg-white rounded' style={{width:'100%'}}>
                <form  onSubmit={(e) => handleSubmitLogin(e)}>
                  <h3>EDISONVALLEY</h3>
                  <h5 className='h5-login'>Login</h5>
                  <span className='box-name'>User Name</span><br/>
                  <input type={'text'} placeholder="User Name" name='username' className='type-box' onChange={(e) => Handle(e)}/><br/>
                  <span className='box-name'>Password</span><br/>
                  <input type={'password'} placeholder="Password" name='password' className='type-box' onChange={(e) => Handle(e)}/><br/>
                  <Button className='login-box' type="submit">Login</Button><br/>
                  <span className='text'>You don t have an account ? 
                  <Link to={'/register'}><a href=''> Register</a></Link>
                  </span>
                  <footer>© 2020 Edisonvalley. Design & Develop by Osperb</footer>
                </form>

            </Card>
        </div>  
    </div>
  )
}

export default Login
