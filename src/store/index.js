import { createStore } from 'vuex'

const store = createStore({
    state: {
        deck: [],
        discardPile: [],

        hand: [],
        player1lane: [],
        player2lane: [],
    },
    mutations: {
        setDeck(state, deck) {
            state.deck = deck;
        },
        setHand(state, hand) {
            state.hand = hand;
        },
        setPlayer1lane(state, player1lane) {
            state.player1lane = player1lane;
        },
    },
    actions: {
        async getDeck({ dispatch }) {
            // retrieve the deck from storage (e.g. a database or file)
            // let deck = await getFromStorage();

            // update the deck in the store
            // commit("setDeck", deck);

            // until we have logic to save/load from a db, just create a new deck on the fly
            dispatch('createDeck')
        },
        async createDeck({ commit }) {
            // define an array of card objects
            let deck = [
                {
                    name: "The Pale Man",
                    description: "A ghostly figure with skin as white as bone and eyes that seem to follow you wherever you go.",
                    attack: 8,
                    defense: 6,
                    image: "the_pale_man.png",
                },
                {
                    name: "The Rotted",
                    description: "A zombie-like creature with decomposing flesh and a relentless hunger for human brains.",
                    attack: 9,
                    defense: 4,
                    image: "the_rotted.png",
                },
                {
                    name: "The Wendigo",
                    description: "A spirit of the cold, dark forests that takes the form of a humanoid creature with long, sharp claws and antlers.",
                    attack: 10,
                    defense: 5,
                    image: "the_wendigo.png",
                },
                {
                    name: "The Banshee",
                    description: "A ghostly woman with a chilling shriek that can kill those who hear it.",
                    attack: 7,
                    defense: 8,
                    image: "the_banshee.png",
                },
                {
                    name: "The Grim Reaper",
                    description: "The personification of death, wielding a deadly scythe and coming to collect the souls of the living.",
                    attack: 10,
                    defense: 10,
                    image: "the_grim_reaper.png",
                },
                {
                    name: "The Cultist",
                    description: "A member of a twisted, ancient cult that performs gruesome rituals in the name of their dark gods.",
                    attack: 6,
                    defense: 8,
                    image: "the_cultist.png",
                },
                {
                    name: "The Witch",
                    description: "An evil sorceress with the power to cast spells and curses upon her enemies.",
                    attack: 8,
                    defense: 7,
                    image: "the_witch.png",
                },
                {
                    name: "The Haunted House",
                    description: "A malevolent spirit that resides in a decrepit, abandoned mansion, luring in unsuspecting victims.",
                    attack: 9,
                    defense: 6,
                    image: "the_haunted_house.png",
                },
                {
                    name: "The Possessed",
                    description: "A person who has been taken over by a malevolent spirit, acting as its host and carrying out its evil deeds.",
                    attack: 7,
                    defense: 9,
                    image: "the_possessed.png",
                },
                {
                    name: "The Necromancer",
                    description: "A magician who has mastered the art of raising the dead and controlling them as undead minions.",
                    attack: 8,
                    defense: 8,
                    image: "the_necromancer.png",
                },
                // add more cards here
            ];

            // update the deck in the store
            commit("setDeck", deck);

            // save the deck to storage (e.g. a database or file)
            // saveToStorage(deck);
        },
        shuffleDeck({ state, commit }) {
            // TODO: Put this on the backend
            const shuffleHelper = (array) => {
                // loop through the array
                for (let i = array.length - 1; i > 0; i--) {
                    // generate a random index
                    const j = Math.floor(Math.random() * (i + 1));
                    // swap the elements at index i and j
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            }

            // shuffle the deck
            const deck = shuffleHelper([...state.deck])

            // update the deck in the store
            commit("setDeck", deck);
        },

        setHand({ commit }, value) {
            commit("setHand", value);
        },

        setPlayer1lane({ commit }, value) {
            commit("setPlayer1lane", value);
        },

        drawCard({ state, commit }) {
            // remove the first card from the deck
            // let card = state.deck[0];

            // Grab a card, but copy the deck first. Shift is destructive and we want to keep changes isolated in mutators.
            const deckClone = [...state.deck]
            let card = deckClone.shift();

            if (card) {
                // add the drawn card to the hand
                let hand = [...state.hand, card];

                // update the deck and hand in the store
                commit("setDeck", deckClone);
                commit("setHand", hand);

                // return the drawn card
                return card;
            }

        },

    },
})

export default store