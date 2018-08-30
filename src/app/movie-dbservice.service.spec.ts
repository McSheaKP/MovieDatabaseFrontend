import { TestBed, inject } from '@angular/core/testing';

import { MovieDBServiceService } from './movie-dbservice.service';

describe('MovieDBServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDBServiceService]
    });
  });

  it('should be created', inject([MovieDBServiceService], (service: MovieDBServiceService) => {
    expect(service).toBeTruthy();
  }));
});
