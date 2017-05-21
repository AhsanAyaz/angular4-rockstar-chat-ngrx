import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { ChatService } from '../providers/chat.service';

@Injectable()
export class ChatEffects {
    @Effect() getMessages$ = this.actions$
        // Listen for the 'LOAD_MESSAGES' action
        .ofType('LOAD_MESSAGES')
        // Map the payload into JSON to use as the request body
        .map(action => JSON.stringify(action.payload))
        .switchMap(payload => this.chatService.getMessages()
        // If successful, dispatch success action with result
        .map(res => ({ type: 'LOAD_MESSAGES_SUCCESS', payload: res }))
        // If request fails, dispatch failed action
        .catch(() => Observable.of({ type: 'LOAD_MESSAGES_FAILURE' }))
        );
    constructor(
        private chatService: ChatService,
        private actions$: Actions
    ) { }
}
