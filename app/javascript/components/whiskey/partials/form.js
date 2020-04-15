import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Grid,
  TextField,
  Typography,
  Slider
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import useForm from '../../../hooks/use-form'

const useStyles = makeStyles(() => ({
  saveButton: {
    marginLeft: 'auto'
  }
}))

const Form = ({
  formObject = {},
  errors = {},
  submitHandler,
  onResetFieldError
}) => {
  const classes = useStyles()

  const initialState = {
    name: '',
    description: '',
    taste: 3,
    color: 3,
    smokiness: 3,
    ...formObject
  }
  const [handleSubmit, handleChange, inputs] = useForm(
    initialState,
    submitHandler
  )

  const title = formObject.id ? 'Edit Whiskey' : 'Add new whiskey'

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' }
  ]

  return (
    <Card>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CardHeader title={title} />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={Boolean(errors.name)}
                helperText={errors.name}
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                onClick={() => onResetFieldError('name')}
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
            <Grid item xs={12} md={4}>
              <Typography id="taste-slider" gutterBottom>
                Taste
              </Typography>
              <Slider
                value={inputs.taste}
                onChange={(e, v) => handleChange(e, v, 'taste')}
                name="taste"
                max={5}
                min={1}
                step={1}
                marks={marks}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography id="color-slider" gutterBottom>
                Color
              </Typography>
              <Slider
                value={inputs.color}
                onChange={(e, v) => handleChange(e, v, 'color')}
                max={5}
                min={1}
                step={1}
                marks={marks}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography id="smokiness-slider" gutterBottom>
                Smokiness
              </Typography>
              <Slider
                value={inputs.smokiness}
                onChange={(e, v) => handleChange(e, v, 'smokiness')}
                max={5}
                min={1}
                step={1}
                marks={marks}
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
