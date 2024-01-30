const length = (obj) => {
  if (typeof obj !== 'object') return 0
  const keysLength = Object.keys(obj).length
  const symbolickeysLength = Object.getOwnPropertySymbols(obj).length
  return keysLength + symbolickeysLength
}

module.exports = length
