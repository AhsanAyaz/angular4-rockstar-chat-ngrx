import { browser, element, by } from 'protractor';

export class ChatsPage {
  navigateTo() {
    return browser.get('/#chat');
  }

  getChatTitleText() {
    return element(by.css('ar-chat .heading')).getText();
  }

  getMessages(){
      return element.all(by.css('ar-chat-messages .message-item'));
  }

  getNewMessageInput(){
      return element(by.css('.write-box .chat-input'));
  }

  getMsgSubmitBtn(){
      return element(by.css('.send-button .btn'));
  }

}
