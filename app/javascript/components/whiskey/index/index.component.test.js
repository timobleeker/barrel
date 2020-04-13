import React from 'react'
import flushPromises from 'flush-promises'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import Index from './index.component'
import { MemoryRouter, Route } from 'react-router-dom'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('Whiskey Index', () => {
  let wrapper

  beforeEach(async () => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)

    wrapper = mount(
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
  })

  it('renders', () => {
    expect(mockApi.getWhiskeyIndex).toHaveBeenCalled()
    expect(wrapper.find('WhiskeyCard').length).toEqual(2)
  })

  it('can delete entries', async () => {
    mockApi.getWhiskeyIndex.mockClear()

    const card = wrapper.find('WhiskeyCard').at(0)

    await act(async () => {
      card.props().onDelete()
      await flushPromises()
    })

    expect(mockApi.deleteWhiskey).toHaveBeenCalled()
    expect(mockApi.getWhiskeyIndex).toHaveBeenCalledTimes(1)
  })
})
