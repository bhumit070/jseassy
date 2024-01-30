const convertToFormData = (data) => {
    if (Array.isArray(data)) return convertArrayToFormData(data);
    if (!Array.isArray(data) && typeof data === 'object')
        return convertObjectToFormData(data);
    return false;
};

const convertObjectToFormData = (data) => {
    const fd = new FormData();
    for (value in data) {
        fd.append(value, object[value]);
    }
    return fd;
};

const convertArrayToFormData = (data) => {
    const fd = new FormData();
    data.map((value, index) => {
        if (typeof value === 'object') {
            const key = Object.keys(value)[0];
            fd.append(key, value[key]);
        } else {
            fd.append(index, value);
        }
    });
    return fd;
};

module.exports = convertToFormData;
