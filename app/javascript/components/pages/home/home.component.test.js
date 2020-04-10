import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home.component'

it('renders', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Home />, div)
})
