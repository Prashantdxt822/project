import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const [rides,setRides]=useState([{
      vehicle:"bike",
      quantity:10,
      price:300
    },{
      vehicle:"bike",
      quantity:10,
      price:300
    }]);
    // useEffect(()=>{
    //     axios.get('http://localhost:3000/api/v1/admin/ride')
    //     .then(async function(res){
    //         console.log(res);
    //         setRides(res.data.allRides);
    //     })
    // },[])
  return (
    <div>
        <div className='flex justify-center gap-32' >
                <span> vehicle</span>
                <span> quantity</span>
                <span> price</span>
        </div>
        {
          rides.map((ride)=>(
            <div className='flex my-5 font-medium justify-center gap-40' key={ride._id}>
                <span> {ride.vehicle}</span>
                <span> {ride.quantity}</span>
                <span> {ride.price}</span>
                <Link to={`edit/ride/${ride._id}`} className='border-2 border-green-100 rounded-md'>edit</Link>
             </div>
          ))
        }
    </div>
  )
}

export default AdminDashboard