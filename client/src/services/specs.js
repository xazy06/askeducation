import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('spec', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('spec', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('spec', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('spec', 'delete', params)

  return checkResponse(response)
}
