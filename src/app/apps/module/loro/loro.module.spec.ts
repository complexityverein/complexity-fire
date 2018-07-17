import { LoroModule } from './loro.module';

describe('LoroModule', () => {
  let loroModule: LoroModule;

  beforeEach(() => {
    loroModule = new LoroModule();
  });

  it('should create an instance', () => {
    expect(loroModule).toBeTruthy();
  });
});
