
import { ActionReducer, Action } from '@ngrx/store';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const REMOVE_ALL = 'RESET';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_ERROR = 'LOAD_MESSAGES_ERROR';

export const messages: ActionReducer<any> = (state = [], action: Action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [
                ...state,
                action.payload
            ];
        case REMOVE_MESSAGE:
            return state.filter((message) => {
                return message.id !== action.payload;
            });
        case REMOVE_ALL:
            return state;
        case LOAD_MESSAGES_SUCCESS:
        case LOAD_MESSAGES_ERROR:
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};
