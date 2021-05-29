const setItem = (key, value) => {
  if (!key || !value || typeof window === 'undefined') {
    return false
  }
  window.localStorage.setItem(key, JSON.stringify(value))
  return true
}

const getItem = (key) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  const value = window.localStorage.getItem(key)
  if (!value) return false
  return JSON.parse(value)
}

const clear = () => {
  if (typeof window === 'undefined') {
    return false
  }
  window.localStorage.clear()
  return true
}

const clearItem = (item) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  window.localStorage.removeItem(item)
  return true
}

module.exports = {
  setItem,
  getItem,
  clear,
  clearItem,
}
