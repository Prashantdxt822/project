import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const EditUser = () => {
  const [searchParams] = useSearchParams();
  const user_id = searchParams.get("id");
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:3000/api/v1/user/${user_id}`,{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(function(res){
        console.log(res);
        setUser(res.data.user);
        // setRides(res.data.allRides);
    })
  },[]);

  const submitFn=async()=>{
    axios.put(`http://localhost:3000/api/v1/user/${user_id}`,user,{
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
    .then(function(res){
        console.log(res);
        alert('user profile successfully edited!');
        navigate(`/user/dashboard?id=${user_id}`)
        // setRides(res.data.allRides);
    })
  }
  return (
    <div className="m-10">
      <div className="font-bold m-10">User Profile</div>
      <div className="m-4">
        <div className="font-semibold ">First Name-</div>
        <input
          type="text"
          placeholder="first name"
          className="border-2 border-blue-100"
          value={user.firstName}
          onChange={(e) => setUser({ ...user, firstName: e.target.value })}
        />
      </div>
      <div className="m-4">
        <div className="font-semibold ">Last Name-</div>
        <input
          type="text"
          placeholder="last name"
          className="border-2 border-blue-100"
          value={user.lastName}
          onChange={(e) => setUser({ ...user, lastName: e.target.value })}
        />
      </div>
      <div className="m-4">
        <div className="font-semibold ">Username-</div>
        <input
          type="text"
          placeholder="username"
          className="border-2 border-blue-100"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
      </div>
      <div className="m-4">
        <div className="font-semibold ">Password-</div>
        <input
          type="text"
          placeholder="password"
          className="border-2 border-blue-100"
          value={user.password  }
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <div className="m-4 border-2 w-16 font-semibold bg-blue-100 rounded-md">
        <button onClick ={submitFn}>Change</button>
      </div>
    </div>
  );
};

export default EditUser;
