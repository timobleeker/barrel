import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import New from './new.component'
import { MemoryRouter } from 'react-router-dom'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('New whiskey form', () => {
  let wrapper

  beforeEach(() => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
    wrapper = mount(
      <MemoryRouter>
        <New />
      </MemoryRouter>
    )
  })

  it('renders', () => {
    expect(wrapper.find('New')).toExist()
    expect(wrapper.find('div.MuiCardHeader-root')).toIncludeText(
      'Add new whiskey'
    )
  })

  it('submits the form', () => {
    let nameInput = wrapper.find('input[name="name"]')
    nameInput.simulate('change', {
      target: { name: 'name', value: 'New Name' }
    })

    wrapper.find('textarea[name="description"]').simulate('change', {
      target: { name: 'description', value: 'New Description' }
    })

    nameInput = wrapper.find('input[name="name"]')
    expect(nameInput.prop('value')).toEqual('New Name')

    wrapper.find('button[type="submit"]').simulate('submit')

    expect(mockApi.createWhiskey).toHaveBeenCalledWith({
      data: {
        name: 'New Name',
        description: 'New Description'
      }
    })
  })

  it('redirects to newly created whiskey', async () => {
    await act(async () => {
      wrapper.find('button[type="submit"]').simulate('submit')
    })

    expect(wrapper.find('Router').prop('history')).toMatchObject(
      expect.objectContaining({
        location: expect.objectContaining({ pathname: '/whiskeys/1' })
      })
    )
  })
})
