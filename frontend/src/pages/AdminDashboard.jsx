import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [rides, setRides] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/admin/ride", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function (res) {
        console.log(res);
        setRides(res.data.allRides);
      });
  }, []);
  return (
    <div className="m-10">
      <h1 className="flex justify-center my-4">ALL RIDES</h1>
      {rides.map((ride) => (
        <div
          className="flex my-5 font-medium justify-center gap-40"
          key={ride._id}
        >
          <span>
            <span className="font-light mx-2">type: </span>
            {ride.vehicle}
          </span>
          <span>
            <span className="font-light mx-2">units: </span>
            {ride.quantity}
          </span>
          <span>
            <span className="font-light mx-2">price: </span> {ride.price}
          </span>
          <Link
            to={`/edit/ride?ride_id=${ride._id}`}
            className="border-2 bg-blue-100 rounded-md"
          >
            edit
          </Link>
          <button
            className="border-2 bg-red-100 rounded-md"
            onClick={() => {
              axios.delete(`http://localhost:3000/api/v1/admin/ride/${ride._id}`, {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }).then((res) => {
                  console.log(res);
                  alert("ride succesfully deleted!");
                  setRides(res.data.allRides);
                });
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <div className="text-center">
        <Link to={`/add/ride`}>
          <button className="border-2 rounded-md bg-yellow-100">
            Add a ride
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
