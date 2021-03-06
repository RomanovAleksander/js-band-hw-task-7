import { SEARCH_TODO } from '../actions'

const searchText = (state = '', action) => {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_TODO:
            return payload.searchText;

        default:
            return state
    }
};

export default searchText;
