import { WHISKEYS, WHISKEY } from '../fixtures'

const mockApiEndpoint = (data = {}) =>
  jest.fn().mockImplementation(() => new Response(JSON.stringify({ data })))

const mockApi = {
  getWhiskeyIndex: mockApiEndpoint(WHISKEYS),
  getWhiskey: mockApiEndpoint(WHISKEY)
}

export default mockApi