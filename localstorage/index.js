const setItem = (key, value) => {
  if (!key || !value || typeof window === 'undefined') {
    return false
  }
  localStorage.setItem(key, JSON.stringify(value))
  return true
}

const getItem = (key) => {
  if (!key || typeof window === 'undefined') {
    return false
  }
  const value = localStorage.getItem(key)
  if (!value) return false
  return JSON.parse(value)
}

module.exports = {
  setItem,
  getItem,
}
