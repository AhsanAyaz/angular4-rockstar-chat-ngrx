import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export interface Message {
  id: string;
  text: string;
  user?: string;
}

@Component({
  selector: 'ar-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {
  @ViewChild('messagesList') private messagesList: ElementRef;
  public messages$;
  public messagesLength: number;
  public myId = 2;
  public selectedFilter = null;
  public filterOptions = [{
    type: 'SHOW_ALL',
    text: 'Show All'
  }, {
    type: 'SHOW_MINE',
    text: 'Show Mine',
    payload: this.myId
  }];
  constructor(private store: Store<any>) {
    this.applyFilter(this.filterOptions[0]);  // apply SHOW_ALL filter initially
    this.fetchMessages();                     // fetch the messages from store
  }

  ngOnInit() {
      this.scrollToBottom();  // scroll to bottom on component init
  }


  /**
   * @author Ahsan Ayaz
   * The following function fetches the messages from the Store
   */
  fetchMessages(): void {
    this.messages$ = Observable.combineLatest(
      this.store.select('messages'),
      this.store.select('messagesFilter'),
      (messages: any, filter: any) => {
        const filteredMessages = messages.filter(filter);
        this.messagesLength = filteredMessages.length;
        this.scrollToBottom(100);  // scroll to bottom after content changed
        return filteredMessages;
      }
    ).distinctUntilChanged();
  }

  /**
   * @author Ahsan Ayaz
   * The following function is truggered when the user selects a filter from the dropdown
   * Sets the selectedFilter
   * @param filter
   */
  applyFilter(filter): void {
    this.store.dispatch(filter);
    this.selectedFilter = filter;
  }

  /**
   * @author Ahsan Ayaz
   * This function is triggered when the user clicks the cross button hovering on individual messages
   * Dispatches an action to Store and removes the individual message
   * @param message {Message}
   */
  removeMessage(message) {
    this.store.dispatch({
      type: 'REMOVE_MESSAGE',
      payload: message.id
    });
  }

  /**
   * @author Ahsan Ayaz
   * Scrolls to bottom
   */
  scrollToBottom(delay = 0) {
        setTimeout(() => {
            try {
              if (this.messagesList) {
                this.messagesList.nativeElement.scrollTop = this.messagesList.nativeElement.scrollHeight;
              }
            } catch (err) {
              console.log(err);
            }
        }, delay);
    }

}
