import { useState } from "react";
import React from 'react'
import BarChart from './BarChart'
import { UserData } from "../Data";

function Vacation() {
    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.name),
      datasets: [
        {
          label: "",
          data: UserData.map((data) => data.vacationhours),
          backgroundColor: [
            "#8ADA4F",
            "#A1D57B",
            "#89B468",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
        {
          label: "",
          data: UserData.map((data) => data.sickhours),
          backgroundColor: [
            "#E1CA39",
            "#E3D058",
            "#E7D981",
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
  
  export default Vacation;