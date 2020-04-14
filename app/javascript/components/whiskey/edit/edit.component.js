import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { camelizeKeys } from 'humps'

import BaseLayout from '../../layouts/base'
import Form from '../partials/form'
import getApi from '../../../api'
import useWhiskey from '../hooks/use-whiskey'
import useFormErrors from '../../../hooks/use-form-errors'

const Edit = () => {
  const history = useHistory()
  const { id } = useParams()
  const { whiskey } = useWhiskey(id)
  const api = getApi()
  const [errors, setErrors, resetFieldError] = useFormErrors()

  async function putData(params) {
    const resp = await api.updateWhiskey(id, { data: params })
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
      {whiskey.id && (
        <Form
          formObject={whiskey}
          submitHandler={putData}
          errors={errors}
          resetFieldError={resetFieldError}
        />
      )}
    </BaseLayout>
  )
}

export default Edit
