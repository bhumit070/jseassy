const convertToFormData = (data: unknown) => {
    if (data) {
        if (Array.isArray(data)) {
            return convertArrayToFormData(data);
        }
        if (!Array.isArray(data) && typeof data === 'object') {
            return convertObjectToFormData(data);
        }
    }
    throw new Error('Invalid argument type. Expected an object or array.');
};

const convertObjectToFormData = <T extends object>(data: T) => {
    const fd = new FormData();
    for (const key in data) {
        fd.append(key as never, data[key] as FormDataEntryValue);
    }
    return fd;
};

const convertArrayToFormData = (data: Array<FormDataEntryValue>) => {
    const fd = new FormData();
    data.map((value, index) => {
        fd.append(index as never, value);
    });
    return fd;
};
