import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'

const Signup = () => {
  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>

      <div className='rounded-xl bg-white w-[30%]  p-2 h-max px-4'>
          <Heading label= "Sign Up"/>
          <SubHeading label="Enter your information to create an account"/>
          <InputBox onChange={(e)=>setFirstName(e.target.value)} label={"First Name"} placeholder={"Prashant"}/>
          <InputBox onChange={(e)=>setLastName(e.target.value)}label={"Last Name"} placeholder={"Dixit"}/>
          <InputBox onChange={(e)=>setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@gmai.com"}/>
          <InputBox label={"Password"} onChange={(e)=>setPassword(e.target.value)} placeholder={""}/>
          <Button onPress={async()=>{
            const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token",response.data.token);
          }} label={"Sign Up"}/>
          <BottomWarning label={"Already have an account?"} buttonText={" Sign in"} to={ "/signin"}/>
      </div>
    </div>
  )
}

export default Signup