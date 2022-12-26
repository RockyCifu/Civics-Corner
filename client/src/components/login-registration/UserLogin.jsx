import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import useForm from "../../hooks/useForm"

import "./userLogin.css"

const initialState = {
  email: "",
  password: "",
}

const UserLogin = () => {
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const submitHandler = (values) => {
    axios
      .post("http://localhost:8080/api/v1/users/login", { ...values })
      .then((res) => {
        sessionStorage.setItem("user_id", res.data.user.id)
        sessionStorage.setItem("user_name", res.data.user.userName)
        navigate(`/tests/users/${res.data.user.id}`)
      })
      .catch((err) => setErrors(() => err.response.data))
  }

  const { values, handleChange, handleSubmit } = useForm(initialState, submitHandler)

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={values.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" value={values.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default UserLogin
