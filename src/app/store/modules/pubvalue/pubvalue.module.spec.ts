import { PubvalueModule } from './pubvalue.module';

describe('PubvalueModule', () => {
  let pubvalueModule: PubvalueModule;

  beforeEach(() => {
    pubvalueModule = new PubvalueModule();
  });

  it('should create an instance', () => {
    expect(pubvalueModule).toBeTruthy();
  });
});
