import React from 'react'

const InstructionState = ({onBegin}) => {
  return (
    <>
      <div id='detail'>
          <h2>How to play</h2>
          <ul>
              <li>You'll be asked 4 questions</li>
              <li>You'll be given a minute to answer each question</li>
              <li>If time runs out, the question will be skipped</li>
              <li>Choose one answer from the multiple choices</li>
              <li>You score a point for every correct answer</li>
              <li>The correct answers will be revealed at the end of the quiz</li>
          </ul>
          <br></br>
          <button id='instructionBtn' className='start' onClick={onBegin}>Let's Go</button>
      </div>
    </>
  )
}

export default InstructionState