import { ChatsPage } from './chats.po';
import { browser } from 'protractor';

describe('angular4-rockstar App', () => {
  let page: ChatsPage;

  beforeEach(() => {
    page = new ChatsPage();
  });

  it('should display a heading with app title', () => {
    page.navigateTo();
    expect(page.getChatTitleText()).toEqual('Angular4 Rockstar Chat - NgRx');
  });


  it('should have a list of 4 initial messages', () => {
    page.navigateTo();
    const messages = page.getMessages();
    const count = messages.count();
    expect(count).toBe(4);
  });

  it('should add a new message to the chat list on new message sending', () => {
      page.navigateTo();
      const input = page.getNewMessageInput();
      const submitBtn = page.getMsgSubmitBtn();
      input.sendKeys('This is a new test message');
      submitBtn.click();
      const messages = page.getMessages();
      const count = messages.count();
      expect(count).toBe(5);
  });

});
