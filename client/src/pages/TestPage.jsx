import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import TestQuestion from "../components/test/TestQuestion"
import TestIntroduction from "../components/test/TestIntroduction"
import TestResult from "../components/test/TestResult"
import useTest from "../hooks/useTest"

import "./testPage.css"

const TestPage = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      navigate("/")
    } else if (sessionStorage.getItem("user_id") !== userId) {
      navigate(`/tests/users/${sessionStorage.getItem("user_id")}`)
    }
  }, [userId])

  const { test, currentIndex, results, generate, handleAnswer, handleSubmit, handleReset } = useTest()
  const conditionalRender = !test ? (
    <TestIntroduction handleNew={generate} />
  ) : test.id ? (
    <TestResult score={test.score} handleReset={handleReset} />
  ) : (
    <TestQuestion
      question={test.questions[currentIndex]}
      index={currentIndex + 1}
      clickHandler={currentIndex === 9 ? handleSubmit : handleAnswer}
    />
  )

  return (
    <section id="test-section">
      <div className="main-container">{conditionalRender}</div>
    </section>
  )
}

export default TestPage
