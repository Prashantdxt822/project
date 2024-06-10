import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const Journey = () => {
  const [searchParams]=useSearchParams();
  const ride_id=searchParams.get("ride_id");
  const user_id=searchParams.get("user_id");
  const [address,setAddress]=useState("");
  const navigate=useNavigate();
  const callApi=()=>{
    axios.get(`https://api.postalpincode.in/pincode/${searchValue}`)
    .then((res)=>{
      console.log(res)
      setOffices(res.data[0]["PostOffice"]);
    })
  }

  const submitFn=async()=>{
    try {
      
      const res=await axios.post(`http://localhost:3000/api/v1/user/journey/${user_id}`,{
        ride_id,
        address
      },{
        headers:{
          Authorization:"Bearer "+localStorage.getItem("token")
        }
      })
      console.log(res);
      alert('journey booked!');
      navigate(`/user/dashboard?id=${user_id}`)
    } catch (error) {
      console.log(error);
      alert('journey cannot be booked because of low wallet balance')
    }
  }
  const [selectedOffice,setSelectedOffice]=useState({});
  const [searchValue,setSearchValue]=useState(0);
  const [offices,setOffices]=useState([]);
  return (
    <div  className='font-semibold mt-6'>
        <h1 className='text-center'>Book the Journey</h1>
        <div className='flex flex-col align-center w-[20%] gap-6 m-10'>
            <input type='text' onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address' className='border-2 '/>
            <input onChange={(e)=>setSearchValue(e.target.value)}type='text' placeholder='Enter Pincode' className='border-2 '/>
            <button onClick={callApi} className='bg-green-100'>Search</button>
        </div>
        <div className='w-[40%] h-[50vh] m-10 overflow-y-scroll border-sky-300 border-2'>
            {
              offices.map((office)=>(
                <div key={office["Name"]} className='border-2 cursor-pointer '
                onClick={()=>setSelectedOffice(office)}>
                  <div>Name: <span className='text-blue-500 mx-4'>{office["Name"]}</span></div>
                  <div>Region: <span className='text-blue-500 mx-4'>{office["Region"]}</span></div>
                  <div>District: <span className='text-blue-500 mx-4'>{office["District"]}</span></div>
                  <div>Branch-type: <span className='text-blue-500 mx-2'>{office["BranchType"]}</span></div>
                  <div>State:  <span className='text-blue-500 mx-4'>{office["State"]}</span></div>
                </div>
              ))
            }
        </div>
        <div className='m-10'>

          Selected Post Office-<span className='text-green-500 mx-4'>{selectedOffice["Name"]}</span>
        </div>
        <div className='m-10'>
            <button onClick={submitFn} className='p-4 rounded-md border-4 border-slate-300'>Start Journey</button>
            
        </div>

    </div>  
  )
}

export default Journey