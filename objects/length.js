const length = (obj) => {
  if (typeof obj !== 'object') return 0
  return Object.keys(obj).length
}

module.exports = length
