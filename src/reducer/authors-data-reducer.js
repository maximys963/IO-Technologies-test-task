import { AUTHORS_DATA_FETCHING} from "../actions/actions"

export const authorReducer = (state = {}, action) => {
    switch (action.type){
        case AUTHORS_DATA_FETCHING:
            return{
                ...state,
                authors_data: action.data
            };
        default: return state
    }
};