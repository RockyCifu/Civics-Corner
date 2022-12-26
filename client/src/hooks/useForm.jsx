import { useState } from "react"

const useForm = (initialState, submitHandler) => {
  const [values, setValues] = useState(initialState)

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitHandler(values)
  }

  return { values, handleChange, handleSubmit }
}

export default useForm
