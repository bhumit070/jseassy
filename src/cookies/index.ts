export const set = (key: string, value: string) => {
    if (
        typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !key
    )
        return false;

    return (document.cookie = `${key}=${value}`);
};

export const get = (key: string): string => {
    if (
        typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !key
    ) {
        return '';
    }

    const value = document.cookie.split(';');
    const mappedValue = value.map((cookie) => cookie.split('='));
    for (let i = 0; i < mappedValue.length; i++) {
        if (value[i][0].trim() === key) {
            return value[i][1];
        }
    }
    return '';
};

// if key is passed remove cookie with specific cookie
// else remove entire cookie store
export const remove = (key?: string) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
        return false;
    }

    if (key) {
        return (document.cookie =
            key + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
    } else {
        const value = document.cookie.split(';');
        const mappedValue = value.map((cookie) => cookie.split('='));
        for (let i = 0; i < mappedValue.length; i++) {
            document.cookie =
                value[i][0].trim() +
                '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
};
