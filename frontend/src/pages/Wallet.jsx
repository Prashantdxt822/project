import axios from 'axios';
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Wallet = () => {
    const [amount,setAmount]=useState(0);
    const [searchParams]=useSearchParams();
    const user_id=searchParams.get("id");
    
    const submitFn=async()=>{
       const res=await axios.put(`http://localhost:3000/api/v1/user/wallet/${user_id}`,{
            addAmount:amount
        },{
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
          }
        })
        .then(()=>{
          alert('wallet has been topped up!! you can book your rides')
        })
        .catch((err)=>{
            console.log(err.response.data)
            alert('wallet cannot be topped up! please try again after 24 hrs')
        })
        // console.log(res)
        
    }
  return (
    <div className='m-20 flex flex-col justify-center items-center  bg-blue-200 w-[60vw] h-[40vh]'>
        <h1 className='font-bold my-10 w-[50vw]'>Top- up your wallet</h1>
        <input onChange={(e)=>setAmount(e.target.value)} type='text' placeholder='Enter the amount' className='border-4 w-[50vw] my-4'/>
        <button onClick={submitFn} className='border-2 w-[50vw] bg-red-200 font-semibold rounded-md'>top-up</button>
    </div>
  )
}

export default Wallet