
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const UserDashboard = () => {
    const [searchParams]=useSearchParams();
  const id=searchParams.get("id");
  
    const [balance,setBalance]=useState(0);
    const [isLogin,setIsLogin]=useState(false);
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
      useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/${id}`,{
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
          }
        })
        .then((res)=>{
            
            setUser(res.data.user);
            setBalance(res.data.user.walletBalance.amount)
            console.log(user);
        })

        axios.get('http://localhost:3000/api/v1/user/ride',{
          headers:{
            Authorization:"Bearer "+localStorage.getItem("token")
          }
        })
        .then((res)=>{
          console.log(res.data)
          setAllRides(res.data.allRides);
        })
    },[]);
  return (
  <div>

        <div className='flex justify-between mx-10'>
            <Link>Profile - {user.firstName}</Link>
            <Link to={`/wallet/topup?id=${user._id}`}><button>wallet - ₹{balance}</button></Link>
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
                            <Link to={`/book/ride?ride_id=${ride._id}&user_id=${user._id}`} className='border-2 bg-red-100 rounded-md'>Book</Link>
                        </div>
                    ))
                }
            </div>
    </div>
    
  )
}

export default UserDashboard