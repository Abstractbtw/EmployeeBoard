import { useState } from "react";
import React from 'react'
import BarChart from './BarChart'
import { UserData } from "../Data";

function WorkingHours() {
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.name),
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
      <div>
        <div style={{ width: 1200}}>
          <BarChart chartData={userData} />
        </div>
      </div>
    );
  }
  
  export default WorkingHours;