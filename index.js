const { sum, sortAsc, sortDesc, clone } = require('./array')
const { set, get, remove } = require('./localstorage')
const { ucFirst, wcUpper, rstring, upper } = require('./string')
const { clone: objClone } = require('./objects')
const str = {
  ucFirst,
  wcUpper,
  rstring,
  upper,
}

const ls = {
  set,
  get,
  remove,
}

const arr = {
  sum,
  sortAsc,
  sortDesc,
  clone,
}

const obj = {
  objClone,
}

module.exports = {
  str,
  ls,
  arr,
  obj,
}
