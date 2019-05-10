import { createAction, props, union } from '@ngrx/store';
import { Movie } from 'src/app/watchlist/models/movies';

export const loadRecommendedMovies = createAction('[Recommendation List] Load movies');
export const loadRecommendedMoviesSuccess = createAction('[Recommendation API] Load movies success', props<{movies: Movie[]}>());
export const loadRecommendedMoviesFailure = createAction('[Recommendation API] Load movies failure', props<{ error: any }>());
export const addToWatchlist = createAction('[Recommendation List] Add to watchlist',
    props<{ watchlistItemId: number, movie: Movie, addedAt: Date }>());

const actions = union({
    loadRecommendedMovies,
    loadRecommendedMoviesSuccess,
    loadRecommendedMoviesFailure,
    addToWatchlist
});

export type ActionsUnion = typeof actions;
