import React from "react"

const TestIntroduction = ({ handleNew }) => {
  return (
    <div className="test-container">
      <h3>Naturalization Practice Test</h3>
      <p>
        The civics test is an oral test and the USCIS Officer will ask the applicant up to 10 of the 100 civics
        questions. An applicant must answer 6 out of 10 questions correctly to pass the civics portion of the
        naturalization test. This practice test is intended to help gain the knowledge needed to pass. This site makes
        no promises or guarantees in relation to anyone's success or failure.
      </p>
      <p>
        On the naturalization test, some answers may change because of elections or appointments. As you study for the
        test, make sure that you know the most current answers to these questions. Answer these questions with the name
        of the official who is serving at the time of your eligibility interview with USCIS. The USCIS Officer will not
        accept an incorrect answer.
      </p>
      <p></p>
      <button className="btn" onClick={handleNew}>
        Start Test
      </button>
    </div>
  )
}

export default TestIntroduction
