/*
    {
        type: string,
        payload?: any
    }
*/

import { ActionReducer, Action } from '@ngrx/store';

export const ADD_MESSAGE = 'INCREMENT';
export const REMOVE_MESSAGE = 'DECREMENT';
export const REMOVE_ALL = 'RESET';
export const LOAD_MESSAGES = 'LOAD_MESSAGES';

export const messages = (state = [], action: Action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_MESSAGE':
            return state.filter((message) => {
                return message.id !== action.payload;
            });
        case 'REMOVE_ALL':
            return state;
        case 'LOAD_MESSAGES':
            return [
                ...action.payload
            ];
        default:
            return state;
    }
};