import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { Store } from '@ngrx/store';
@Component({
  selector: 'ar-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.loadMessages();
  }

  /**
   * @author Ahsan Ayaz
   * This function below dispatches the LOAD_MESSAGES action which fetches the message in the store
   * Currently the dummy messages
   */
  loadMessages(): void {
    this.store.dispatch({
      type: 'LOAD_MESSAGES'
    });
  }
}
