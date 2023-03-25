import React from 'react'
import {Link} from 'react-router-dom'
import './Result.css'
const Result = () => {
  return (
    <div className='result'>
      <div className="result-wrapper">
     <h3> Your score is 20 out of 100</h3>
      <Link className='link' to={'/'}>
         <button>Start Quiz</button>
      </Link>
      </div>
    </div>
  )
}

export default Result