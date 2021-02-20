/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArchiveserviceService } from './archiveservice.service';

describe('ArchiveserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArchiveserviceService]
    });
  });

  it('should ...', inject([ArchiveserviceService], (service: ArchiveserviceService) => {
    expect(service).toBeTruthy();
  }));
});
