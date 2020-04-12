import React from 'react'
import flushPromises from 'flush-promises'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { MemoryRouter, Route } from 'react-router-dom'
import Show from './show.component'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'
import { WHISKEY } from '../../../tests/fixtures'

describe('Whiskey Show', () => {
  beforeEach(() => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
  })

  it('renders', async () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[`whiskeys/${WHISKEY.id}`]}>
        <Route path="whiskeys/:id">
          <Show />
        </Route>
      </MemoryRouter>
    )

    await act(async () => {
      await flushPromises()
    })
    wrapper.update()

    expect(mockApi.getWhiskey).toHaveBeenCalledWith(WHISKEY.id)
    expect(wrapper.find('div.MuiCardHeader-root')).toIncludeText(WHISKEY.name)
    expect(wrapper.find('div.MuiCardContent-root')).toIncludeText(
      WHISKEY.description
    )
  })
})
