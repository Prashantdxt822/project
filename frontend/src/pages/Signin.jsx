import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = ({text}) => {
  const navigate=useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div className='bg-slate-300 h-screen flex flex-col justify-center items-center'>
    <div className='font-bold text-4xl pt-6 p-2 text-center uppercase'  >{text}</div>
      <div className='rounded-xl bg-white w-[30%]  p-2 h-[52%] px-4'>
          <Heading label= "Sign In"/>
          <SubHeading label="Enter your credentails to sign in the account"/>
          <InputBox onChange={(e)=>setUsername(e.target.value)}  label={"User Name"} placeholder={"prashant@gmail.com"}/>
          <InputBox  onChange={(e)=>setPassword(e.target.value)} label={"Password"} placeholder={""}/>
          <Button onPress={async()=>{
            try{
              
            console.log(username)
            console.log(password)
            const response=await axios.post(`http://localhost:3000/api/v1/${text}/signin`,{
              username,
              password
            })
            console.log(response);
            localStorage.setItem("token",response.data.token);
            navigate(`/${text}/dashboard?id=${response.data.user._id}`); 
            }catch(err){
                console.log(err);
            }
          }}  label={"Sign In"}/>
          <BottomWarning label={"Don't have an account?"} buttonText={" Sign Up"} to={ "/signup"}/>
      </div>
    </div>
  )
}

export default Signin