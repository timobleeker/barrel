import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'

import BaseLayout from '../../layouts/base'
import { WhiskeyCard } from './components'
import getApi from '../../../api'

const Index = () => {
  const [whiskeys, setWhiskeys] = useState([])
  const api = getApi()

  const fetchData = async () => {
    const resp = await api.getWhiskeyIndex()
    if (resp.ok) {
      const { data } = await resp.json()
      setWhiskeys(data)
    } else {
      // TODO handle errors
    }
  }

  const handleDelete = async (id) => {
    const resp = await api.deleteWhiskey(id)
    if (resp.ok) {
      fetchData()
    } else {
      // TODO handle errors
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <BaseLayout>
      <Grid container spacing={3}>
        {whiskeys.map((whiskey, index) => (
          <WhiskeyCard
            key={index}
            {...whiskey}
            onDelete={() => handleDelete(whiskey.id)}
          />
        ))}
      </Grid>
    </BaseLayout>
  )
}

export default Index
