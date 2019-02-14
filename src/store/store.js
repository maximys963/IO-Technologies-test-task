import { createStore, combineReducers, compose } from 'redux';
import { reducer as fromReducer } from 'redux-form';
import { authorReducer } from '../reducer/authors-data-reducer';

const rootReducer = combineReducers({
    authorReducer,
    form: fromReducer
});

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers()
);
