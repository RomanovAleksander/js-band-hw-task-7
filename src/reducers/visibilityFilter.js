import { VisibilityPriorityFilters } from '../actions'

const filterByPriority = (state = VisibilityPriorityFilters.SHOW_ALL, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'FILTER_BY_PRIORITY':
            return payload.priorityFilter;
        default:
            return state
    }
};

export default filterByPriority;