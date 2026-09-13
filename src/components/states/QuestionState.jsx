import React, { useRef, useState, useEffect } from 'react'

const TIMER_DURATION = 60

const QuestionState = ({question, questionIndex, total, score, onAnswer}) => {
  const [timeleft, setTimeLeft] = useState(TIMER_DURATION)
  const [selected, setSelected]= useState(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    setTimeLeft(TIMER_DURATION)
    setSelected(null)

    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current)
          onAnswer(null)
          return 0
        } 
        return t-1
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [questionIndex])

  const handleSelect = (option) => {
    if (selected !== null) return
    clearInterval(intervalRef.current)
    setSelected(option)
    onAnswer(option)
  }

  const getButtonClass = (option) => {
    if (!selected){
      return 'option-btn'
    }
    if (option === question.answer){
      return 'option-btn correct'
    }
    if (option === selected){
      return 'option-btn wrong'
    }
    return 'option-btn'
  }

  return (
    <>
      <div id='questionWrapper'>
        <div id='timerBar'>
          <div id='timerFill' style={{width:`${(timeleft/TIMER_DURATION)*100}%`}}/>
        </div>

        <div id='stats'>
          <p className='statItems'>
            Time left: {timeleft}s
          </p>

          <div className='statItems'>Score: {score} / {total} </div>
        </div>

        <div id='question'>Q{questionIndex+1}.{" "}{question.question}</div>

        <div id='options'>
          {question.options.map(option => (
            <button key={option} className={getButtonClass(option)} onClick={() => handleSelect(option)}>
              {option}
            </button>
          ))}
        </div>

      </div>
    </>
  )
}

export default QuestionState