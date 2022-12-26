const useQuestion = (question, clickHandler) => {
  const multiples = [9, 36, 51, 55, 64, 100]
  let correctAnswer = !multiples.includes(question.id)
    ? question.answers[0].text
    : `${question.answers[0].text}, ${question.answers[1].text}`

  if (question.id === 64) {
    correctAnswer += `, ${question.answers[2].text}`
  }

  const shuffledArray = [...question.options.map((option) => option.text), correctAnswer]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  const options = shuffledArray.map((option, index) => (
    <button key={index} className="option-btn" onClick={(e) => clickHandler(e.target.innerText === correctAnswer)}>
      {option}
    </button>
  ))

  return { options }
}

export default useQuestion
