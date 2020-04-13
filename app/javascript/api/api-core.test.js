const fetchMock = require('fetch-mock-jest')
import getApiCore from './api-core'

describe('apiCore', () => {
  const api = getApiCore()

  it('performs a get', async () => {
    fetchMock.get('http://localhost:3000/api/test/url', {
      data: 'hello whiskey'
    })

    const resp = await api.get('/test/url')

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/test/url',
      expect.objectContaining({
        method: 'GET'
      })
    )

    const data = await resp.json()
    expect(data).toEqual({ data: 'hello whiskey' })
  })

  it('performs a post', async () => {
    fetchMock.post('http://localhost:3000/api/test/url', {
      status: 201,
      data: { sample: 'response' }
    })

    const resp = await api.post('/test/url', {
      body: { data: { sample: 'params' } }
    })

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/test/url',
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
    fetchMock.put('http://localhost:3000/api/test/url', {
      status: 200,
      data: { sample: 'response' }
    })

    const resp = await api.put('/test/url', {
      body: { data: { sample: 'params' } }
    })

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/test/url',
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
    fetchMock.delete('http://localhost:3000/api/test/url/1', {
      status: 204
    })

    const resp = await api.delete('/test/url/1')

    expect(fetchMock).toHaveBeenCalledWith(
      'http://localhost:3000/api/test/url/1',
      expect.objectContaining({ method: 'DELETE' })
    )

    expect(resp.status).toEqual(204)
  })
})
