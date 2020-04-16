import React, { useState } from 'react'
import { camelizeKeys } from 'humps'
import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import BaseLayout from '../../layouts/base'
import { WhiskeyCard } from '../index/components'
import Form from '../partials/form'
import getApi from '../../../api'

const useStyles = makeStyles((theme) => ({
  resultsHeader: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  resultsContainer: {
    marginTop: theme.spacing(3)
  }
}))
const Search = () => {
  const classes = useStyles()
  const api = getApi()
  const [results, setResults] = useState([])
  const [searchPerformed, setSearchPerformed] = useState(false)

  async function performSearch(params) {
    const resp = await api.getWhiskeySearch(params)
    if (resp.ok) {
      const { data } = await resp.json()
      setSearchPerformed(true)
      setResults(camelizeKeys(data))
    }
  }

  const initialState = {
    taste: 1,
    color: 1,
    smokiness: 1
  }

  return (
    <BaseLayout>
      <Form
        submitName="Search"
        title="Advanced Whiskey Search"
        submitHandler={performSearch}
        formObject={initialState}
        onResetFieldError={() => {
          /* TODO Not used for search, refactor to be optional */
        }}
      />
      <Typography
        classes={{ root: classes.resultsHeader }}
        variant="h6"
        align="center"
      >
        Results
      </Typography>
      <Divider />
      {Boolean(results) && (
        <Grid
          classes={{ root: classes.resultsContainer }}
          container
          spacing={3}
        >
          {results.map((whiskey, index) => (
            <WhiskeyCard key={index} {...whiskey} />
          ))}
        </Grid>
      )}
      {searchPerformed && !results.length && (
        <Typography align="center">No results</Typography>
      )}
    </BaseLayout>
  )
}

export default Search
