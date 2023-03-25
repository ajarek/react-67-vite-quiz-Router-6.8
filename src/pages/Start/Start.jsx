import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'
const Start = () => {
  return (
    <div className='start'>
      <h1>Quiz z wiedzy ogólnej.</h1>
      <Link
        className='link'
        to={'/dashboard'}
      >
        <button>Start Quiz</button>
      </Link>
    </div>
  )
}

export default Start
