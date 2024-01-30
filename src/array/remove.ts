export const remove = <TArray extends Array<any>, TValue = unknown>(
    arr: TArray,
    value: TValue
) => {
    if (!Array.isArray(arr)) return arr;
    return arr.filter((num) => num !== value);
};

export const removeByKey = <
    TArray extends Array<Record<string, unknown>>,
    TKey extends keyof TArray[number] extends string ? string : never,
    TValue,
>(
    arr: TArray,
    key: TKey,
    value: unknown
) => {
    if (!key || !Array.isArray(arr) || !value) return arr;
    return arr.filter((obj) => obj[key] !== value);
};
