export const ucFirst = (str: string): string => {
    if (typeof str !== 'string') return str;
    return str.charAt(0).toUpperCase() + str.substring(1, str.length);
};

export const wcUpper = (str: string): string => {
    if (typeof str !== 'string') return str;
    const splittedString = str.split(' ');
    const upperString: string[] = [];
    splittedString.map((word) =>
        upperString.push(
            // @ts-ignore
            word.charAt(0).toUpperCase() + word.substring(1, word.length)
        )
    );
    return upperString.join(' ');
};

export const rstring = (str: string): string => {
    const reverseString = str.split('').reverse().join('');
    return reverseString;
};

export const upper = (str: string): string => {
    return str.toUpperCase();
};
