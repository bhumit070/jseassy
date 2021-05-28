const sortAsc = (arr) => {
  if (typeof arr !== 'object') return false
  return arr.sort((a, b) => a - b)
}

const sortDesc = (arr) => {
  if (typeof arr !== 'object') return false
  return arr.sort((a, b) => b - a)
}

module.exports = {
  sortAsc,
  sortDesc,
}
