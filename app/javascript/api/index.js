import getApiCore from './api-core'

const whiskeyEndpoint = '/whiskeys'

export default function getApi() {
  const apiCore = getApiCore()

  return {
    getWhiskeyIndex() {
      return apiCore.get(whiskeyEndpoint)
    },
    getWhiskey(id) {
      return apiCore.get(`${whiskeyEndpoint}/${id}`)
    },
    createWhiskey(params) {
      return apiCore.post(whiskeyEndpoint, { body: JSON.stringify(params) })
    },
    updateWhiskey(id, params) {
      return apiCore.put(`${whiskeyEndpoint}/${id}`, {
        body: JSON.stringify(params)
      })
    },
    deleteWhiskey(id) {
      return apiCore.delete(`${whiskeyEndpoint}/${id}`)
    }
  }
}
