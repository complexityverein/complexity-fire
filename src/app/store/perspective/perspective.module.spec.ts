import { PerspectiveModule } from './perspective.module';

describe('PerspectiveModule', () => {
  let perspectiveModule: PerspectiveModule;

  beforeEach(() => {
    perspectiveModule = new PerspectiveModule();
  });

  it('should create an instance', () => {
    expect(perspectiveModule).toBeTruthy();
  });
});
