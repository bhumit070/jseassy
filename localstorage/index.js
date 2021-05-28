const setItem = (key,value) => {
    if(!item || !value || typeof window === undefined) {
        return false
    }
    localStorage.setItem(key,JSON.stringify(value))
    return true
}

const getItem = (key) => {
    if(!key) {
        return false
    }
    const value = localStorage.getItem(key)
    if(!value) return false
    return JSON.parse(value)
}

module.exports = {
    setItem,
    getItem
}