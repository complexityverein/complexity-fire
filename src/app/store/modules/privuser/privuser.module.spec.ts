import { PrivuserModule } from './privuser.module';

describe('PrivuserModule', () => {
  let privuserModule: PrivuserModule;

  beforeEach(() => {
    privuserModule = new PrivuserModule();
  });

  it('should create an instance', () => {
    expect(privuserModule).toBeTruthy();
  });
});
