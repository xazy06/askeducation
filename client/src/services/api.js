import axios from 'axios'
import {isUndefined, isNull, omitBy} from 'lodash'

const instance = axios.create({
  baseURL: 'http://localhost:8081/api/',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

instance.defaults.headers.common['Content-Type'] = 'application/json'

const DATA_OPTIONS = {}

function dataOptions (method, params) {
  let options = DATA_OPTIONS

  const objectOption = {
    method,
    params
  }
  const args = omitBy(objectOption, isUndefined)

  options = {
    ...options,
    ...args
  }

  return options
}

function paramsFormat (params) {
  if (params === undefined) {
    return {}
  }

  return JSON.stringify(params)
}

const validStatuses = [
  200, 201, 202, 203, 204,
  300, 301, 302, 303, 304
]

export function checkResponse (response) {
  if (response.error === null) {
    return response.value
  }

  return response
  // if (validStatuses.includes(response.status)) {
  //   if (Object.keys(response.data).some(key => key === 'error')) {
  //     return Promise.reject(response.data.error)
  //   }
  //
  //   return response.data.result
  // }
  //
  // // If not authorized then reset token
  // // and redirect to login page
  // if (response.status === 401) {
  //   localStorage.clear()
  //   return Promise.reject(new Error('USER_ANONYMOUS'))
  // }
  //
  // let err = new Error(response.statusText)
  // err.response = response
  //
  // return Promise.reject(err)
}

export const esc = encodeURIComponent

export function qs (params) {
  return (
    Object
      .keys(params)
      .map(k => esc(k) + ':' + esc(params[k]))
      .join(';')
  )
}

export function qsValues (params) {
  return (
    Object
      .values(params).join(';')
  )
}

export function http (method, type, params) {
  params = typeof params === 'string' ? [params] : params
  let data = paramsFormat(params, method)

  if (params.file) {
    return instance[type](method, params.formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  }

  if (type === 'delete') {
    method = `${method}/${params.id}`
  }

  if (type === 'put') {
    method = `${method}/${params._id}`
  }

  if (type === 'get' && params && ('id' in params)) {
    method = `${method}/${params.id}`
  }

  return instance[type](method, data).then(response => response.data)
}

// axios.interceptors.request.use((config) => {
//   // console.log(config.data, 'axios')
//   return config
// }, (error) => {
//   // Do something with request error
//   return Promise.reject(error)
// })
//
// axios.interceptors.response.use(response => {
//   return response
// })
