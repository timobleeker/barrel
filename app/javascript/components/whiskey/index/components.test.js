import React from 'react'
import { mount } from 'enzyme'
import { WhiskeyCard } from './components'
import { MemoryRouter } from 'react-router-dom'

describe('Whiskey Index Components', () => {
  let wrapper
  const deleteSpy = jest.fn()

  const props = {
    name: 'My Whiskey',
    description: 'Pretty good whiskey',
    onDelete: deleteSpy
  }

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <WhiskeyCard {...props} />
      </MemoryRouter>
    )
  })

  it('renders', () => {
    expect(wrapper.find('WhiskeyCard')).toExist()
    expect(wrapper).toIncludeText('My Whiskey')
  })

  describe('deleting an entry', () => {
    it('shows a modal', () => {
      expect(wrapper.find('div.MuiDialog-root')).not.toExist()
      expect(wrapper.find('li.MuiListItem-button')).not.toExist()

      wrapper.find('button.MuiIconButton-root').simulate('click')
      expect(wrapper.find('li.MuiListItem-button').length).toEqual(2)

      wrapper.find('li.MuiListItem-button').at(1).simulate('click')
      expect(wrapper.find('div.MuiDialog-root')).toExist()
    })

    it('calls the onDelete function', () => {
      wrapper.find('button.MuiIconButton-root').simulate('click')
      wrapper.find('li.MuiListItem-button').at(1).simulate('click')
      wrapper
        .find('div.MuiDialog-root button.MuiButton-containedPrimary')
        .simulate('click')
      expect(deleteSpy).toHaveBeenCalled()
    })
  })
})
