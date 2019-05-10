import { WatchlistItem } from '../models/movies';
import * as playbackActions from 'src/app/playback/actions';
import * as recommendationActions from 'src/app/recommendation/actions';
import { produce } from 'immer';
import { EntityState, createEntityAdapter } from '@ngrx/entity'

export interface State extends EntityState<WatchlistItem> {
}

export const entityAdapter = createEntityAdapter<WatchlistItem>();

export const initialState: State = entityAdapter.getInitialState();

const entitySelectors = entityAdapter.getSelectors();

export function reducer(state = initialState, action: playbackActions.ActionsUnion | recommendationActions.ActionsUnion): State {
  switch (action.type) {
    // VERSION with @ngrx/entity
    case playbackActions.playbackFinished.type:
      const itemToUpdate = entitySelectors.selectAll(state).find(item => item.movie.id === action.movieId);
      if (itemToUpdate) {
        return entityAdapter.updateOne({
          id: itemToUpdate.id,
          changes: { playbackMinutes: action.stoppedAtMinute }
        }, state);
      } else {
        return state;
      }

    case recommendationActions.addToWatchlist.type:
      return entityAdapter.addOne({id: action.watchlistItemId, movie: action.movie, added: action.addedAt, playbackMinutes: 0}, state);

    // VERSION with immer
    // case playbackActions.playbackFinished.type:
    //   return produce(state, draft => {
    //     const itemToUpdate = draft.items.find(item => item.movie.id === action.movieId);
    //     if (itemToUpdate) {
    //       itemToUpdate.playbackMinutes = action.stoppedAtMinute;
    //     }
    //   });

    // VERSION with immutable mapping
    // return {
    //   ...state,
    //   items: state.items.map(updatePlaybackMinutesMapper(action.movieId, action.stoppedAtMinute))
    // };

    default:
      return state;
  }
}

// export function updatePlaybackMinutesMapper(movieId: number, stoppedAtMinute: number) {
//   return (item: WatchlistItem) => {
//     if (item.movie.id === movieId) {
//       return {
//         ...item,
//         playbackMinutes: stoppedAtMinute
//       };
//     } else {
//       return item;
//     }
//   };
// }

export const getAllItems = entitySelectors.selectAll;
