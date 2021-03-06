import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('school', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('school', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('school', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('school', 'delete', params)

  return checkResponse(response)
}
