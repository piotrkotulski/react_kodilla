import {createStore} from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
    switch (action.type) {

        case 'ADD_COLUMN':
            return  { ...state, columns: [...state.columns, { id: shortid(), ...action.payload  }]};

        case 'ADD_CARD':
            const newCard = {
                id: shortid(),
                columnId: action.payload.columnId,
                title: action.payload.title
            };
            return {
                ...state,
                cards: [...state.cards, newCard],
            };

        case 'UPDATE_SEARCHSTRING':

            return { ...state, searchString: action.payload };

        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;