import { createStore, combineReducers, compose } from 'redux';
import { authorReducer } from '../reducer/authors-data-reducer';
import { inputChange } from '../reducer/input-reducer'

const rootReducer = combineReducers({
    authorReducer,
    inputChange
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
);
