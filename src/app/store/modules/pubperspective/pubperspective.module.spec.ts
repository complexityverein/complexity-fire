import { PubperspectiveModule } from './pubperspective.module';

describe('PubperspectiveModule', () => {
  let pubperspectiveModule: PubperspectiveModule;

  beforeEach(() => {
    pubperspectiveModule = new PubperspectiveModule();
  });

  it('should create an instance', () => {
    expect(pubperspectiveModule).toBeTruthy();
  });
});
