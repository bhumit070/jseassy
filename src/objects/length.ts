export const length = (obj: object) => {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        throw new Error('Invalid argument type. Expected an object.');
    }
    const keysLength = Object.keys(obj).length;
    const symbolicKeysLength = Object.getOwnPropertySymbols(obj).length;
    return keysLength + symbolicKeysLength;
};
