let cmp = 1

const inicialState = {
    dataReserver: [
        {
            id: 1, date: '2023-02-20', time: '7PM',
            nbrPersonne: 4, name: 'Nada', email: 'nada@gmail.com',
            phone: '06000000'
        }],

    dataCommande: [
        { id: cmp++, description: 'CHILLED PEA & CHERVIL SOUP WITH CRÈME FRAÎCHE (250 G)', sousDes: 'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce', prix: 10.00, type: 'tasty', quantité: 15 },
        { id: cmp++, description: 'AUBERGINE DIP (250 G)', sousDes: 'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce', prix: 14.50, type: 'tasty', quantité: 10 },
        { id: cmp++, description: 'CHICKEN WINGS, AGRODOLCE STYLE (250 G)', sousDes: 'Smoked streaky bacon / Frozen peas / Fresh chervil', prix: 12.00, type: 'tasty', quantité: 5 },
        { id: cmp++, description: 'HALLOUMI WITH GRIDDLED VEGETABLES (250 G)', sousDes: 'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes', prix: 9.00, type: 'tasty', quantité: 1 },
        { id: cmp++, description: 'CRAB CAKES (250 G)', sousDes: 'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce', prix: 18.50, type: 'tasty', quantité: 5 },
        { id: cmp++, description: 'ACORD CANDY COOKIES (250 G)', sousDes: 'Fish / Lemon / Mayo / Fennel seed', prix: 8.00, type: 'dessert', quantité: 6 },
        { id: cmp++, description: 'BROWNIES (250 G)', sousDes: 'Smoked streaky bacon / Frozen peas / Fresh chervil', prix: 5.50, type: 'dessert', quantité: 15 },
        { id: cmp++, description: 'CREAMY CHOCOLATE FUDGE (250 G)', sousDes: 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive ', prix: 12.40, type: 'dessert', quantité: 12 },
        { id: cmp++, description: 'WHITE CHOCOLATE RASPBERRY CHEESECAKE ', sousDes: 'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes', prix: 10.50, type: 'dessert', quantité: 3 },
        { id: cmp++, description: 'BLACK MAGIC CAKE (250 G) ', sousDes: 'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce', prix: 7.50, type: 'dessert', quantité: 9 },
        { id: cmp++, description: 'CARAMEL FRAPPUCCINO (250 G)  ', sousDes: 'Fish / Lemon / Mayo / Fennel seed', prix: 18.00, type: 'derink', quantité: 15 },
        { id: cmp++, description: 'LEMONADE (250 G)', sousDes: 'Smoked streaky bacon / Frozen peas / Fresh chervil', prix: 15.50, type: 'derink', quantité: 11 },
        { id: cmp++, description: 'HOT COCOA MIX IN A JAR (250 G)', sousDes: 'Watermelon / Red onion / Feta cheese / Fresh mint / Olive ', prix: 22.40, type: 'derink', quantité: 5 },
        { id: cmp++, description: 'ICED MOCHA FUSION SHAKE (250 G) ', sousDes: 'Beans / Halloumi cheese / Asparagus / Courgettes / Cherry tomatoes', prix: 20.50, type: 'derink', quantité: 3 },
        { id: cmp++, description: 'HOT APPLE CIDER (250 G) ', sousDes: 'Onions / Fresh flat-leaf parsley / Mashed potatoes / Pepper / Eggs / Tartare sauce', prix: 17.50, type: 'derink', quantité: 4 }
    ],
    panier: [
        { id: 1, description: 'CHILLED PEA & CHERVIL SOUP WITH CRÈME FRAÎCHE (250 G)', prix: 10.00, qtc: 5 },
    ],
    clientCommander:[]
    
}
export const ReducerA = (state = inicialState, action) => {
    switch (action.type) {
        case 'AddR':
            const newReservation = {
                id: state.dataReserver[state.dataReserver.length - 1].id + 1,
                date: action.reservation.date,
                time: action.reservation.time,
                nbrPersonne: action.reservation.nbrPersonne,
                name: action.reservation.name,
                email: action.reservation.email,
                phone: action.reservation.phone
            }
            return { ...state, dataReserver: state.dataReserver.concat(newReservation) }
        case 'AddC':
            const newCommande = {
                id: state.panier[state.panier.length - 1].id + 1,
                description: action.commande.description,
                prix: action.commande.prix,
                qtc: action.commande.qtc,
            }
            return { ...state, panier: state.panier.concat(newCommande) }
        case 'UpdateC':
            const qtt = state.dataCommande.find((p) => p.id == action.cmd.id)
            if (action.cmd.qtc >= 1) {
                qtt.quantité = parseInt(qtt.quantité) - parseInt(action.cmd.qtc)
            }
            else {
                console.log('ERR')
            }
            return state
        case 'ClientCmd':
            const newClientCmd = {
                name:action.dataClient.name,
                email: action.dataClient.email,
                phone: action.dataClient.phone,
                ville: action.dataClient.ville,
                livraison: action.dataClient.livraison,
                paiement: action.dataClient.paiement,
                idCommande:action.dataClient.id
            }
            return { ...state, clientCommander: state.clientCommander.concat(newClientCmd) }
        case 'DeleteC':
            return { ...state, panier: state.panier.filter(p => p.id != action.id) }

    }
    return state
}
export default ReducerA;