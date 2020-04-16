import React from 'react'
import { mount } from 'enzyme'
import Form from './form'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('Whiskey Form', () => {
  let wrapper
  const submitMock = jest.fn()

  beforeEach(() => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
    wrapper = mount(<Form title="Add new whiskey" submitHandler={submitMock} />)
  })

  it('renders', () => {
    expect(wrapper.find('Form')).toExist()
    expect(wrapper.find('div.MuiCardHeader-root')).toIncludeText(
      'Add new whiskey'
    )
  })

  it('shows errors', () => {
    expect(wrapper.find('.MuiOutlinedInput-root.Mui-error')).not.toExist()
    wrapper = mount(<Form errors={{ name: ["Can't be blank"] }} />)
    expect(wrapper.find('.MuiOutlinedInput-root.Mui-error')).toExist()
  })

  it('submits the form', () => {
    let nameInput = wrapper.find('input[name="name"]')
    nameInput.getDOMNode().value = 'New Name'
    nameInput.simulate('change')

    const descriptionInput = wrapper.find('textarea[name="description"]')
    descriptionInput.getDOMNode().value = 'New Description'
    descriptionInput.simulate('change')

    nameInput = wrapper.find('input[name="name"]')
    expect(nameInput.prop('value')).toEqual('New Name')

    wrapper.find('button[type="submit"]').simulate('submit')

    expect(submitMock).toHaveBeenCalledWith({
      name: 'New Name',
      description: 'New Description',
      taste: 3,
      color: 3,
      smokiness: 3
    })
  })
})
