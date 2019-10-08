import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('city', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('city', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('city', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('city', 'delete', params)

  return checkResponse(response)
}
