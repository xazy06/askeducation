import {checkResponse, http} from '@/services/api'

export async function post (params) {
  let response = await http('upload', 'post', params)

  return checkResponse(response)
}
