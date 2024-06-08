import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Profile = () => {
  const [searchParams] = useSearchParams();
  const user_id = searchParams.get("id");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [journeys, setAllJourneys] = useState([]);
  const [rides, setAllRides] = useState([]);
  const myMap = (new Map());
  const priceMap = (new Map());

  for (let ride of rides) {
    myMap.set(ride._id, ride.vehicle);
  }
  for (let ride of rides) {
    priceMap.set(ride._id, ride.price);
  }
//   const [myMap, setMyMap] = useState(new Map());

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/user/${user_id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setFirstName(res.data.user.firstName);
        setLastName(res.data.user.lastName);
      });

    axios
      .get(`http://localhost:3000/api/v1/user/journey/${user_id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setAllJourneys(res.data.allJourneys);
        console.log(journeys);
      });

    axios
      .get(`http://localhost:3000/api/v1/user/ride`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setAllRides(res.data.allRides);
        console.log("rides - ", rides);
        
        // setMyMap(myMap)
        console.log(myMap);
        // setAllJourneys(res.data.allJourneys)
        // console.log(journeys)
      });
  }, []);
  return (
    <div className="m-10 flex flex-col gap-4">
      <div>Profile </div>
      <div className=" bg-yellow-100 w-60 rounded md"><b>First Name:</b> {firstName}</div>
      <div className=" bg-pink-100 w-60 rounded md"><b>Last Name:</b> {lastName}</div>
      <Link to={`/edit/user?id=${user_id}`} className=" bg-green-100 w-10 font-semibold rounded md">edit</Link>
      <div className="text-center font-bold my-4">
        Previous Journeys booked by the user
      </div>
      <div>
        {journeys.map((journey) => {
          console.log("Journey:", journey);
          console.log("Ride ID:", journey.ride_id);
          console.log("Map Value:", myMap.get(journey.ride_id));

          return (
            <div key={journey._id} className="border-2 border-pink-100 rounded-xl my-4 flex justify-center items-center gap-20">
              <div >address- <span className="bg-blue-100">{journey.address}</span></div>
              <div> vehicle- <span className="bg-red-100">{myMap.get(journey.ride_id)}</span> </div>
              <div> price   -<span className="bg-green-100"> {priceMap.get(journey.ride_id)}</span> </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
