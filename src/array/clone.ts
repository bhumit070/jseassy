export const clone = <T extends any[]>(arr: T): T => {
    if (Array.isArray(arr)) {
        return [...arr] as T;
    }
    throw new Error('Invalid argument type. Expected an array.');
};
