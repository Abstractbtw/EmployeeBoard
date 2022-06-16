import React from 'react'
import WorkingHours from './charts/WorkingHours'
import Vacation from './charts/Vacation'
import ChoosedUser from './charts/ChoosedUser'
import {MainRender} from '../index.js'
import {renderBoard} from '../index.js'
import '../css/App.css'

const Charts = (event) => {
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
              <td>
                <form onSubmit={MainRender}>
                <button className='defaultbutton'>Back</button>
                </form>
              </td>
              <td>
                <form onSubmit={renderBoard}>
                <button className='defaultbutton'>Users information</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <h1>Statistics</h1>
        <div className='line'></div>
        <br></br>
        <h1>Work hours</h1>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>
                <div className='permonth'></div>
              </td>
              <td>
                <a>Working hours per month</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className='realwork'></div>
              </td>
              <td>
                <a>Real work hours</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='tableline'></div>
        <br></br>
        <div>
          <WorkingHours/>
        </div>
        <div className='line'></div>
        <br></br>
        <h1>Off work hours</h1>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>
                <div className='vacationhrs'></div>
              </td>
              <td>
                <a>Vacation hours per month</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className='sickhrs'></div>
              </td>
              <td>
                <a>Sick hours per month</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='tableline'></div>
        <br></br>
        <div>
          <Vacation/>
          <br></br>
          <br></br>
        </div>
        <div className='line'></div>
        <br></br>
        <h1>Compare users</h1>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td>
                <div className='permonth'></div>
              </td>
              <td>
                <a>Working hours per month</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className='realwork'></div>
              </td>
              <td>
                <a>Real work hours</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className='vacationhrs'></div>
              </td>
              <td>
                <a>Vacation hours per month</a>
              </td>
            </tr>
            <tr>
              <td>
                <div className='sickhrs'></div>
              </td>
              <td>
                <a>Sick hours per month</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='tableline'></div>
        <br></br>
        <div>
          <ChoosedUser/>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
  
export default Charts;