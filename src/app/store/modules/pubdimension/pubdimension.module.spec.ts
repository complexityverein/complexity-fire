import { PubdimensionModule } from './pubdimension.module';

describe('PubdimensionModule', () => {
  let pubdimensionModule: PubdimensionModule;

  beforeEach(() => {
    pubdimensionModule = new PubdimensionModule();
  });

  it('should create an instance', () => {
    expect(pubdimensionModule).toBeTruthy();
  });
});
