import React from 'react'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Search from './search.component'
import { MemoryRouter } from 'react-router-dom'

import mockApi, { mockApiEndpoint } from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'

describe('New whiskey form', () => {
  const mountComponent = () =>
    mount(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

  it('renders', () => {
    const wrapper = mountComponent()
    expect(wrapper.find('Search')).toExist()
  })

  it('renders results', async () => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
    const wrapper = mountComponent()

    await act(async () => {
      wrapper.find('button[type="submit"]').simulate('submit')
    })
    wrapper.update()

    expect(mockApi.getWhiskeySearch).toHaveBeenCalled()
    expect(wrapper.find('WhiskeyCard').length).toEqual(2)
  })

  it('renders no results message', async () => {
    const mockNoSearchResults = { getWhiskeySearch: mockApiEndpoint([]) }
    jest.spyOn(getApi, 'default').mockImplementation(() => mockNoSearchResults)
    const wrapper = mountComponent()

    await act(async () => {
      wrapper.find('button[type="submit"]').simulate('submit')
    })
    wrapper.update()

    expect(mockApi.getWhiskeySearch).toHaveBeenCalled()
    expect(wrapper.find('WhiskeyCard')).not.toExist()
    expect(wrapper).toIncludeText('No results')
  })
})
