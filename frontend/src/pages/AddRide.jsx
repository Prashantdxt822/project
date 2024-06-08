import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const AddRide = () => {
    const [ride,setRide]=useState({});
    

    const submitFn=async()=>{
      axios.post(`http://localhost:3000/api/v1/admin/ride`,ride,{
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function(res){
          console.log(res);
          alert('ride added');
          // setRides(res.data.allRides);
      })
    }   
  return (
    <div className='m-10'>
        <div className='font-bold m-10'>Add a Ride</div>
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
        <div className='m-4 border-2 w-10 font-semibold bg-blue-100 rounded-md'>
          <button onClick={submitFn}>Add</button>

        </div>
    </div>
  )
}

export default AddRide