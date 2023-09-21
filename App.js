import React from 'react'
import Bar from './Bar'
import Pie from './Pie'
import Line from './Line'
import Gauge from './Gauge'
import './App.css'
function App() {
  return (
    <div >
      <div className="bg ">
      <Bar className="box"/>
      <Line className="box"/>
      </div>
      <div className="bg">
      <Gauge className="box"/>
      <Pie className="box" />
      </div>
    </div>
  )
}

export default App
