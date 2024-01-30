type NumberOrNumericString = `${number}` | number;

export const sum = (arr: Array<NumberOrNumericString>, initialValue = 0) => {
    if (typeof arr !== 'object') return false;
    return arr.reduce((currentValue, currentElement) => {
        return +currentValue + +currentElement;
    }, initialValue);
};
