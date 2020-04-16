import React, { useState, useEffect } from 'react'
import { camelizeKeys } from 'humps'
import { Grid } from '@material-ui/core'

import BaseLayout from '../../layouts/base'
import { WhiskeyCard } from './components'
import getApi from '../../../api'

const Index = () => {
  const [whiskeys, setWhiskeys] = useState([])
  const [filteredWhiskeys, setFilteredWhiskeys] = useState([])
  const [query, setQuery] = useState('')
  const api = getApi()

  const fetchData = async () => {
    const resp = await api.getWhiskeyIndex()
    if (resp.ok) {
      const { data } = await resp.json()
      const camelized = camelizeKeys(data)
      setWhiskeys(camelized)
      setFilteredWhiskeys(camelized)
    } else {
      // TODO handle errors
      const { errors } = await resp.json()
      console.log(errors)
    }
  }

  const handleDelete = async (id) => {
    const resp = await api.deleteWhiskey(id)
    if (resp.ok) {
      fetchData()
    } else {
      // TODO handle errors
      const { errors } = await resp.json()
      console.log(errors)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filterWhiskeys = () => {
    let filtered = whiskeys
    if (query.length) {
      filtered = whiskeys.filter(
        ({ name, description }) =>
          Boolean(name.match(new RegExp(query, 'i'))) ||
          Boolean(description.match(new RegExp(query, 'i')))
      )
    }
    setFilteredWhiskeys(filtered)
  }

  useEffect(() => {
    filterWhiskeys()
  }, [query])

  const useSearch = () => [query, setQuery]

  return (
    <BaseLayout useSearch={useSearch}>
      <Grid container spacing={3}>
        {filteredWhiskeys.map((whiskey, index) => (
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
