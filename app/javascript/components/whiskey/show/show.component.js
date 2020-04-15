import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  IconButton,
  LinearProgress
} from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import { Link, useParams, useLocation } from 'react-router-dom'

import BaseLayout from '../../layouts/base'
import { timeAgoInWords } from '../../../utils/date'
import useWhiskey from '../hooks/use-whiskey'

const useStyles = makeStyles(() => ({
  edit: {
    marginLeft: 'auto'
  },
  divider: {
    margin: '20px 0'
  },
  progress: {
    height: 10
  }
}))

const Show = () => {
  const classes = useStyles()
  const { id } = useParams()
  const { pathname } = useLocation()
  const { whiskey } = useWhiskey(id)

  const ratingInPercentage = (rating) => (100 / 5) * rating

  return (
    <BaseLayout>
      {whiskey.id && (
        <Card>
          <CardHeader
            title={whiskey.name}
            subheader={`First enjoyed ${timeAgoInWords(whiskey.createdAt)}`}
            action={
              <IconButton component={Link} to="/">
                <Close />
              </IconButton>
            }
          />
          <CardContent>
            <Typography color="textSecondary">Description</Typography>
            <Typography gutterBottom>{whiskey.description}</Typography>
            <Divider classes={{ root: classes.divider }} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Typography color="textSecondary">Taste</Typography>
                <LinearProgress
                  id="taste-rating"
                  classes={{ root: classes.progress }}
                  variant="determinate"
                  value={ratingInPercentage(whiskey.taste)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography color="textSecondary">Color</Typography>
                <LinearProgress
                  id="color-rating"
                  classes={{ root: classes.progress }}
                  variant="determinate"
                  value={ratingInPercentage(whiskey.color)}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography color="textSecondary">Smokiness</Typography>
                <LinearProgress
                  id="smokiness-rating"
                  classes={{ root: classes.progress }}
                  variant="determinate"
                  value={ratingInPercentage(whiskey.smokiness)}
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              component={Link}
              to={`${pathname}/edit`}
              className={classes.edit}
              color="primary"
            >
              Edit
            </Button>
          </CardActions>
        </Card>
      )}
    </BaseLayout>
  )
}

export default Show
