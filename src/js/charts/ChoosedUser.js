import { useState } from "react";
import React from 'react'
import BarChart from './BarChart'
import { UserData } from "../Data";

function ChoosedUser() {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const handleSetUserData = (event) => {
    event.preventDefault();

    if(inputOne && inputTwo){

      setUserData({
        labels: UserData.
          filter(data => (data.name === inputOne || data.name === inputTwo))
          .map(data => data.name),
        datasets:[
          {
            label: "",
            data: UserData.
              filter(data => (data.name === inputOne || data.name === inputTwo))
              .map(data => data.workinghours*4),
            backgroundColor: [
              "#33BBFF",
              "#43BEFC",
            ],
            borderColor: "black",
            borderWidth: 2,    
          },
          {
            label: "",
            data: UserData.
              filter(data => (data.name === inputOne || data.name === inputTwo))
              .map(data => data.realworkhours),
            backgroundColor: [
              "#DA7C50",
              "#DA865E",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "",
            data: UserData.
              filter(data => (data.name === inputOne || data.name === inputTwo))
              .map(data => data.vacationhours),
            backgroundColor: [
              "#8ADA4F",
              "#A1D57B",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
          {
            label: "",
            data: UserData.
              filter(data => (data.name === inputOne || data.name === inputTwo))
              .map(data => data.sickhours),
            backgroundColor: [
              "#E1CA39",
              "#E3D058",
            ],
            borderColor: "black",
            borderWidth: 2,
          }
        ]
      })

    }
    else{
      alert("Fill all the fields")
    }
  }

    const [userData, setUserData] = useState({
      labels: [],
      datasets: [
        {
          label: "",
          data: UserData.map((data) => data.workinghours*4),
          backgroundColor: [
            "#33BBFF",
            "#43BEFC",
            "#54C3FA",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "",
          data: UserData.map((data) => data.realworkhours),
          backgroundColor: [
            "#DA7C50",
            "#DA865E",
            "#DC9270",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });


    return (
      <form onSubmit={handleSetUserData}>
        <br></br>
        <input type="text" className="placeholder" placeholder="Choose first user to compare" onChange={(event) => setInputOne(event.target.value)}/>
        <br></br>
        <input type="text" className="placeholder" placeholder="Choose second user to compare" onChange={(event) => setInputTwo(event.target.value)}/>
        <br></br>
        <button className="smallbutton">Compare</button>
        <div style={{ width: 1200}}>
          <BarChart chartData={userData} />
        </div>
      </form>
    );
  }
  
  export default ChoosedUser;