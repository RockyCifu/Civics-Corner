import React from "react"
import { Link } from "react-router-dom"
import "./landingPage.css"
const LandingPage = () => {
  return (
    <div id="landing-page">
      <div className="hero-content">
        <h2>Need Help Passing the Naturalization Exam?</h2>
        <p>
          Whether you are studying to become a United States Citizen, or you just want to improve your knowledge, Civics
          Circle has you covered!
        </p>
        <Link className="cta" to={"/register"}>
          Sign Up Today!
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
