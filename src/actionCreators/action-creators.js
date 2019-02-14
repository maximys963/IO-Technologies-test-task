import { AUTHORS_DATA_FETCHING} from '../actions/actions';

export const fetchJsonData = (data) =>({
    type: AUTHORS_DATA_FETCHING,
    data: data
});