export const getUpcomingDeliveries = rents => {
    const pendingDeliveries = rents.filter(rent => rent.status === 'pending');
    return pendingDeliveries.sort((a, b) => new Date(a.due_date) - new Date(b.due_date)).slice(0, 5);
}

export const formatDate = string => {
    const date = new Date(string);
    return Intl.DateTimeFormat('es-SV', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        week: '2-digit',
    }).format(date);
}

export const normalize = (text) =>
    text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[\s\W_]+/g, "");