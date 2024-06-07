
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
    const [balance,setBalance]=useState(0);
    const [user,setUser]=useState("");
    const [allRides,setAllRides]=useState([{
        vehicle:"bike",
        quantity:10,
        price:300
      },{
        vehicle:"bike",
        quantity:10,
        price:300
      }]);
  return (
    <div>
        <div className='flex justify-between mx-10'>
            <Link>Profile</Link>
            <div>wallet - ₹{balance}</div>
        </div>
            <div>
                {
                        allRides.map((ride)=>(
                        <div className='flex my-5 font-medium justify-center gap-40' key={ride._id}>
                            <span>
                            <span className='font-light mx-2'>type: </span>
                            {ride.vehicle}
                            </span>
                            <span> 
                            <span className='font-light mx-2'>units:  </span>
                            {ride.quantity}
                            </span>
                            <span><span className='font-light mx-2'>price:  </span> {ride.price}</span>
                            <Link to={`/book/ride?ride_id=${ride._id}&user_id=${user._id}`} className='border-2 border-green-100 rounded-md'>Book</Link>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default UserDashboard