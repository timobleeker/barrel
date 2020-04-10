import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card } from '@material-ui/core'

import { WhiskeyCard } from './components'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
  },
}))

const Index = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className={classes.container}>
      <WhiskeyCard name="Whiskey #1" description="Pretty good whiskey" />
    </Grid>
  )
}

export default Index
