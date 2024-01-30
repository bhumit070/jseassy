export const set = (key, value) => {
    if (
        typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !key
    )
        return false;

    return (document.cookie = `${key}=${value}`);
};

export const get = (key) => {
    if (
        typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !key
    )
        return false;
    let value: any = document.cookie.split(';');
    value = value.map((cookie) => cookie.split('='));
    for (let i = 0; i < value.length; i++) {
        if (value[i][0].trim() === key) {
            return value[i][1];
        }
    }
    return false;
};

export const remove = (key) => {
    if (typeof window === 'undefined' || typeof document === 'undefined')
        return false;
    if (key) {
        return (document.cookie =
            key + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;');
    } else {
        let value: any = document.cookie.split(';');
        value = value.map((cookie) => cookie.split('='));
        for (let i = 0; i < value.length; i++) {
            document.cookie =
                value[i][0].trim() +
                '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
    }
};
