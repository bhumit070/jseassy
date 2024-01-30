const isValidFormData = (formData: FormData) => {
    if (!formData || !(formData instanceof FormData)) {
        throw new Error(
            'Invalid argument type. Expected an instance of FormData.'
        );
    }
};

export const keys = (formdata: FormData) => {
    isValidFormData(formdata);
    const keys: string[] = [];
    if (!(formdata instanceof FormData)) {
        throw new Error(
            'Invalid argument type. Expected an instance of FormData.'
        );
    }
    formdata.forEach((value, key) => {
        keys.push(key);
    });
    return keys;
};

export const values = (formdata: FormData): Array<FormDataEntryValue> => {
    isValidFormData(formdata);
    const values: Array<FormDataEntryValue> = [];
    formdata.forEach((value) => {
        values.push(value);
    });
    return values;
};
