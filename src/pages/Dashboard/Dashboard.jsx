import React, { useState } from 'react'
import './Dashboard.css'
import {Link,  useNavigate} from 'react-router-dom'
import data from '../..//assets/data.json'
const Dashboard = () => {
  const [index,setIndex]=useState(0)
  const currentData=data[index] 
  const navigate = useNavigate();
const nextQuestion=(e) => {
  setIndex(index+1)
  if(index+2===data.length){
   e.target.style.background='#198754'
   e.target.textContent='Show Result'
  }
  if(index+2>data.length){
   navigate('/')
  }
}

  return (
    <div className='dashboard'>
      <div className="card">
        <div className="question">
        <p>{currentData.question}</p>
         <span>{index+1}/{data.length}</span>
        </div>
        <button className="answer">{currentData.options[0]}</button>
        <button className="answer">{currentData.options[1]}</button>
        <button className="answer">{currentData.options[2]}</button>
        <button className="answer">{currentData.options[3]}</button>
        <button className="answer next" onClick={nextQuestion}>Next Question</button>
      </div>
      
      
      
    </div>
  )
}

export default Dashboard