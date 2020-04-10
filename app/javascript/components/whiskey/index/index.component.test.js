import React from 'react'
import { mount } from 'enzyme'
import Index from './index.component'

it('renders', () => {
  const comp = mount(<Index />)
  expect(comp.find('WhiskeyCard')).toExist()
})
