import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

import {RxCross2} from 'react-icons/rx'
// import { Alert} from '@mui/material'
import './Login.css'

import supabase from '../../supabase/supabase'
import { setUser} from "../../slice/Userslices"

const Login = ({ isOpen, setOpen }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError]=useState('')

    const [loginType, setLoginType] = useState(true)

    const dispatch = useDispatch()

    const signup =async ()=>{
        const {data,error} = await supabase.auth.signUp({
            email,
            password
        })
      
        if(data.user){
            alert("Accont created")
            return
        }else if(error){
              setError(error.message)
        }
    }

    const login =async()=>{
        var {data,error} = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(data.user){
              console.log(data.user);
              dispatch(setUser(data.user))
        }else if(error){

            setError(error.message)
        }
       
    }
    return isOpen ? (
        <div className='overlay'>
            <div className='LoginModel'>
                <div className='left'>
                    <div className='left_container'>
                        <p className='Login_titls'>Login</p>
                        <p className='Login_des'>
                            Get start to your Wishlist and Recommendations

                        </p>

                    </div>

                </div>
                <div className='right'>
               
                    {error.message? <span className='error'>{error.message}</span>:""}
                    <input
                        type='email'
                        className='Login_input'
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type='password'
                        className='Login_input'
                        placeholder="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='termse'>
                        By continuing you agree to Flipkart's {" "}
                        <span style={{ color: "blue" }}> Terms of Use</span> and
                        <span style={{ color: "blue" }}> Privecy Policy</span>{" "}

                    </p>
                    {
                        loginType ? (
                            <button className='login_btn' onClick={login} > Login</button>
                        ) : (
                            <button className='login_btn' onClick={signup} >Signup</button>
                        )}
                    {
                        loginType ? (
                            <p className="Login_signup" onClick={() => setLoginType(false)}>
                                New to Flipkart Create an account </p>
                           
                        ) : (
                            <p className="Login_signup" onClick={() => setLoginType(true)}>
                               Already an user? Login an account  </p>
                           
                        )
                    }
                </div>
                <div className='close' onClick={()=> setOpen(false)}>
                    <RxCross2/>  
                </div>
            </div>
        </div>
    ) : (
        ""
    )
}

export default Login
