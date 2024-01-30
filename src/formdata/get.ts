const object = (formdata) => {
    const object = {};
    if (!(formdata instanceof FormData)) return object;
    formdata.forEach((value, key) => {
        object[key] = value;
    });
    return object;
};

const array = (formdata) => {
    const array = [];
    if (!(formdata instanceof FormData)) return array;
    formdata.forEach((value, key) => {
        // @ts-ignore
        array.push({
            [key]: value,
        });
    });
    return array;
};

module.exports = {
    object,
    array,
};
