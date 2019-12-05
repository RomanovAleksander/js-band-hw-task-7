import { VisibilityDoneFilters } from '../actions'

const filterDone = (state = VisibilityDoneFilters.SHOW_ALL, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'FILTER_BY_DONE':
            return payload.doneFilter;
        default:
            return state
    }
}

export default filterDone;