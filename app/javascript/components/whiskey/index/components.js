import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const useStyles = makeStyles(() => ({
  name: {
    fontSize: 18
  }
}))

export const WhiskeyCard = ({ id, name, description }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardHeader
          titleTypographyProps={{ className: classes.name }}
          action={
            <IconButton disabled>
              <MoreVert />
            </IconButton>
          }
          title={name}
        />
        <CardContent>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={`/whiskeys/${id}`}
            size="small"
            color="primary"
          >
            View details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
