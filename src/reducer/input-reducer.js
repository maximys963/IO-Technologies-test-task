import { INPUT_CHANGE } from '../actions/actions'

export const inputChange = (state = {inputValue: ''}, action) =>{
    switch (action.type){
        case INPUT_CHANGE:
            return{
                ...state,
                inputValue: action.value
            };
        default: return state
    }
}