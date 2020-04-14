import React from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3)
  }
}))

export default function BaseLayout({ children }) {
  const classes = useStyles()
  const { pathname } = useLocation()

  const tabs = [
    {
      path: '/',
      label: 'My Whiskeys'
    },
    {
      path: '/whiskeys/new',
      label: 'Add new whiskey'
    }
  ]

  const tabValue = tabs.map(({ path }) => path).includes(pathname)
    ? pathname
    : '/'

  return (
    <Box>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6">Barrel</Typography>
          <Container>
            <Tabs centered value={tabValue}>
              {tabs.map(({ path, label }, index) => (
                <Tab
                  key={index}
                  value={path}
                  label={label}
                  component={Link}
                  to={path}
                />
              ))}
            </Tabs>
          </Container>
        </Toolbar>
      </AppBar>
      {children && (
        <Container maxWidth="md" className={classes.container}>
          {children}
        </Container>
      )}
    </Box>
  )
}
