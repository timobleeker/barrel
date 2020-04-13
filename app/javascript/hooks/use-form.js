import { useState } from 'react'

const useForm = (initialState, callback) => {
  const [inputs, setInputs] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    callback(inputs)
  }

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  return [handleSubmit, handleChange, inputs]
}

export default useForm
