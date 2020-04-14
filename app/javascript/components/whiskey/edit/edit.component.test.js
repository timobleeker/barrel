import React from 'react'
import flushPromises from 'flush-promises'
import { mount } from 'enzyme'
import { act } from 'react-dom/test-utils'
import Edit from './edit.component'
import { MemoryRouter, Route } from 'react-router-dom'

import mockApi from '../../../tests/helpers/api-mock'
import * as getApi from '../../../api'
import { WHISKEY } from '../../../tests/fixtures'

describe('Edit whiskey form', () => {
  let wrapper

  beforeEach(async () => {
    jest.spyOn(getApi, 'default').mockImplementation(() => mockApi)
    wrapper = mount(
      <MemoryRouter initialEntries={[`whiskeys/${WHISKEY.id}`]}>
        <Route path="whiskeys/:id">
          <Edit />
        </Route>
      </MemoryRouter>
    )

    await act(async () => {
      await flushPromises()
    })
    wrapper.update()
  })

  it('renders', () => {
    expect(wrapper.find('Edit')).toExist()
    expect(wrapper.find('div.MuiCardHeader-root')).toIncludeText('Edit Whiskey')
  })

  it('redirects to updated whiskey', async () => {
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
