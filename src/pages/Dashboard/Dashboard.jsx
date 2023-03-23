import React from 'react'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="card">
        <div className="question">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit?</p>
         <span>1/10</span>
        </div>
        <button className="answer">React</button>
        <button className="answer">React.js</button>
        <button className="answer">ReactJS</button>
        <button className="answer">All of the above</button>
        <button className="answer next">Next Question</button>
      </div>
      
      
      
    </div>
  )
}

export default Dashboard