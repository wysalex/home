import { BlogFrontPage } from './app.po';

describe('blog-front App', function() {
  let page: BlogFrontPage;

  beforeEach(() => {
    page = new BlogFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
