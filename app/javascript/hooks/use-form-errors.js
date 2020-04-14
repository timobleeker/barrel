import { useState } from 'react'

const useFormErrors = () => {
  const [errors, setErrors] = useState({})

  const resetFieldError = (fieldName) =>
    setErrors({ ...errors, [fieldName]: null })

  return [errors, setErrors, resetFieldError]
}

export default useFormErrors
