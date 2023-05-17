export const addReservation = (reservation) => {
    return { type: 'AddR', reservation }
}
export const addCommande = (commande) => {
    return { type: 'AddC', commande }
}
export const updateQuantité = (cmd) => {
    return { type: 'UpdateC', cmd }
}
export const deleteCommande = (id) => {
    return { type: 'DeleteC', id }
}
export const clientCommander = (dataClient) => {
    return { type: 'ClientCmd', dataClient }
}