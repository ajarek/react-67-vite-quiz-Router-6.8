import React, { useEffect, useState,useContext } from 'react'
import { AppContext } from '../../App'
import {Link} from 'react-router-dom'
import './Result.css'
const Result = () => {
  const { points,setPoints } = useContext(AppContext)
  return (
    <div className='result'>
      <div className="result-wrapper">
     <h3> Your score is {points} out of 100</h3>
      <Link className='link' to={'/'}>
         <button>Start Quiz</button>
      </Link>
      </div>
    </div>
  )
}

export default Result