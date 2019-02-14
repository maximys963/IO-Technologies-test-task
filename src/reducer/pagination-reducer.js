import { NEXT_PAGE } from '../actions/actions';

export const pagination = (state = {left_limit: 0, right_limit: 10}, action) =>{
    switch (action.type){
        case NEXT_PAGE:
            return{
                ...state,
                left_limit: state.left_limit + 10,
                right_limit: state.right_limit + 10
            };
        default: return state
    }
}