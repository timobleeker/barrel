import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  if (node == null) {
    throw new Error('React root node is not defined')
  }

  ReactDOM.render(<App />, node)
})
