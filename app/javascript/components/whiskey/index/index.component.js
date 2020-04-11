import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

import { WhiskeyCard } from './components'
import getApi from '../../../api'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3)
  }
}))

const Index = () => {
  const classes = useStyles()
  const [whiskeys, setWhiskeys] = useState([])
  const api = getApi()

  async function fetchData() {
    const resp = await api.getWhiskeyIndex()
    if (resp.ok) {
      const { data } = await resp.json()
      setWhiskeys(data)
    } else {
      // TODO handle errors
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Grid container spacing={3} className={classes.container}>
      {whiskeys.map((whiskey, index) => (
        <WhiskeyCard key={index} {...whiskey} />
      ))}
    </Grid>
  )
}

export default Index
