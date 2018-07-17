import { TestBed, inject } from '@angular/core/testing';

import { LoroService } from './loro.service';

describe('LoroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoroService]
    });
  });

  it('should be created', inject([LoroService], (service: LoroService) => {
    expect(service).toBeTruthy();
  }));
});
