import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RecommendationApiService } from './services/recommendation-api.service';
import * as recommendationActions from 'src/app/recommendation/actions';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RecommendationEffects {

  constructor(
    private actions$: Actions,
    private recommendationApi: RecommendationApiService,
  ) { }

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(recommendationActions.loadRecommendedMovies.type),
    switchMap(() => this.recommendationApi.loadRecommendedMovies().pipe(
      map(movies => recommendationActions.loadRecommendedMoviesSuccess({ movies })),
      catchError(error => of(recommendationActions.loadRecommendedMoviesFailure({ error })))
    ))
  );
}
