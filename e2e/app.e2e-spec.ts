import { Demo0806Page } from './app.po';

describe('demo0806 App', function() {
  let page: Demo0806Page;

  beforeEach(() => {
    page = new Demo0806Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
