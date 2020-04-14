import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  IconButton
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
  }
}))

const Show = () => {
  const classes = useStyles()
  const { id } = useParams()
  const { pathname } = useLocation()
  const { whiskey } = useWhiskey(id)

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
            <Typography>{whiskey.description}</Typography>
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
