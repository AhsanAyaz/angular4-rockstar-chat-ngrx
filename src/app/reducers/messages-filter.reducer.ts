
import { ActionReducer, Action } from '@ngrx/store';

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_MINE = 'SHOW_MINE';


// because we have to persist the filter
let lastAction: Action = {
    type: '',
    payload: null
};

export const messagesFilter: ActionReducer<any> = (state = message => message, action: Action) => {
    lastAction = (action.type === SHOW_ALL || action.type === SHOW_MINE) ? action : lastAction;
    switch (lastAction.type) {
        case SHOW_ALL:
            return message => message;
        case SHOW_MINE:
            return message => message.userId === lastAction.payload;
        default:
            return message => message;
    }
};
