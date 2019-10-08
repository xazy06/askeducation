import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('news', 'get', params)

  return checkResponse(response)
}

export async function post (params) {
  let response = await http('news', 'post', params)

  return checkResponse(response)
}

export async function put (params) {
  let response = await http('news', 'put', params)

  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('news', 'delete', params)

  return checkResponse(response)
}
