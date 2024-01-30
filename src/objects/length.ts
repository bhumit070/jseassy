export const length = (obj) => {
    if (typeof obj !== 'object') return 0;
    const keysLength = Object.keys(obj).length;
    const symbolicKeysLength = Object.getOwnPropertySymbols(obj).length;
    return keysLength + symbolicKeysLength;
};
