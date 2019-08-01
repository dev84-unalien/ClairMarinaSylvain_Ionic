import { TestBed } from '@angular/core/testing';

import { AjaxControllerService } from './ajax-controller.service';

describe('AjaxControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjaxControllerService = TestBed.get(AjaxControllerService);
    expect(service).toBeTruthy();
  });
});
