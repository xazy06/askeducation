import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('programm', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('programm', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('programm', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('programm', 'delete', params)

  return checkResponse(response)
}
