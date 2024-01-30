const set = (key, value = undefined) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  sessionStorage.setItem(key, JSON.stringify(value))
  return true
}

const get = (key) => {
  if (!key) return false
  const value = sessionStorage.getItem(key)
  if (!value) return false
  return JSON.parse(value)
}

const clear = (key) => {
  if (!key) return sessionStorage.clear()
  return sessionStorage.clear(key)
}

module.exports = {
  set,
  get,
  clear,
}
