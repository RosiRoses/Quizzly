import React from 'react'

const ResultState = ({score, total, onReview}) => {

  const getMessage = () => {
    if (score === total ) {
      return "Perfect score!!!"
    }
    if (score >= 1 ) {
      return "Good effort!"
    }
    return "Better luck next time!"
  }


  return (
    <div id='resultWrapper'>
      <h2>Quiz Completed!</h2>
      <p className="scoreMsg">You scored {score} out of {total}</p>
      <p className="scoreMsg">{getMessage()}</p>
      <button className="start" onClick={onReview} id='restart'>Check correct Answers</button>
    </div>
  )
}

export default ResultState