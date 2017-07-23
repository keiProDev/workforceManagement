import { WorkforceManagementPage } from './app.po';

describe('workforce-management App', () => {
  let page: WorkforceManagementPage;

  beforeEach(() => {
    page = new WorkforceManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
