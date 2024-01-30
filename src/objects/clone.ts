export const clone = (obj: object): object => {
    if (typeof obj === 'object' && !Array.isArray(obj)) {
        return { ...obj };
    }
    throw new Error('Invalid argument type');
};
