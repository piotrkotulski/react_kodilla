import {createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from "../utils/strContains";


//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards
    .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId)

export const getColumnsByList = (state, listId) => {
    return state.columns.filter(column => column.listId === listId);
}
export const getAllLists = state => state.lists;

// action creators
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

export const addCard = ({title, columnId}) => ({type: 'ADD_CARD', payload: {title, columnId}});

export const updateSearchString = ({searchText}) => ({type: 'UPDATE_SEARCHSTRING', payload: searchText.toLowerCase()});

export const addList = (title, description) => {
    return {
        type: 'ADD_LIST',
        payload: {
            title,
            description,
        },
    };
};
export const toggleCardFavorite = (cardId) => {
    return {
        type: 'TOGGLE_CARD_FAVORITE',
        payload: cardId,
    };
};

//SUBREDUCERS

const listsReducer = (statePart = [], action) => {
    switch(action.type) {
        case 'ADD_LIST':
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
}

const columnsReducer = (statePart = [], action) => {
    switch(action.type) {
        case 'ADD_COLUMN':
            return [...statePart, { ...action.payload, id: shortid() }];
        default:
            return statePart;
    }
}

const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
        case 'ADD_CARD':
            return [...statePart, { ...action.payload, id: shortid() }];
        case 'TOGGLE_CARD_FAVORITE':
            return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
        default:
            return statePart;
    }
}

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
        case 'UPDATE_SEARCHSTRING':
            return action.payload
        default:
            return statePart;
    }
}

const reducer = (state, action) => {
    const newState = {
        lists: listsReducer(state.lists, action),
        columns: columnsReducer(state.columns, action),
        cards: cardsReducer(state.cards, action),
        searchString: searchStringReducer(state.searchString, action)
    };

    return newState;
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;