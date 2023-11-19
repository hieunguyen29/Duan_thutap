/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrrderServiceService } from './Orrder-service.service';

describe('Service: OrrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrrderServiceService]
    });
  });

  it('should ...', inject([OrrderServiceService], (service: OrrderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
