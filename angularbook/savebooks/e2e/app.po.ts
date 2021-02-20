import { browser, element, by } from 'protractor';

export class SavebooksPage {
  navigateTo() {
    return browser.get('/map');
  }

  getTitle(){
    expect(element(by.tagName('em')).getText()).toBe('la Feltrinelli');
  }
  getMap() {
    expect(element(by.css('.gm-style')).isPresent()).toBe(true);
  }

  getSizeMap() {
    expect(element(by.css('.gm-style')).getSize()).toEqual(jasmine.objectContaining({
      height:300
    }));
  }
}
