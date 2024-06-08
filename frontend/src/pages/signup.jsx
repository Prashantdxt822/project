import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signup = ({text}) => {
  let url,signInUrl;
  if(text=="admin"){
    url="/signup";
    signInUrl="/admin/signin";
  }
  else {
    url="/admin/signup";
    signInUrl="/signin"
  }
    const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  return (
    
    <div className='bg-slate-300 h-screen flex flex-col justify-center items-center'>
      <div className='font-bold text-4xl pt-6 p-2 text-center uppercase'  >{text}</div>
      <div>Not an {text} ? <Link to={url}>Click here</Link></div>
      <div className='rounded-xl bg-white w-[30%]  p-2 h-max px-4'>
          
          <Heading label= "Sign Up"/>
          <SubHeading label="Enter your information to create an account"/>
          <InputBox onChange={(e)=>setFirstName(e.target.value)} label={"First Name"} placeholder={"Prashant"}/>
          <InputBox onChange={(e)=>setLastName(e.target.value)}label={"Last Name"} placeholder={"Dixit"}/>
          <InputBox onChange={(e)=>setUsername(e.target.value)} label={"Email"} placeholder={"johndoe@gmail.com"}/>
          <InputBox label={"Password"} onChange={(e)=>setPassword(e.target.value)} placeholder={""}/>
          <Button onPress={async()=>{
            const response=await axios.post(`http://localhost:3000/api/v1/${text}/signup`,{
              username,
              firstName,
              lastName,
              password
            });
            console.log(response);
            localStorage.setItem("token",response.data.token);
            navigate(`/${text}/dashboard?id=${response.data.user._id}`); 
          }} label={"Sign Up"}/>
          <BottomWarning label={"Already have an account?"} buttonText={" Sign in"} to={ signInUrl}/>
      </div>
    </div>
  )
}

export default Signup