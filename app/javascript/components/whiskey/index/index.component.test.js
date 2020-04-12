import React from 'react'
import flushPromises from 'flush-promises'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Index from './index.component'
import { MemoryRouter, Route } from 'react-router-dom'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('Whiskey Index', () => {
  beforeEach(() => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
  })

  it('renders', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/">
          <Index />
        </Route>
      </MemoryRouter>
    )

    await act(async () => {
      await flushPromises()
    })
    wrapper.update()

    expect(mockApi.getWhiskeyIndex).toHaveBeenCalled()
    expect(wrapper.find('WhiskeyCard').length).toEqual(2)
  })
})