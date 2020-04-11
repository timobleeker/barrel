jest.mock('./api-core')

import getApi from './index'
import apiCore from './api-core'

describe('api', () => {
  const getMock = jest.fn()
  apiCore.mockReturnValue({ get: getMock })
  const api = getApi()

  it('calls the whiskey index endpoint', () => {
    api.getWhiskeyIndex()
    expect(getMock).toHaveBeenCalledWith('/whiskeys')
  })

  it('calls the whiskey show endpoint', () => {
    api.getWhiskey(4)
    expect(getMock).toHaveBeenCalledWith('/whiskeys/4')
  })
})
