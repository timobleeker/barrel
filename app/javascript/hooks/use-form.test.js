import React from 'react'
import { mount } from 'enzyme'
import useForm from './use-form'

const TestComponent = ({ callbackSpy }) => {
  const initialState = { myInput: '' }
  const [handleSubmit, handleChange, inputs] = useForm(
    initialState,
    callbackSpy
  )

  return (
    <div>
      <form id="my-form" onSubmit={handleSubmit}>
        <input
          id="my-input"
          name="myInput"
          onChange={handleChange}
          value={inputs.myInput}
        />
        <button type="submit" />
      </form>
    </div>
  )
}

describe('Hooks: useForm', () => {
  it('handles form field changes', () => {
    const callbackSpy = jest.fn()
    const wrapper = mount(<TestComponent callbackSpy={callbackSpy} />)
    let myInput = wrapper.find('#my-input')

    myInput.simulate('change', {
      target: { name: 'myInput', value: 'New Value' }
    })

    myInput = wrapper.find('#my-input')
    expect(myInput.prop('value')).toEqual('New Value')
  })

  it('handles form submit', () => {
    const callbackSpy = jest.fn()
    const wrapper = mount(<TestComponent callbackSpy={callbackSpy} />)
    wrapper.find('#my-form').simulate('submit')
    expect(callbackSpy).toHaveBeenCalledTimes(1)
  })
})
