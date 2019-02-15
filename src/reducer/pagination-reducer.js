import { NEXT_PAGE, PREV_PAGE } from '../actions/actions';

export const pagination = (state = {left_limit: 0, right_limit: 10, currentPage: 1}, action) =>{
    switch (action.type){
        case NEXT_PAGE:
            return{
                ...state,
                left_limit: state.left_limit + 10,
                right_limit: state.right_limit + 10,
                currentPage: state.currentPage + 1
            };
        case PREV_PAGE:
            return{
                ...state,
                left_limit: state.left_limit - 10,
                right_limit: state.right_limit - 10,
                currentPage: state.currentPage - 1,
            };    
        default: return state
    }
}