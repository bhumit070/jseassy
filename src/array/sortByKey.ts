export const sortAscByKey = <T extends Record<string, unknown>>(
    arr: Array<T>,
    key: keyof T
) => {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        else if (a[key] < b[key]) return -1;
        else return 0;
    });
};

export const sortDescByKey = <T extends Record<string, unknown>>(
    arr: Array<T>,
    key: keyof T
) => {
    if (!Array.isArray(arr)) return arr;
    return arr.sort((a, b) => {
        if (a[key] > b[key]) return -1;
        else if (a[key] < b[key]) return 1;
        else return 0;
    });
};
