import { Action } from '@ngrx/store';
import { Movie } from 'src/app/watchlist/models/movies';
import * as recommendationActions from 'src/app/recommendation/actions';
import { strictEqual } from 'assert';


export interface State {
  items: Movie[];
  loading: boolean;
}

export const initialState: State = {
  items: [],
  loading: false
};

export function reducer(state = initialState, action: recommendationActions.ActionsUnion): State {
  switch (action.type) {
    case '[Recommendation List] Load movies':
      return {
        ...state,
        items: [],
        loading: true
      };

    case '[Recommendation API] Load movies failure':
      return {
        ...state,
          loading: false
      };

    case '[Recommendation API] Load movies success':
      return {
        ...state,
        items: action.movies,
        loading: false
      };

    default:
      return state;
  }
}

export const getAll = (state: State) => state.items;
export const isLoading = (state: State) => state.loading;
