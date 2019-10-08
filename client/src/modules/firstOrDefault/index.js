const getElement = (collection) => {
  if (Object.prototype.toString.call(collection) !== '[object Array]') {
    return {}
  }

  if (collection.length === 0) {
    return {}
  }

  return collection[0]
}

export default getElement
