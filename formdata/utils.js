const keys = (formdata) => {
  const keys = []
  if (!(formdata instanceof FormData)) return keys
  for (key of formdata.keys()) {
    keys.push(key)
  }
  return keys
}

const values = (formdata) => {
  const values = []
  if (!(formdata instanceof FormData)) return values
  for (value of formdata.values()) {
    values.push(value)
  }
  return values
}

module.exports = {
  keys,
  values,
}
