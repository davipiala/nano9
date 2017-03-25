import { Nano9Page } from './app.po';

describe('nano9 App', () => {
  let page: Nano9Page;

  beforeEach(() => {
    page = new Nano9Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
