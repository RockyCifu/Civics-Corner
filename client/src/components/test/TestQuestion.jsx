import React from "react"

import useQuestion from "../../hooks/useQuestion"

const Question = ({ question, clickHandler, index }) => {
  const { options } = useQuestion(question, clickHandler)

  return (
    <div className="question-container">
      <h3>
        {index}. {question.text}
      </h3>
      <div className="options-container">{options}</div>
    </div>
  )
}

export default Question
