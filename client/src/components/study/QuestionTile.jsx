import React from "react"

const QuestionTile = ({ question }) => {
  const answers = question.answers.map((answer) => (
    <div className="answer-container">
      <span>- </span>
      <li key={answer.id}>{answer.text}</li>
    </div>
  ))
  return (
    <div className="question-tile-container">
      <h3 className="question-text">
        {question.id}. {question.text}
      </h3>
      <ul className="answers-container">{answers}</ul>
    </div>
  )
}

export default QuestionTile
