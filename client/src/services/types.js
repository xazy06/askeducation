import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('type', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('type', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('type', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('type', 'delete', params)

  return checkResponse(response)
}
