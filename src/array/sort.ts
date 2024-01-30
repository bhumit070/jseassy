export const sortAsc = <T = any>(arr: Array<T>) => {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.sort((a, b) => {
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
    });
};

export const sortDesc = <T = any>(arr: Array<T>) => {
    if (!Array.isArray(arr)) {
        return arr;
    }
    return arr.sort((a, b) => {
        if (a > b) return -1;
        else if (a < b) return 1;
        else return 0;
    });
};
