import React, { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ReadyState from './states/ReadyState'
import InstructionState from './states/InstructionState'
import QuestionState from './states/QuestionState'
import ResultState from './states/ResultState'
import ReviewState from './states/ReviewState'
import { questions } from '../data/questions'


const STATES = ['ready', 'instruction', 'question', 'result', 'review']

const QuizCard = () => {
  const [currentState, setCurrentState] = useState('ready')
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const cardRef = useRef(null)

  //why no work
  const animateTransition = (callback) => {
    gsap.to(cardRef.current, {
      rotateY: 90,
      duration: 0.3,
      onComplete: () => {
        callback()
        gsap.to(cardRef.current, {
          rotateY: 0,
          duration: 0.3
        })
      }
    })
  }

  const goTo = (nextState) => {
    animateTransition(() => setCurrentState(nextState))
  }

  const restartQuiz = (nextState) => {
    animateTransition(() => setCurrentState(nextState))
    setCurrentState(nextState)
    setScore(0)
    setCurrentQuestion(0)
    
  }

  const handleAnswer = (selectedOption) => {
    const correct = questions[currentQuestion].answer === selectedOption
    
    if(correct) {
      setScore(s => s+1)
    }

    const isLast = currentQuestion === questions.length-1
    setTimeout(() => {
      if (isLast){
        goTo('result')
      }
      else{
        setCurrentQuestion(q => q+1)
      }
    },700) // delay so button color is visible before moving on
  }

  const renderState = () => {
    switch(currentState) {
      case 'ready':
        return <ReadyState onStart={() => goTo('instruction')}/>
      case 'instruction':
        return <InstructionState onBegin={() => goTo('question')}/>
      case 'question':
        return <QuestionState question={questions[currentQuestion]} questionIndex={currentQuestion} total={questions.length} score={score} onAnswer={handleAnswer}/>
      case 'result':
        return <ResultState score={score} total={questions.length} onReview={() => goTo('review')}/>
      case 'review':
        return <ReviewState questions={questions} onRestart={() => restartQuiz('ready')}/>
      
    }
  } 

  return (
    <>
        <div id='mainCardOuter'>
            <div id='mainCardInner' ref={cardRef}>
              {renderState()}

              
            </div>
            
        </div>
    </>
  )
}

export default QuizCard