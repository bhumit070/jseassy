const clone = (obj) => {
  if (typeof obj !== 'object') return false
  return Object.assign({}, obj)
}

module.exports = {
  clone,
}
