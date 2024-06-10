import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const Ride = () => {
    const [searchParams]=useSearchParams();
    const ride_id=searchParams.get("ride_id");
    const [ride,setRide]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
      axios.get(`http://localhost:3000/api/v1/admin/ride/${ride_id}`,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function(res){
          console.log(res);
          setRide(res.data.ride);
          // setRides(res.data.allRides);
      })
    },[]);

    const submitFn=async()=>{
      axios.put(`http://localhost:3000/api/v1/admin/ride/${ride_id}`,ride,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function(res){
          console.log(res);
          alert('ride successfully edited!');
          navigate(`/admin/dashboard`)
          // setRides(res.data.allRides);
      })
    }
  return (
    <div className='m-10'>
        <div className='font-bold m-10'>Ride</div>
        <div className='m-4'>
          <div className='font-semibold '>Vehicle-</div>
          <input type='text' placeholder='vehicle' className='border-2 border-blue-100' value={ride.vehicle} onChange={(e)=>setRide({...ride,vehicle:e.target.value})}/>
        </div>
        <div className='m-4'>
          <div className='font-semibold '>Quantity-</div>
          <input type='text' placeholder='quantity' className='border-2 border-blue-100' value={ride.quantity} onChange={(e)=>setRide({...ride,quantity:e.target.value})}/>
        </div>
        <div className='m-4'>
          <div className='font-semibold '>Price (in Rs)-</div>
          <input type='text' placeholder='price' className='border-2 border-blue-100' value={ride.price} onChange={(e)=>setRide({...ride,price:e.target.value})}/>

        </div>
        <div className='m-4 border-2 w-16 font-semibold bg-blue-100 rounded-md'>
          <button onClick={submitFn}>Change</button>

        </div>
    </div>
  )
}

export default Ride;