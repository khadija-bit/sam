import { SamPage } from './app.po';

describe('sam App', function() {
  let page: SamPage;

  beforeEach(() => {
    page = new SamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
