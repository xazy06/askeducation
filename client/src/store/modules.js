import {camelCase} from 'lodash'

const requireModule = require.context('./modules', false, /\.js$/)
const modules = requireModule.keys().reduce((acc, fileName) => {
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  acc[moduleName] = {
    ...requireModule(fileName).default,
    namespaced: true
  }
  return acc
}, {})

export default modules
