import React from 'react'
import { camelizeKeys } from 'humps'
import { useHistory } from 'react-router-dom'

import BaseLayout from '../../layouts/base'
import Form from '../partials/form'
import getApi from '../../../api'

const New = () => {
  const history = useHistory()
  const api = getApi()

  async function postData(params) {
    const resp = await api.createWhiskey(camelizeKeys({ data: params }))
    if (resp.ok) {
      const { data } = await resp.json()
      history.push(`/whiskeys/${data.id}`)
    } else {
      // TODO handle errors
    }
  }

  return (
    <BaseLayout>
      <Form submitHandler={postData} />
    </BaseLayout>
  )
}

export default New
