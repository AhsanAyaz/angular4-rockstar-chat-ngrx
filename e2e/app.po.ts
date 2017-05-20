import { browser, element, by } from 'protractor';

export class Angular4RockstarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ar-root h1')).getText();
  }
}
