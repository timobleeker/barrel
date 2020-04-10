import React from 'react'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core'

export default function BaseLayout({ children }) {
  return (
    <Box>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="h6">Barrel</Typography>
            <Container>
              <Tabs centered value={0}>
                <Tab value={0} label="My Whiskeys" />
                <Tab value={1} disabled label="Add New Whiskey" />
              </Tabs>
            </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">{children}</Container>
    </Box>
  )
}
