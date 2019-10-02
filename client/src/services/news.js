import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('news', 'get', params)
  console.log('response', response)
  return checkResponse(response)
}

export async function post (params) {
  let response = await http('news', 'post', params)
  console.log('response', response)
  return checkResponse(response)
}

export async function put (params) {
  let response = await http('news', 'put', params)
  console.log('response', response)
  return checkResponse(response)
}

export async function remove (params) {
  let response = await http('news', 'delete', params)
  console.log('response', response)
  return checkResponse(response)
}
