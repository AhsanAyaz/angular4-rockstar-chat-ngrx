import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../../providers';
import { Message } from '../../models/message';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ar-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {
  @Output() public onMessageSent = new EventEmitter<any>();
  public chatInput = '';
  constructor(private chatService: ChatService, private store: Store<any>) { }

  ngOnInit() {

  }

  /**
   * @author Ahsan Ayaz
   * Creates a new message and emits to parent component
   */
  sendMessage() {
    const id = Math.ceil(Math.random() * 1000 + 1);
    const message: Message = this.chatService.processMessages([{id: id, text: this.chatInput}])[0];
    this.store.dispatch({
      type: 'ADD_MESSAGE',
      payload: message
    });
    this.chatInput = '';
  }
}
