export const normalize = (text) =>
    text
        .toString()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\s\W_]+/g, "");

export const formatFullDate = (dateString) => {
    // Parse YYYY-MM-DD string
    const [year, month, day] = dateString.split('-').map(Number);
    // Create a Date object in local time, month is 0-indexed
    const date = new Date(year, month - 1, day);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('es-ES', options);
};