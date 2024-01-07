import shortid from "shortid";
import strContains from "../utils/strContains";

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_COLUMN');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

// action creators
export const addCard = ({title, columnId}) => ({type: ADD_CARD, payload: {title, columnId}});
export const toggleCardFavorite = (cardId) => {
    return {
        type: TOGGLE_CARD_FAVORITE,
        payload: cardId,
    };
};


const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
        case ADD_CARD:
            return [...statePart, { ...action.payload, id: shortid() }];
        case TOGGLE_CARD_FAVORITE:
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

export default cardsReducer;