import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  AppBar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import SearchBar from '../../search-bar'

const useStyles = makeStyles((theme) => ({
  header: {
    marginRight: 40
  },
  container: {
    paddingTop: theme.spacing(3)
  }
}))

export default function BaseLayout({ useSearch, children }) {
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
    },
    {
      path: '/whiskeys/search',
      label: 'Advanced Search'
    }
  ]

  const tabValue = tabs.map(({ path }) => path).includes(pathname)
    ? pathname
    : '/'

  return (
    <Box>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography classes={{ root: classes.header }} variant="h6">
            Barrel
          </Typography>
          <Grid container>
            <Grid item>
              <Tabs value={tabValue}>
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
            </Grid>
          </Grid>
          {Boolean(useSearch) && <SearchBar useSearch={useSearch} />}
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
