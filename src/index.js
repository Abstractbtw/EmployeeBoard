import React, {Component} from "react"
import ReactDOM from 'react-dom/client'
import {Board} from './react/Board'
import Charts from './js/Charts'
import './css/App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderBoard = () => {
  root.render(
    <React.StrictMode>
      <Board />
    </React.StrictMode>
  );
}

const renderCharts = () => {
  root.render(
    <React.StrictMode>
      <Charts />
    </React.StrictMode>
  )
}

const MainRender = () => {
  return(
    <div className="container">
      <table>
        <tbody>
          <tr>
            <td>
              <button className='defaultbutton' onClick={renderBoard}>Users information</button>
            </td>
            <td>
              <button className='defaultbutton' onClick={renderCharts}>Statistics</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

root.render(MainRender())

export {MainRender, renderBoard, renderCharts}
