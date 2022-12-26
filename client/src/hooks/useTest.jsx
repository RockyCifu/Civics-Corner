import { useEffect, useState, useRef } from "react"
import axios from "axios"

const useTest = () => {
  const [test, setTest] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const results = useRef([])

  const generate = () => {
    axios.get("http://localhost:8080/api/v1/tests/generate").then((res) => setTest(res.data.test))
  }

  const handleAnswer = (isCorrect) => {
    results.current.push(isCorrect ? 1 : 0)
    setCurrentIndex((prev) => prev + 1)
  }

  const handleSubmit = (isCorrect) => {
    results.current.push(isCorrect ? 1 : 0)
    const score = results.current.reduce((accumulator, value) => accumulator + value * 10, 0)
    axios
      .post(`http://localhost:8080/api/v1/tests/${sessionStorage.getItem("user_id")}`, { ...test, score })
      .then((res) => setTest(res.data.test))
      .catch((err) => console.log(err))
  }

  const handleReset = () => {
    setCurrentIndex(0)
    results.current = []
    generate()
  }
  return { test, currentIndex, results, generate, handleAnswer, handleSubmit, handleReset }
}

export default useTest
