import { AUTHORS_DATA_FETCHING, 
    INPUT_CHANGE,
    SORT_PAGEVIEW_DOWN,
    SORT_PAGEVIEW_UP,
    TOGGLE_PAGEVIEWS,
    TOGGLE_PUBLICATIONS, 
    SORT_PUBLICATIONS_DOWN,
    SORT_PUBLICATIONS_UP,
    FIND_LEADERS,
    NEXT_PAGE, 
    PREV_PAGE
} from '../actions/actions';

export const fetchJsonData = (data) =>({
    type: AUTHORS_DATA_FETCHING,
    data
});

export const changeInputValue = (value) => ({
    type: INPUT_CHANGE,
    value
});

export const togglePageView = () => ({
    type: TOGGLE_PAGEVIEWS
});

export const togglePublications = () =>({
    type: TOGGLE_PUBLICATIONS
});

export const sortByPageViewDown = () => ({
    type: SORT_PAGEVIEW_DOWN 
});

export const sortByPageViewUp = () => ({
    type: SORT_PAGEVIEW_UP
});

export const sortPublicationDown = () =>({
    type:  SORT_PUBLICATIONS_DOWN
});

export const sortPublicationUp = () => ({
    type: SORT_PUBLICATIONS_UP
});

export const findLeaders = () => ({
    type: FIND_LEADERS
});

export const nextPage = () => ({
    type: NEXT_PAGE
});

export const prevPage = () => ({
    type: PREV_PAGE
});