import api from '@/services/api'

// TODO
function checkResponse (response) {
  return response
}

export async function get (params) {
  let response = await api.get('tickets', params)

  return checkResponse(response)
}
