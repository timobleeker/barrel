const fetchMock = require('fetch-mock-jest')
import getApiCore from './api-core'

describe('apiCore', () => {
  const api = getApiCore()

  it('performs a get', async () => {
    fetchMock.get('/api/test/url', {
      data: 'hello whiskey'
    })

    const resp = await api.get('/test/url')

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/test/url',
      expect.objectContaining({
        method: 'GET'
      })
    )

    const data = await resp.json()
    expect(data).toEqual({ data: 'hello whiskey' })
  })

  it('performs a post', async () => {
    fetchMock.post('/api/test/url', {
      status: 201,
      data: { sample: 'response' }
    })

    const resp = await api.post('/test/url', {
      body: { data: { sample: 'params' } }
    })

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/test/url',
      expect.objectContaining({
        method: 'POST',
        body: { data: { sample: 'params' } }
      })
    )

    const data = await resp.json()
    expect(data).toEqual({
      data: { sample: 'response' },
      status: 201
    })
  })

  it('performs a put', async () => {
    fetchMock.put('/api/test/url', {
      status: 200,
      data: { sample: 'response' }
    })

    const resp = await api.put('/test/url', {
      body: { data: { sample: 'params' } }
    })

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/test/url',
      expect.objectContaining({
        method: 'PUT',
        body: { data: { sample: 'params' } }
      })
    )

    const data = await resp.json()
    expect(data).toEqual({
      data: { sample: 'response' },
      status: 200
    })
  })

  it('performs a delete', async () => {
    fetchMock.delete('/api/test/url/1', {
      status: 204
    })

    const resp = await api.delete('/test/url/1')

    expect(fetchMock).toHaveBeenCalledWith(
      '/api/test/url/1',
      expect.objectContaining({ method: 'DELETE' })
    )

    expect(resp.status).toEqual(204)
  })
})
