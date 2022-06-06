import React from 'react'
import WorkingHours from './charts/WorkingHours'
import Vacation from './charts/Vacation'
import {MainRender} from '../index.js'
import '../css/App.css'

function Charts() {
    return (
      <div className="container">
        <form onSubmit={MainRender}>
          <button>Back</button>
        </form>
        <div>
          <WorkingHours/>
          <br></br>
          <br></br>
          <br></br>
          <Vacation/>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
  
  export default Charts;