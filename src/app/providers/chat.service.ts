import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../models/message';

export let messages: Array<Message> = [{ // dummy messages for the sample task
  id: 0,
  text: 'Hello there'
}, {
  id: 1,
  text: 'Hi'
}, {
  id: 2,
  text: 'How\'re you doing?'
}, {
  id: 3,
  text: 'Perfectly fine. How are you ?'
}];

@Injectable()
export class ChatService {

  constructor() { }

  /**
   * @author Ahsan Ayaz
   * This function currently sends a dummy list of messages (after processing the messages)
   * @return {Observable}
   */
  getMessages(): Observable<Array<Message>> {
    return Observable.of(this.processMessages(messages));
  }

  /**
   * @author Ahsan Ayaz
   * Returns an array of messages after processing it. Currently puts random userId and userImage url.
   * @param message {Array<Message>}
   * @return {Array<Message>}
   */
  processMessages(messages: Array<Message>): Array<Message> {
    return messages.map((message) => {
      const id = Math.ceil(Math.random() * 3 + 1);
      message.userId = id;
      message.userImage = `assets/images/users/${id}.jpg`;
      return message;
    });
  }

}
