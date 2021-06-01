const freeze = (obj) => {
  if (typeof obj !== 'object') return 0
  return Object.freeze(obj)
}

module.exports = freeze
