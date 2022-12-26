const TestResult = ({ score, handleReset }) => {
  return (
    <div className="result-container">
      <h3>Score: {score}</h3>
      <button className="btn" onClick={handleReset}>
        Play Again
      </button>
    </div>
  )
}

export default TestResult
