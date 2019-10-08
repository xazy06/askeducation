import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('country', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('country', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('country', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('country', 'delete', params)

  return checkResponse(response)
}
