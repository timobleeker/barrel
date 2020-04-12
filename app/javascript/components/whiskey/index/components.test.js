import React from 'react'
import { mount } from 'enzyme'
import { WhiskeyCard } from './components'
import { MemoryRouter } from 'react-router-dom'

it('renders', () => {
  const props = { name: 'My Whiskey', description: 'Pretty good whiskey' }
  const wrapper = mount(
    <MemoryRouter>
      <WhiskeyCard {...props} />
    </MemoryRouter>
  )
  expect(wrapper.find('WhiskeyCard')).toExist()
  expect(wrapper).toIncludeText('My Whiskey')
})
