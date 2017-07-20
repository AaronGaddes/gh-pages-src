import { GhPagesSrcPage } from './app.po';

describe('gh-pages-src App', () => {
  let page: GhPagesSrcPage;

  beforeEach(() => {
    page = new GhPagesSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
