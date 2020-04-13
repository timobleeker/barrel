import React from 'react'
import { mount } from 'enzyme'
import Form from './form'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('Whiskey Form', () => {
  let wrapper
  const submitMock = jest.fn()

  describe('new whiskey', () => {
    beforeEach(() => {
      jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
      wrapper = mount(<Form submitHandler={submitMock} />)
    })

    it('renders', () => {
      expect(wrapper.find('Form')).toExist()
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

      expect(submitMock).toHaveBeenCalledWith({
        name: 'New Name',
        description: 'New Description'
      })
    })
  })

  describe('existing whisey', () => {
    it('renders', () => {
      wrapper = mount(
        <Form formObject={{ id: 1 }} submitHandler={submitMock} />
      )
      expect(wrapper.find('Form')).toExist()
      expect(wrapper.find('div.MuiCardHeader-root')).toIncludeText(
        'Edit Whiskey'
      )
    })
  })
})
