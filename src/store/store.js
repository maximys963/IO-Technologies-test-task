import { createStore, combineReducers, compose } from 'redux';
import { authorReducer } from '../reducer/authors-data-reducer';
import { inputChange } from '../reducer/input-reducer';
import { pagination } from '../reducer/pagination-reducer';
import { toggleSortButtons } from '../reducer/sorting_buttons_reducer';

const rootReducer = combineReducers({
    toggleSortButtons,
    authorReducer,
    pagination,
    inputChange
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
);
