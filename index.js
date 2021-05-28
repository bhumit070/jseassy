const { setItem, getItem } = require("./localstorage")
const { ucFirst, wcUpper, rstring } = require("./string")

const str = {
    ucFirst,
    wcUpper,
    rstring
}

const ls = {
    setItem,
    getItem,
}

module.exports = {
    str,
    ls
}