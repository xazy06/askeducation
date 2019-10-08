import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('article', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('article', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('article', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('article', 'delete', params)

  return checkResponse(response)
}
