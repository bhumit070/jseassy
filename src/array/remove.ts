export const remove = (arr, value) => {
    if (!Array.isArray(arr)) return arr;
    return arr.filter((num) => num !== value);
};

export const removeByKey = (arr, key, value) => {
    if (!key || !Array.isArray(arr) || !value) return arr;
    return arr.filter((obj) => obj[key] !== value);
};
