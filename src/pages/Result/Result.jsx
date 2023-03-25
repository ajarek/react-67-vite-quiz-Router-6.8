import React, { useContext } from 'react'
import { AppContext } from '../../App'
import { Link } from 'react-router-dom'
import data from '../..//assets/data.json'
import './Result.css'
const Result = () => {
  const { points } = useContext(AppContext)
  return (
    <div className='result'>
      <div
        className='result-wrapper'
        style={
          points >= 50
            ? { backgroundColor: '#198754' }
            : { backgroundColor: '#dc3545' }
        }
      >
        <h3>
          {' '}
          Your score is {points} out of {data.length * 10}
        </h3>
        <Link
          className='link'
          to={'/'}
        >
          <button>Start Quiz</button>
        </Link>
      </div>
    </div>
  )
}

export default Result
