import { SavebooksPage } from './app.po';

describe('savebooks App', function() {
  let page: SavebooksPage;

  beforeEach(() => {
    page = new SavebooksPage();
    page.navigateTo();
  });

  it('check title', () => {
    page.getTitle();
  });
  it('check map', () => {
    page.getMap();
  });
  it('check height map', () => {
    page.getSizeMap();
  });
});
