import { AUTHORS_DATA_FETCHING,
         INPUT_CHANGE,
         SORT_PAGEVIEW_DOWN,
         SORT_PAGEVIEW_UP,
         SORT_PUBLICATIONS_DOWN,
         SORT_PUBLICATIONS_UP,
         FIND_LEADERS
        } from "../actions/actions"

export const authorReducer = (state = {}, action) => {
    switch (action.type){
        case AUTHORS_DATA_FETCHING:
            return {
                ...state,
                authors_data: action.data
            };
            case INPUT_CHANGE:
                return {
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
            case SORT_PAGEVIEW_UP:
                return {
                    ...state,
                    authors_data: state.authors_data
                    .slice()
                    .sort(function(author1, author2)
                    {return author2.pageviews - author1.pageviews})
            }
            case SORT_PUBLICATIONS_DOWN:
                return {
                    ...state,
                    authors_data: state.authors_data
                    .slice()
                    .sort(function(author1, author2)
                    {return author1.count_pub - author2.count_pub})
            }
            case SORT_PUBLICATIONS_UP:
                return {
                    ...state,
                    authors_data: state.authors_data
                    .slice()
                    .sort(function(author1, author2)
                    {return author2.count_pub - author1.count_pub})
            }
            case FIND_LEADERS:
            return{
                ...state
            }

        default: return state
    }
};