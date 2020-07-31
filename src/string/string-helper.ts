const notCapitalize = ["do", "de", "da", "com", "por","e"];

export function capitalize(texto: string) {
    return `${texto[0].toUpperCase()}${texto.slice(1).toLowerCase()}`;
}

export function capitalizeWords(texto: string) {
    if (texto) return texto.split(' ').map((word, index) => {
        if (index > 0 && notCapitalize.some(not => not == removeAccent(word))) return word;
        return capitalize(word as any);
    }).join(' ');

    return texto;
}

export function removeAccent(texto: string) {
    return texto.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
}
