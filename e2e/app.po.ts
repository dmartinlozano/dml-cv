import { browser, element, by } from 'protractor';

export class DmlCvPage {

  navigateTo() {
    browser.driver.manage().window().maximize();
    return browser.get('https://dml-cv.herokuapp.com/');
  }

  getName() {
    return element(by.id('name')).getText();
  }
}
