import { TestBed } from '@angular/core/testing';

import { SpToastService } from './sp-toast.service';

describe('SpToastService', () => {
  let service: SpToastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpToastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
