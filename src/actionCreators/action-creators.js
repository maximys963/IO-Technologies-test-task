import { AUTHORS_DATA_FETCHING, 
        INPUT_CHANGE,
        SORT_PAGEVIEW_DOWN 
    } from '../actions/actions';

export const fetchJsonData = (data) =>({
    type: AUTHORS_DATA_FETCHING,
    data
});

export const changeInputValue = (value) => ({
    type: INPUT_CHANGE,
    value
})

export const sortByPageViewDown = () => ({
    type: SORT_PAGEVIEW_DOWN 
})