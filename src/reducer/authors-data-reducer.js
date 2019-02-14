import { AUTHORS_DATA_FETCHING,
         INPUT_CHANGE,
         SORT_PAGEVIEW_DOWN
        } from "../actions/actions"

export const authorReducer = (state = {}, action) => {
    switch (action.type){
        case AUTHORS_DATA_FETCHING:
            return{
                ...state,
                authors_data: action.data
            };
            case INPUT_CHANGE:
                return{
                    ...state,
                    authors_data: state.authors_data
                    .map(author => author.name.toLowerCase().indexOf(action.value.toLowerCase())=== -1
                    ? {...author, visible: false}
                    : {...author, visible: true}
                    )
                };
            case SORT_PAGEVIEW_DOWN:
                return {
                    ...state,
                    authors_data: state.authors_data
                    .slice()
                    .sort(function(author1, author2)
                    {return author1.pageviews - author2.pageviews})
            }
        default: return state
    }
};