import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  name: {
    fontSize: 14,
  },
  description: {},
}))

export const WhiskeyCard = ({ name, description }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.name}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography className={classes.description}>{description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}
