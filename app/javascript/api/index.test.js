jest.mock('./api-core')

import getApi from './index'
import apiCore from './api-core'

describe('api', () => {
  const getMock = jest.fn()
  const postMock = jest.fn()
  apiCore.mockReturnValue({ get: getMock, post: postMock })
  const api = getApi()

  it('calls the whiskey index endpoint', () => {
    api.getWhiskeyIndex()
    expect(getMock).toHaveBeenCalledWith('/whiskeys')
  })

  it('calls the whiskey show endpoint', () => {
    api.getWhiskey(4)
    expect(getMock).toHaveBeenCalledWith('/whiskeys/4')
  })

  it('calls the whiskey create endpoint', () => {
    const params = { data: { name: 'New Whiskey' } }
    api.createWhiskey(params)
    expect(postMock).toHaveBeenCalledWith('/whiskeys', {
      body: JSON.stringify({ data: { name: 'New Whiskey' } })
    })
  })
})
