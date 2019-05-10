import { WatchlistItem } from '../models/movies';
import * as playbackActions from 'src/app/playback/actions';
import { produce } from 'immer';

export interface State {
  items: WatchlistItem[];
}

export const initialState: State = {
  items: [
    {
      id: 42,
      movie: {
        id: 1,
        title: 'Die Hard',
        genre: 'action',
        releaseYear: 1988,
        runtimeMinutes: 132
      },
      playbackMinutes: 0,
      added: new Date(),
    }
  ]
};

export function reducer(state = initialState, action: playbackActions.ActionsUnion): State {
  switch (action.type) {
    case playbackActions.playbackFinished.type:
      return produce(state, draft => {
        const itemToUpdate = draft.items.find(item => item.movie.id === action.movieId);
        if (itemToUpdate) {
          itemToUpdate.playbackMinutes = action.stoppedAtMinute;
        }
      });
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

export const getAllItems = (state: State) => state.items;
