import {checkResponse, http} from '@/services/api'

export async function post (params) {
  let response = await http('upload', 'post', params)

  return checkResponse(response)
}

export async function get (params) {
  let response = await http('upload', 'get', params)

  return checkResponse(response)
}
