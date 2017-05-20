import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message';
import { ChatService } from '../../providers';
import { Store } from '@ngrx/store';
@Component({
  selector: 'ar-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService, private store: Store<any>) { }

  ngOnInit() {
    this.loadMessages();
  }

  /**
   * @author Ahsan Ayaz
   * This function below fetches the initial messages from the ChatService
   * Currently the dummy messages
   */
  loadMessages(): void{
    this.chatService.getMessages()
      .subscribe((messages: Array<Message>) => {
        this.store.dispatch({
          type: 'LOAD_MESSAGES',
          payload: messages
        });
      });
  }
}
