import React from 'react'
import { camelizeKeys } from 'humps'
import { useHistory, useParams } from 'react-router-dom'

import BaseLayout from '../../layouts/base'
import Form from '../partials/form'
import getApi from '../../../api'
import useWhiskey from '../hooks/use-whiskey'

const Edit = () => {
  const history = useHistory()
  const { id } = useParams()
  const { whiskey } = useWhiskey(id)
  const api = getApi()

  async function putData(params) {
    const resp = await api.updateWhiskey(id, camelizeKeys({ data: params }))
    if (resp.ok) {
      const { data } = await resp.json()
      history.push(`/whiskeys/${data.id}`)
    } else {
      // TODO handle errors
    }
  }

  return (
    <BaseLayout>
      {whiskey.id && <Form formObject={whiskey} submitHandler={putData} />}
    </BaseLayout>
  )
}

export default Edit
