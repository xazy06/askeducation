import {checkResponse, http} from '@/services/api'

export async function post (params) {
  let response = await http('callback', 'post', params)

  return checkResponse(response)
}
