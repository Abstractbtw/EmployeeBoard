import React, {Component} from "react"
import ReactDOM from 'react-dom/client'
import {Board} from './react/Board'
import Charts from './js/Charts'

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

const MainRender = () =>{
  return(
    <div className="container">
      <button onClick={renderBoard}>Employee board</button>
      <button onClick={renderCharts}>Statistics</button>
    </div>
  )
}

root.render(MainRender())

export {MainRender}
