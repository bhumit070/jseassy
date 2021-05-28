function ucFirst(str) {
    if(typeof str !== 'string') return false
    return str.charAt(0).toUpperCase() + str.substring(1, str.length)
}

function wcUpper(str) {
    if(typeof str !== 'string') return false
    str = str.split(' ')
    const upperString = []
    str.map((word) => upperString.push(word.charAt(0).toUpperCase() + word.substring(1, word.length)))
    return upperString.join(' ')
}

module.exports = {
    ucFirst,
    wcUpper
}