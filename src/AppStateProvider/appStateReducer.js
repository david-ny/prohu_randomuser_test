import { addUsers, goToPrevPage, goToNextPage } from './appStateReducerUtils';

export default function appStateReducer(state, action) {
    switch (action.type) {
        case 'addUsers': return addUsers(state, action);
        case 'goToPrevPage': return goToPrevPage(state);
        case 'goToNextPage': return goToNextPage(state);
        default:
            throw new Error(`appStateReducer - unknown action: ${action?.type}`);
    }
}
