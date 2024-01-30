const isLocalStorageAvailable = () => {
    if (typeof window === undefined || !window.localStorage) {
        throw new Error('localStorage is not available in this environment');
    }
};

export const set = (key: string, value: unknown) => {
    isLocalStorageAvailable();
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    localStorage.setItem(key, value as string);
};

export const get = <TValue = unknown>(key: string): TValue | null => {
    isLocalStorageAvailable();
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : value;
};

export const remove = (key: string) => {
    isLocalStorageAvailable();
    key ? localStorage.removeItem(key) : localStorage.clear();
};
