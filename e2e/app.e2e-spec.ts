import { DmlCvPage } from './app.po';

describe('DML CV App', () => {
  let page: DmlCvPage;

  beforeEach(() => {
    page = new DmlCvPage();
  });

  it('The name of CV is ok', () => {
    page.navigateTo();
    expect<any>(page.getName()).toEqual('David Martín Lozano');
  });
});
