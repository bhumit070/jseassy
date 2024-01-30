const keys = (formdata) => {
    const keys: string[] = [];
    if (!(formdata instanceof FormData)) return keys;
    // @ts-ignore
    for (const key of formdata.keys()) {
        keys.push(key);
    }
    return keys;
};

const values = (formdata) => {
    const values = [];
    if (!(formdata instanceof FormData)) return values;
    // @ts-ignore
    for (const value of formdata.values()) {
        // @ts-ignore
        values.push(value);
    }
    return values;
};

module.exports = {
    keys,
    values,
};
