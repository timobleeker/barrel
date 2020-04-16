import React from 'react'
import { camelizeKeys } from 'humps'
import { useHistory } from 'react-router-dom'

import BaseLayout from '../../layouts/base'
import Form from '../partials/form'
import getApi from '../../../api'
import useFormErrors from '../../../hooks/use-form-errors'

const New = () => {
  const history = useHistory()
  const api = getApi()
  const [errors, setErrors, resetFieldError] = useFormErrors()

  async function postData(params) {
    const resp = await api.createWhiskey({ data: params })
    if (resp.ok) {
      const { data } = await resp.json()
      history.push(`/whiskeys/${data.id}`)
    } else {
      const { errors: requestErrors } = await resp.json()
      setErrors(camelizeKeys(requestErrors))
    }
  }

  return (
    <BaseLayout>
      <Form
        title="Add new whiskey"
        submitHandler={postData}
        errors={errors}
        onResetFieldError={resetFieldError}
      />
    </BaseLayout>
  )
}

export default New
