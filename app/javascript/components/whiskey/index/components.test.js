import React from 'react'
import { mount } from 'enzyme'
import { WhiskeyCard } from './components'

it('renders', () => {
  const props = { name: 'My Whiskey', description: 'Pretty good whiskey' }
  const comp = mount(<WhiskeyCard {...props} />)
  expect(comp.find('WhiskeyCard')).toExist()
})
