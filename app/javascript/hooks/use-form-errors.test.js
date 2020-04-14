import React from 'react'
import { mount } from 'enzyme'
import useFormErrors from './use-form-errors'

const TestComponent = () => {
  const [errors, setError, resetFieldError] = useFormErrors()

  return (
    <div>
      {errors.myFieldName && <span id="visible-error" />}
      <button
        id="add-error"
        onClick={() => {
          setError({ myFieldName: 'message' })
        }}
      />
      <button
        id="remove-error"
        onClick={() => {
          resetFieldError('myFieldName')
        }}
      />
    </div>
  )
}

describe('Hooks: useFormError', () => {
  it('allows error to be set and reset', () => {
    const wrapper = mount(<TestComponent />)
    expect(wrapper.find('#visible-error')).not.toExist()
    wrapper.find('#add-error').simulate('click')
    expect(wrapper.find('#visible-error')).toExist()
    wrapper.find('#remove-error').simulate('click')
    expect(wrapper.find('#visible-error')).not.toExist()
  })
})
