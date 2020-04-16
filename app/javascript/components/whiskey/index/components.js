import React, { Fragment, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogActions,
  Divider
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const ConfirmationDialog = ({ open, onCancel, onDelete }) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Delete this whiskey?</DialogTitle>
      <DialogActions>
        <Button onClick={onCancel} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={onDelete}
          color="primary"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 18
  },
  content: {
    width: '85%'
  }
}))

export const WhiskeyCard = ({ id, name, description, onDelete }) => {
  const history = useHistory()
  const classes = useStyles()
  const [anchor, setAnchor] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  const handleOpenMenu = (e) => {
    setAnchor(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchor(null)
  }

  const onClickDeleteOption = () => {
    setModalVisible(true)
    handleCloseMenu()
  }

  const handleDelete = () => {
    setModalVisible(false)
    onDelete()
  }

  const onClickEditOption = () => {
    history.push(`/whiskeys/${id}/edit`)
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <ConfirmationDialog
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onDelete={handleDelete}
      />
      <Card>
        <CardHeader
          classes={{ content: classes.content, title: classes.title }}
          titleTypographyProps={{ noWrap: true }}
          action={
            <Fragment>
              <IconButton onClick={handleOpenMenu}>
                <MoreVert />
              </IconButton>
              <Menu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={onClickEditOption}>Edit</MenuItem>
                {Boolean(onDelete) && (
                  <MenuItem onClick={onClickDeleteOption}>Delete</MenuItem>
                )}
              </Menu>
            </Fragment>
          }
          title={name}
        />
        <CardContent>
          <Typography noWrap>{description}</Typography>
        </CardContent>
        <Divider />
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
