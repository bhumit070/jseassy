const object = (formdata: FormData) => {
    const object: Record<string, FormDataEntryValue> = {};
    if (!(formdata instanceof FormData)) return object;
    formdata.forEach((value, key) => {
        object[key as string] = value;
    });
    return object;
};
