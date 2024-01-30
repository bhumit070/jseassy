const clone = (arr) => {
  if (typeof arr !== 'object') return false
  const clonedArr = [...arr]
  return clonedArr
}

module.exports = clone
