import React from 'react'

const ReviewState = ({questions, onRestart}) => {
  return (
    <div id='reviewWrapper'>
      <h2 id='answerHeading'>Answer Key:</h2>
        {questions.map((q, i) => (
          <div key={q.id} className='qAndA'>
            <p>Q{i+1}: {q.question}</p>
            <p>A. {q.answer}</p>
          </div>
        ))}
      
      <button id='restart' className="start" onClick={onRestart} >Start Again</button>
    </div>
  )
}

export default ReviewState