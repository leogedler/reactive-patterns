import { ReactivePatternsPage } from './app.po';

describe('reactive-patterns App', () => {
  let page: ReactivePatternsPage;

  beforeEach(() => {
    page = new ReactivePatternsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
