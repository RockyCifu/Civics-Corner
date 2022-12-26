import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import QuestionTile from "./QuestionTile"
import QuestionPagination from "./QuestionPagination"

import "./questions.css"

const QuestionList = () => {
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()
  const { page } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/questions?page=${page}`)
      .then((res) => setQuestions(res.data.questions))
      .catch(() => navigate("/questions/pages/1"))
  }, [page])

  const questionElements = questions.map((question) => <QuestionTile key={question.id} question={question} />)

  return (
    <div id="questions-section">
      <div>{questionElements}</div>
      <QuestionPagination page={page} />
    </div>
  )
}

export default QuestionList
