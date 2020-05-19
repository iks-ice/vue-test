const input = document.querySelector('input');
input.focus();

const cacheInput = () => {
    let cachedValue = '';
    return ({target: {value}}) => {
        const isItNaN = isNaN(value) && value !== '-';
        const isDecimals = value.indexOf('.') !== -1 && value.slice(value.indexOf('.') + 1).length > 2;
        if(isItNaN || isDecimals) {
            return input.value = cachedValue;
        }
        cachedValue = value;
    }
}
const maskInput = cacheInput();

input.addEventListener('input', maskInput, false);