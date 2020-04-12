import React, { useState, useEffect } from 'react'
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

import { Link, useParams } from 'react-router-dom'
import { camelizeKeys } from 'humps'

import BaseLayout from '../../layouts/base'
import getApi from '../../../api'
import { timeAgoInWords } from '../../../utils/date'

const useStyles = makeStyles(() => ({
  edit: {
    marginLeft: 'auto'
  }
}))

const Show = () => {
  const classes = useStyles()
  const api = getApi()
  const { id } = useParams()
  const [whiskey, setWhiskey] = useState({})

  async function fetchData() {
    const resp = await api.getWhiskey(id)
    if (resp.ok) {
      const { data } = await resp.json()
      setWhiskey(camelizeKeys(data))
    } else {
      // TODO handle errors
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <BaseLayout>
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
          <Button disabled className={classes.edit} color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </BaseLayout>
  )
}

export default Show
