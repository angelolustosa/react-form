export const maskCep = (value) => {
    return value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
}