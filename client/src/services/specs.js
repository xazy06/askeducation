import {checkResponse, http} from '@/services/api'

export async function get (params) {
  let response = await http('spec', 'get', params)
  console.log('response', response)
  return checkResponse(response)
}
