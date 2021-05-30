const set = (key, value) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  window.localStorage.setItem(key, JSON.stringify(value))
  return true
}

const get = (key) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  const value = window.localStorage.getItem(key)
  if (!value) return false
  return JSON.parse(value)
}

const remove = (key) => {
  if (typeof window === 'undefined') {
    return false
  }
  if (!key) {
    return window.localStorage.clear()
  }
  return localStorage.removeItem(key)
}

module.exports = {
  set,
  get,
  remove,
}
