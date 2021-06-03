const str = {
  ucFirst: require('./string/index').ucFirst,
  wcUpper: require('./string/index').wcUpper,
  rstring: require('./string/index').rstring,
  upper: require('./string/index').upper,
}

const ls = {
  set: require('./localstorage/index').set,
  get: require('./localstorage/index').get,
  remove: require('./localstorage/index').remove,
}

const arr = {
  sum: require('./array/sum'),
  sortAsc: require('./array/sort').sortAsc,
  sortDesc: require('./array/sort').sortDesc,
  clone: require('./array/clone'),
}

const obj = {
  clone: require('./objects/clone'),
  length: require('./objects/length'),
  freeze: require('./objects/freeze'),
}

const ssn = {
  set: require('./sessions/index').set,
  get: require('./sessions/index').get,
  clear: require('./sessions/index').clear,
}

const lcn = {
  getCurrentLocation: require('./location/index'),
}

module.exports = {
  str,
  ls,
  arr,
  obj,
  ssn,
  lcn,
}
