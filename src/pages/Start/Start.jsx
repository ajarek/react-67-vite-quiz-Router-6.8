import React from 'react'
import { Link } from 'react-router-dom'
import './Start.css'
const Start = () => {
  return (
    <div className='start'>
      <h1>Basic React JS Quiz</h1>
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
