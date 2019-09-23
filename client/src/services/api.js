import axios from 'axios'

const validStatuses = [
  200, 201, 202, 203, 204,
  300, 301, 302, 303, 304
]

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Content-Type'] = 'application/json'

axios.create({
  baseURL: 'http://localhost:8081/api/'
})

export function checkResponse (response) {
  if (validStatuses.includes(response.status)) {
    if (Object.keys(response.data).some(key => key === 'error')) {
      return Promise.reject(response.data.error)
    }

    return response.data.result
  }

  // If not authorized then reset token
  // and redirect to login page
  if (response.status === 401) {
    localStorage.clear()
    return Promise.reject(new Error('USER_ANONYMOUS'))
  }

  let err = new Error(response.statusText)
  err.response = response

  return Promise.reject(err)
}

export function http (method, type, params) {
  params = typeof params === 'string' ? [params] : params
  // let data = dataOptions(method, params, hash)

  return axios[type]((`http://localhost:8081/api/${method}`), params)
}
