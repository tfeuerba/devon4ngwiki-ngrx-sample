import { TestBed } from '@angular/core/testing';

import { RecommendationApiService } from './recommendation-api.service';

describe('RecommendationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationApiService = TestBed.get(RecommendationApiService);
    expect(service).toBeTruthy();
  });
});
