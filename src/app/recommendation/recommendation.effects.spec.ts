import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { RecommendationEffects } from './recommendation.effects';

describe('RecommendationEffects', () => {
  let actions$: Observable<any>;
  let effects: RecommendationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RecommendationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RecommendationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
