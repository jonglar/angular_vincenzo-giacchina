import { HelloWPage } from './app.po';

describe('hello-w App', function() {
  let page: HelloWPage;

  beforeEach(() => {
    page = new HelloWPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
