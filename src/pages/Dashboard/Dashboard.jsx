import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../App'
import './Dashboard.css'
import { Link, useNavigate } from 'react-router-dom'
import data from '../..//assets/data.json'
const Dashboard = () => {
  const [index, setIndex] = useState(0)
  const { points, setPoints } = useContext(AppContext)
  const currentData = data[index]
  const correctAnswer = currentData.answer
  const navigate = useNavigate()

  const nextQuestion = (e) => {
    e.target.className
    setIndex(index + 1)
    if (index + 2 === data.length) {
      e.target.style.background = '#198754'
      e.target.textContent = 'Pokaż wynik 😓'
    }
    if (index + 2 > data.length) {
      navigate('/result')
    }
    enabledButton()
  }

  const disabledButton = (nodes) => {
    return nodes.forEach((node) => (node.disabled = true))
  }
  
  const enabledButton = () => {
    const answers = document.querySelectorAll('.answer')
    return answers.forEach((node) => {
      node.disabled = false
      node.style.background = '#212529'
    })
  }

  useEffect(() => {
    const answers = document.querySelectorAll('.answer')

    answers.forEach((answer) => {
      answer.addEventListener('click', (e) => {
        if (e.target.textContent === correctAnswer) {
          e.target.style.background = '#198754'
          disabledButton(answers)
          setPoints(points + 1)
        } else {
          e.target.style.background = '#dc3545'
          disabledButton(answers)
        }
      })
    })
  }, [correctAnswer, points])

  return (
    <div className='dashboard'>
      <div className='card'>
        <div className='question'>
          <p>{currentData.question}</p>
          <span>
            {index + 1}/{data.length}
          </span>
        </div>
        <button className='answer'>{currentData.options[0]}</button>
        <button className='answer'>{currentData.options[1]}</button>
        <button className='answer'>{currentData.options[2]}</button>
        <button className='answer'>{currentData.options[3]}</button>
        <button
          className='next'
          onClick={nextQuestion}
        >
          Następne Pytanie ▷
        </button>
      </div>
    </div>
  )
}

export default Dashboard
