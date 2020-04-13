import React from 'react'
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

import useForm from '../../../hooks/use-form'

const useStyles = makeStyles(() => ({
  saveButton: {
    marginLeft: 'auto'
  }
}))

const Form = ({ formObject = {}, submitHandler }) => {
  const classes = useStyles()

  const initialState = { name: '', description: '', ...formObject }

  const [handleSubmit, handleChange, inputs] = useForm(
    initialState,
    submitHandler
  )

  const title = formObject.id ? 'Edit Whiskey' : 'Add new whiskey'

  return (
    <Card>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CardHeader title={title} />
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
  )
}

export default Form
