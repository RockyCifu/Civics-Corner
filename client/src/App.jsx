import { Routes, Route } from "react-router-dom"
import "./App.css"

import UserLogin from "./components/login-registration/UserLogin"
import UserRegistration from "./components/login-registration/UserRegistration"
import NavBar from "./components/navigation/NavBar"
import QuestionList from "./components/study/QuestionList"
import TestPage from "./pages/TestPage"
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<UserLogin />} />
        <Route exact path="/register" element={<UserRegistration />} />
        <Route exact path="/questions/pages/:page" element={<QuestionList />} />
        <Route exact path="/tests/users/:userId" element={<TestPage />} />
        <Route path="*" element={<h1>Path to Not found</h1>} />
      </Routes>
    </>
  )
}

export default App
