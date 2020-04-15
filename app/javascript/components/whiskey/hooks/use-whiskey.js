import { useState, useEffect } from 'react'
import { camelizeKeys } from 'humps'
import getApi from '../../../api'

const useWhiskey = (id) => {
  const api = getApi()
  const [whiskey, setWhiskey] = useState({})

  async function fetchData() {
    const resp = await api.getWhiskey(id)
    if (resp.ok) {
      const { data } = await resp.json()
      setWhiskey(camelizeKeys(data))
    } else {
      // TODO handle errors
      const { errors } = await resp.json()
      console.log(errors)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return { whiskey }
}

export default useWhiskey
