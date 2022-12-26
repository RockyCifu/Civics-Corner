import React from "react"
import { Link, useNavigate } from "react-router-dom"

import "./navBar.css"

const NavBar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    navigate("/")
  }

  return (
    <div className="nav-section">
      <div className="nav-container">
        <h1 className="nav-title">CIVICS CIRCLE</h1>
        <div className="nav-links-container">
          <div className="nav-links">
            <Link className="nav-link" to={"/questions/pages/1"}>
              Test Questions
            </Link>
            {sessionStorage.getItem("user_id") !== null && (
              <Link className="nav-link" to={`/tests/users/${sessionStorage.getItem("user_id")}`}>
                Practice Exam
              </Link>
            )}
          </div>
          <div className="nav-links">
            {sessionStorage.getItem("user_id") === null ? (
              <>
                <Link className="btn btn-login" to={"/login"}>
                  Login
                </Link>
                <Link className="btn btn-register" to={"/register"}>
                  Sign Up
                </Link>
              </>
            ) : (
              <button className="btn btn-login" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
