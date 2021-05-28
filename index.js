const { setItem, getItem } = require("./localstorage")
const { ucFirst, wcUpper, rstring, upper } = require("./string")

const str = {
    ucFirst,
    wcUpper,
    rstring,
    upper
}

const ls = {
    setItem,
    getItem,
}

module.exports = {
    str,
    ls
}