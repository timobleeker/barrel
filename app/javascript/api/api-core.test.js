const fetchMock = require('fetch-mock-jest')
import getApiCore from './api-core'

describe('apiCore', () => {
  const api = getApiCore()

  beforeEach(() => {
    fetchMock.get('/test/url', { data: 'hello whiskey' })
  })

  it('performs a get', async () => {
    const resp = await api.get('/test/url')

    expect(fetchMock).toHaveBeenCalledWith(
      '/test/url',
      expect.objectContaining({
        method: 'GET'
      })
    )

    const data = await resp.json()
    expect(data).toEqual({ data: 'hello whiskey' })
  })
})
