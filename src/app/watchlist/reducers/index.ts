import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromWatchlistData from './watchlist-data.reducer';
import * as fromRoot from 'src/app/reducers/index';

export interface WatchlistState {
  watchlistData: fromWatchlistData.State;
}

export interface State extends fromRoot.State {
  watchlist: WatchlistState;
}

export const reducers: ActionReducerMap<WatchlistState> = {
  watchlistData: fromWatchlistData.reducer,
};

export const metaReducers: MetaReducer<WatchlistState>[] = !environment.production ? [] : [];

export const getFeature = createFeatureSelector<State, WatchlistState>('watchlist');

export const getWatchlistData = createSelector(
  getFeature,
  state => state.watchlistData
);

export const getAllItems = createSelector(
  getWatchlistData,
  fromWatchlistData.getAllItems
);
