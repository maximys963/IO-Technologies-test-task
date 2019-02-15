import { TOGGLE_PAGEVIEWS,
    TOGGLE_PUBLICATIONS
} from '../actions/actions';

export const toggleSortButtons = (state = {publ_sort_direction: true, view_sort_direction: true}, action) =>{
    switch (action.type){
    case TOGGLE_PAGEVIEWS:
        return{
            ...state,
            view_sort_direction: !state.view_sort_direction
        };
    case TOGGLE_PUBLICATIONS:
        return{
            ...state,
            publ_sort_direction: !state.publ_sort_direction
        };
    default: return state;
    }
};