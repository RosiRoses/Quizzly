import React from 'react'

const ReadyState = ({ onStart }) => {
  return (
    <>
        <div id='intro'>
            <p>
                Are you ready to quiz your IQ?
            </p>
            <br></br>
            <button className='start' onClick={onStart}>Start</button>
        </div>
    </>
  )
}

export default ReadyState