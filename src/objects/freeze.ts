export const freeze = (obj: object) => {
    if (typeof obj !== 'object') {
        throw new Error('Invalid argument type. Expected an object.');
    }
    return Object.freeze(obj);
};
