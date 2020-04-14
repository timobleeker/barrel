const getOptions = (options, method) => {
  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    ...options
  }
}

const apiPath = '/api'
const getUrl = (path) => `${apiPath}${path}`

export default function getApiCore() {
  return {
    get(path, options = {}) {
      return fetch(getUrl(path), getOptions(options, 'GET'))
    },
    post(path, options = {}) {
      return fetch(getUrl(path), getOptions(options, 'POST'))
    },
    put(path, options = {}) {
      return fetch(getUrl(path), getOptions(options, 'PUT'))
    },
    delete(path) {
      return fetch(getUrl(path), getOptions({}, 'DELETE'))
    }
  }
}
