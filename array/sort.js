const sortAsc = (arr) => {
  if (typeof arr !== 'object') return false
  return arr.sort((a, b) => {
    if (a > b) return 1
    else if (a < b) return -1
    else return 0
  })
}

const sortDesc = (arr) => {
  if (typeof arr !== 'object') return false
  return arr.sort((a, b) => {
    if (a > b) return -1
    else if (a < b) return 1
    else return 0
  })
}

module.exports = {
  sortAsc,
  sortDesc,
}
