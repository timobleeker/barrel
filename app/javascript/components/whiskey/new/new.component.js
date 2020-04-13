import React from 'react'
import { camelizeKeys } from 'humps'
import { useHistory } from 'react-router-dom'
import BaseLayout from '../../layouts/base'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import getApi from '../../../api'
import useForm from '../../../hooks/use-form'

const useStyles = makeStyles(() => ({
  saveButton: {
    marginLeft: 'auto'
  }
}))

const New = () => {
  const history = useHistory()
  const classes = useStyles()
  const api = getApi()

  const initialState = {
    name: '',
    description: ''
  }

  const [handleSubmit, handleChange, inputs] = useForm(initialState, postData)

  async function postData() {
    const resp = await api.createWhiskey(camelizeKeys({ data: inputs }))
    if (resp.ok) {
      const { data } = await resp.json()
      history.push(`/whiskeys/${data.id}`)
    } else {
      // TODO handle errors
    }
  }

  return (
    <BaseLayout>
      <Card>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <CardHeader title="Add new whiskey" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  onChange={handleChange}
                  value={inputs.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Description"
                  name="description"
                  placeholder="Tasting notes"
                  variant="outlined"
                  onChange={handleChange}
                  value={inputs.description}
                />
              </Grid>
            </Grid>
          </CardContent>

          <CardActions>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.saveButton}
            >
              Save
            </Button>
          </CardActions>
        </form>
      </Card>
    </BaseLayout>
  )
}

export default New
