import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromRoot from 'src/app/reducers';
import * as fromRecommendedMovies from './recommended-movies.reducer';

export interface RecommendationState {

  recommendedMovies: fromRecommendedMovies.State;
}

export interface State extends fromRoot.State {
  recommendation: RecommendationState
}

export const reducers: ActionReducerMap<RecommendationState> = {
  recommendedMovies: fromRecommendedMovies.reducer,
};


export const metaReducers: MetaReducer<RecommendationState>[] = !environment.production ? [] : [];

export const getFeature = createFeatureSelector<State, RecommendationState>('recommendation');

export const getRecommendedMoviesState = createSelector(
  getFeature,
  state => state.recommendedMovies
);

export const getRecommendedMovies = createSelector(
  getRecommendedMoviesState,
  fromRecommendedMovies.getAll
);

export const isLoadingRecommendedMovies = createSelector(
  getRecommendedMoviesState,
  fromRecommendedMovies.isLoading
);
