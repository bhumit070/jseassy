import { jsonParse } from '../helper';

export const set = (key: string, value: unknown) => {
    if (!key || typeof window === 'undefined') {
        return false;
    }
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    sessionStorage.setItem(key, value as string);
};

export const get = <T extends unknown>(key: string): T | null => {
    const value = sessionStorage.getItem(key) as string;
    return value ? jsonParse(value) : value;
};

export const clear = (key: string) => {
    return key ? sessionStorage.removeItem(key) : sessionStorage.clear();
};
