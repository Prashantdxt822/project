import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const Signin = () => {
  return (
    <div className='bg-slate-300 h-screen flex justify-center items-center'>

      <div className='rounded-xl bg-white w-[30%]  p-2 h-[52%] px-4'>
          <Heading label= "Sign In"/>
          <SubHeading label="Enter your credentails to sign in the account"/>
          <InputBox label={"User Name"} placeholder={"prashant@gmail.com"}/>
          <InputBox label={"Password"} placeholder={""}/>
          <Button label={"Sign In"}/>
          <BottomWarning label={"Don't have an account?"} buttonText={" Sign Up"} to={ "/signup"}/>
      </div>
    </div>
  )
}

export default Signin