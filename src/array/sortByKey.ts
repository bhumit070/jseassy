const sortAscByKey = (arr, key) => {
  if (!Array.isArray(arr)) return arr
  return arr.sort((a, b) => {
    if (a[key] > b[key]) return 1
    else if (a[key] < b[key]) return -1
    else return 0
  })
}

const sortDescByKey = (arr, key) => {
  if (!Array.isArray(arr)) return arr
  return arr.sort((a, b) => {
    if (a[key] > b[key]) return -1
    else if (a[key] < b[key]) return 1
    else return 0
  })
}

module.exports = {
  sortAscByKey,
  sortDescByKey,
}
