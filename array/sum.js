const sum = (arr, initialValue = 0) => {
    if(typeof arr !== "object") return false
    return arr.reduce((currentValue,currentElement) => {
        return currentValue + parseInt(currentElement)
    }, initialValue)
}

module.exports = sum