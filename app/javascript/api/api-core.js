const getOptions = (options, method) => {
  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    ...options
  }
}

const apiUrl = 'http://localhost:3000/api'
const getUrl = (path) => `${apiUrl}${path}`

export default function getApiCore() {
  return {
    get(path, options = {}) {
      return fetch(getUrl(path), getOptions(options, 'GET'))
    }
  }
}
